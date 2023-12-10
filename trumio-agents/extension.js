const vscode = require("vscode");
const [generate,generateJson] = require("./LLMChain"); // For the Chat Bot
const axios = require("axios");

let path_to_env = __dirname.split('\\');
path_to_env = path_to_env.join("\\\\")

require('dotenv').config({path : path_to_env+'\\.env'});
const apiKey = process.env.OPENAI_API_KEY;

function activate(context) {
  const chatprovider = new ChatViewProvider(context.extensionUri); // Link Chat View Provider

  console.log("ENV Variables");
  console.log(process.env);
  
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      ChatViewProvider.viewType,
      chatprovider
    )
  );

  const msprovider = new MileStoneProvider(context.extensionUri);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      MileStoneProvider.viewType,
      msprovider
    )
  );







    // Code Explanation Functionality

  let disposable1 = vscode.commands.registerCommand(
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

        let base = `You are an experienced Software Unit Test Engineer specializing in Python and JavaScript. As an expert in your field, you have a deep understanding of unit testing methodologies and best practices. You possess strong problem-solving skills and have a knack for tackling complex test scenarios, ensuring code coverage, and optimizing performance. Your expertise in test automation and continuous integration practices allows you to streamline the testing process and maximize efficiency. Whether it's identifying elusive bugs or optimizing test suites, you're equipped to assist developers at every step. Give your answers in the form of properly organised points`;

        const gptSummary = await generateJson(
          `Now you are supposed to read this piece of code. Then you try to understand the logic behind the code and what its trying to do. Then give me a single string, the summary of the code that you have generated: ${selectedText} Note: Make sure there's a '\n' tag among every 10 words that you generate`
        );
         // GPT Response
        const gptError = await generateJson(
          `Now you are supposed to read this piece of code. Then you try to understand the logic behind the code and what its trying to do. Lets say you have generated 'x' errors. Join all of these errors together seperated by a newline and output the whole thing as a single single. ${selectedText} Note: Make sure there's a '\n' tag among every 10 words that you generate.`
        );
        const gpttests = await generateJson(
          base + `I will give you a piece of code. Try to understand the logic behind the code and what its trying to do. Then give me exactly 4 Testcases (input-output pairs call them input1,output1 ... ) for the code. I want you to generate a single string exactly in the following format:
          
          "
            Input1  - <your input1> 
            Output1 - <your output1>

            Input2  - <your input2>
            Output2 - <your output2>
          
            Input3  - <your input3> 
            Output3 - <your output3>

            Input4  - <your input4> 
            Output4 - <your output4>
          "

          Here keep the format exactly the same. Generate newlines after every input output pair as well and do not generate any extra content apart from what is specified in the format above. Just put the inputs and outputs that you generated in the "<your input>" and "<your output>" place respectively. Remember to generate just 4 testcases and keep the input size very limited (10 characters max). Here's the code:

          ${selectedText}
          
          Note: Make sure there's a '\n' tag among every 10 words that you generate`
        );

        // const gptInput = await generateJson(
        //   base + `Check for any possible inputs that this code takes and display them : ${selectedText}`
        // ); // GPT Response
        // const gptOutput = await generateJson(
        //   base + `Check for any possible outputs that this code gives and display them : ${selectedText}`
        // );
        
        const webstyleUri = panel.webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, 'media','web','webStyle.css'));
        
        // let displayObj = {Summary:gptSummary , Error:gptError , Tests:gptTests};
        // panel.webview.postMessage({command:"DisplaySummary",text:displayObj});  

        panel.webview.html = getWebviewContent(gptSummary , gptError , gpttests ,webstyleUri);
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

        writeToEditor(readobj,'\n');
        writeToEditor(readobj,gpt+'\n');
      }
    }
  );

  context.subscriptions.push(disposable1);
  context.subscriptions.push(disposable2);
}












// CODE SUMMARIZER FUNCTIONALITY

function getWebviewContent(gptSummary, gptError, gptTests, webstyleUri) {
  // HTML for webview

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="${webstyleUri}" rel="stylesheet">
        <title>WebView</title>
    </head>

    <body>
        <h1>Code Summary</h1>
        <span class = "text">${gptSummary}</span>
        <h1>Errors</h1>
        <span class = "text">${gptError}</span>
        <h1>Tests</h1>
        <pre class = "text">${gptTests}</pre>
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
      vscode.Uri.joinPath(this._extensionUri, "media",'bot',"botScript.js")
    );
    const styleUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media",'bot',"botStyle.css")
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
                </header>
    
                <ul class="chatbox">
                    <li class="chat incoming">
                        <span class="material-symbols-outlined">smart_toy</span>
                        <p>Hi there <br> How can I help you today?</p>
                    </li>
                </ul>
    
                <div class="chat-input">
                    <textarea placeholder="Enter a message... " required></textarea>
                    <span id="send-btn" class="material-symbols-outlined">send</span>
                </div>
            </div>
        </body>
    </html>`;
  }
}

ChatViewProvider.viewType = "chatView";









// MILE STONES TRACKER

class MileStoneProvider {
  constructor(extensionUri) {
    this._extensionUri = extensionUri;
  }

  resolveWebviewView(webviewView, context, _token) {
    this._view = webviewView;
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [vscode.Uri.joinPath(this._extensionUri, "media")], // Path
    };

    webviewView.webview.html = this.getMSTrackerWebview(webviewView.webview); // Link HTML
  }

  getMSTrackerWebview(webview) {

    // Link Script and Style files.

    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media","milestone","msScript.js")
    );
    const styleUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media","milestone","msStyle.css")
    );

    const nonce = getNonce();

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="${styleUri}" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <script nonce="${nonce}" src="${scriptUri}"></script>
        <title>Milestone Tracker</title>
    </head>
    <body>
        <div class="milestone-tracker">
            <div class="header">
                <h2>Milestone Tracker</h2>
            </div>

            <div class = "flex-container">
                <div class="project-dropdown">
                    <select name="project" id="project">
                      <option id="dummy">Project</option>
                    </select>
                </div>
                <div class="progress">
                    <div id="progress-bar" class="progress-bar">Progress</div>
                </div>
            </div>

            <ul class="milestone-list">
                <li class="milestone">
                    <div class = "flex-container">
                        <details>
                            <summary>Milestone 1</summary>
                            <ul class = "subTasks">
                                <label><input type="checkbox" name="task1"> Task 1</label>
                                <label><input type="checkbox" name="task2"> Task 2</label>
                                <label><input type="checkbox" name="task3"> Task 3</label>
                                <!-- More tasks can be added here -->
                            </ul>
                        </details>
                        <span class="tasks">3/4 tasks</span>
                        <span class="on-track">ON TRACK</span>
                    </div>
                </li>
                <li class="milestone">
                    <details>
                        <summary>Milestone 2</summary>
                        <ul class = "subTasks">
                            <label><input type="checkbox" name="task1"> Task 1</label>
                            <label><input type="checkbox" name="task2"> Task 2</label>
                            <label><input type="checkbox" name="task3"> Task 3</label>
                            <!-- More tasks can be added here -->
                        </ul>
                    </details>
                    <span>3/4 tasks</span>
                    <span class="on-track">ON TRACK</span>
                </li>
                <!-- More milestones can be added here -->
            </ul>
        </div>
    </body>
    </html>`;
  }
}

MileStoneProvider.viewType = "mileStoneView";

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