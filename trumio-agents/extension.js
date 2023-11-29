const vscode = require("vscode");
const generate = require("./API/LLMChain"); // For the Chat Bot

function activate(context) {
  const provider = new ChatViewProvider(context.extensionUri); // Link Chat View Provider

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      ChatViewProvider.viewType,
      provider
    )
  );

    // Code Explanation Functionality

  let disposable = vscode.commands.registerCommand(
    "trumio.CodeExplanation",
    async function () {
      //Code Explanation View
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const selectedText = editor.document.getText(editor.selection);

        const panel = vscode.window.createWebviewPanel(
          "webView",
          "Code Summarizer",
          vscode.ViewColumn.Beside,
          {}
        );

        // Here you would typically set the HTML content for your webview
        // For React, you'd link to your bundled JS file

        const gpt_summary = await generate(
          `Summarize this piece of code : ${selectedText}`
        ); // GPT Response
        const gpt_error = await generate(
          `Let me know if there are any syntactical errors in this peice of code : ${selectedText}`
        );
        panel.webview.html = getWebviewContent(gpt_summary, gpt_error);
      }
    }
  );

    // Add Comments Functionality

  let disposable2 = vscode.commands.registerCommand(
    "trumio.AddComments",
    async function () {
      //Add Comments Functionality
      
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const readobj = await readSelectedText();

        const gpt = await generate( // GPT Prompt
          `You are given a code and its file type below. All you need to do is to generate crisp comments for the code. You are supporsed to read the whole code first and then using the file type given, generate multiline - comments for the code in that language itself. For eg, use // {your comment} for C++ or ''' {Your Comment} ''' for python.
          Remember, these are supposed to be really crisp and short while containing the important information mainly in regard with what it is trying to do. Don't include anything else other than the code's functionality. Don't include the language of the code either.

          Code: ${readobj.selectedText}

          File Type: ${readobj.fileType}`
        ); // GPT Response

        console.log(gpt);

        writeToEditor(readobj,gpt+'\n');
      }
    }
  );

  context.subscriptions.push(disposable);
  context.subscriptions.push(disposable2);
}

// CODE SUMMARIZER FUNCTIONALITY

function getWebviewContent(gpt_summary, gpt_error) {
  // HTML for webview

    // const webstyleUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'webStyle.css'));

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="./media/webStyle.css" rel="stylesheet">
        <title>WebView</title>
    </head>
    <body>
        <h1>Code Summary</h1>
        <p>${gpt_summary}</p>
        <h1>Errors</h1>
        <p>${gpt_error}</p>
        <!-- Include your React bundle here -->
    </body>
    </html>`;
}

// ADD COMMENT FUNCTIONALITY

async function readSelectedText() { // Read selected text and the following paramters (needed for writing operation)
  const activeEditor = vscode.window.activeTextEditor;

  const selection = activeEditor.selection;

  const document = activeEditor.document;
  const startPosition = activeEditor.selection.start;
  const selectedText = document.getText(selection);
  let position = startPosition;
  const fileType = document.languageId;

  return {
    selection: selection,
    document: document,
    selectedText: selectedText,
    position: position,
    fileType: fileType,
  };
};

async function insertCharacter(document, position, char) { // Insert a single character
  const edit = new vscode.WorkspaceEdit();
  edit.insert(document.uri, position, char);
  await vscode.workspace.applyEdit(edit);
}

async function writeToEditor(readobj,text) { // Write the whole text to the editor
  let document = readobj.document;
  let position = readobj.position;
  let delay = 10
  let line = position.line - 1;
  if (line === -1){
    line = 0;
  }
  let character = position.character;

  for (const char of text) {
    if (char === "\n") {
      await insertCharacter(
        document,
        new vscode.Position(line, character),
        char
      );
      line++;
      character = 0;
    } 
    else {
      await insertCharacter(
        document,
        new vscode.Position(line, character),
        char
      );
      character++;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
};

// CHAT BOT FUNCTIONALITY

class ChatViewProvider {
  constructor(extensionUri) {
    this._extensionUri = extensionUri;
  }

  resolveWebviewView(webviewView, context, _token) {
    this._view = webviewView;
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [vscode.Uri.joinPath(this._extensionUri, "media")], // Path
    };

    webviewView.webview.html = this.getChatBotWebview(webviewView.webview); // Link HTML

    webviewView.webview.onDidReceiveMessage(
      // Linking frontend to backend (If webview got some message)
      async (message) => {
        switch (message.command) {
          case "submit":
            console.log(`Message from You: ${message.text}`);

            const gpt = await generate(message.text); // GPT Response (Promise)
            webviewView.webview.postMessage({command:"response",text:gpt}); // Send GPT Response to webview
            console.log(`Message from GPT : ${gpt}`);
            break;
        }
      },
      undefined,
      context.subscriptions
    );
  }

  getChatBotWebview(webview) {
    // HTML for the chatbot's view

    // Link Script and Style files.

    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "script.js")
    );
    const styleUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "botStyle.css")
    );

    const nonce = getNonce();

    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Trumio-Agent</title>
            <link href="${styleUri}" rel="stylesheet">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0">
            <script nonce="${nonce}" src="${scriptUri}"></script>
        </head>
        
        <body class="show-chatbot">
            <button class="chatbot-toggler">
                <span class="material-symbols-outlined">mode_comment</span>
                <span class="material-symbols-outlined">close</span>
            </button>
            <div class="chatbot">
                <header>
                    <h2>ChatBot</h2>
                    <span class="material-symbols-outlined">close</span>
                </header>
    
                <ul class="chatbox">
                    <li class="chat incoming">
                        <span class="material-symbols-outlined">smart_toy</span>
                        <p>Hi there <br> How can I help you today?</p>
                    </li>
                </ul>
    
                <div class="chat-input">
                    <textarea placeholder="Enter a messege... " required></textarea>
                    <span id="send-btn" class="material-symbols-outlined">send</span>
                </div>
            </div>
        </body>
    </html>`;
  }
}

ChatViewProvider.viewType = "chatView";

function getNonce() {
  // For security
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

exports.activate = activate; // Defined to have the file start with the activate function

// Deavtivate the extension once used.

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
