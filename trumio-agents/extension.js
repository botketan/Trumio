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

        const gpt = await generate(
          `Summarize this piece of code : ${selectedText}`
        ); // GPT Response
        panel.webview.html = getWebviewContent(gpt);
      }
    }
  );

  context.subscriptions.push(disposable);
}

function getWebviewContent(selectedText) {
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
        <h1>Code Explanation</h1>
        <p>${selectedText}</p>
        <!-- Include your React bundle here -->
    </body>
    </html>`;
}

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
                <!-- <li class="chat outgoing">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
                <li class="chat incoming">
                <span class="material-symbols-outlined">smart_toy</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, nemo?</p>
                </li> -->
                </ul>
                <div class="chat-input">
                <textarea placeholder="Enter a messege... " required></textarea>
                <span id="send-btn" class="material-symbols-outlined">send</span>
                </div>
                </div>
                </body>
                    </html>
            <!DOCTYPE html>
                `;
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
