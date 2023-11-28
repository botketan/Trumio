const vscode = require('vscode');
const generate = require("./API/LLMChain"); // For the Chat Bot

function activate(context) {
    const provider = new ChatViewProvider(context.extensionUri); // Link Chat View Provider

    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider(ChatViewProvider.viewType, provider)
    );

	let disposable = vscode.commands.registerCommand('trumio.CodeExplanation', async function () { //Code Explanation View
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selectedText = editor.document.getText(editor.selection);

            const panel = vscode.window.createWebviewPanel(
                'webView',
                'Code Summarizer',
                vscode.ViewColumn.Beside,
                {}
            );

            // Here you would typically set the HTML content for your webview
            // For React, you'd link to your bundled JS file

			const gpt = await generate(`Summarize this piece of code : ${selectedText}`) // GPT Response
            panel.webview.html = getWebviewContent(gpt);
        }
    });

    context.subscriptions.push(disposable);
}

function getWebviewContent(selectedText) { // HTML for webview

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
		this._view=webviewView;
		webviewView.webview.options = {
			enableScripts: true,
            localResourceRoots: [vscode.Uri.joinPath(this._extensionUri, 'media')] // Path
        };
		
        webviewView.webview.html = this.getChatBotWebview(webviewView.webview); // Link HTML

        webviewView.webview.onDidReceiveMessage( // Linking frontend to backend (If webview got some message)
			async message => {
				switch (message.command) {
					case 'submit':
						console.log(`Message from You: ${message.text}`);

						const gpt = await generate(message.text); // GPT Response (Promise)
						console.log(`Message from GPT : ${gpt}`);
						break;
					}
				},
				undefined,
				context.subscriptions
				);
			}
			
			getChatBotWebview(webview) { // HTML for the chatbot's view

                // Link Script and Style files.

				const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'script.js')); 
				const styleUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'botStyle.css'));

                const nonce = getNonce();
				
				return `<!DOCTYPE html>
				<html lang="en">
					<head>
						<meta charset="UTF-8">
						<meta name="viewport" content="width=device-width, initial-scale=1.0">

                        <link href="${styleUri}" rel="stylesheet">

						<title>Chat Bot</title>
					</head>
					<body>
						<div>
							<form id="chatForm">
								<input type="text" id="chatInput" placeholder="Type something...">
								<button type="submit">Send</button>
							</form>
						</div>
						<script nonce="${nonce}" src="${scriptUri}"></script>
					</body>
				</html>`;
			}
}

ChatViewProvider.viewType = "chatView";

function getNonce() { // For security 
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
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
    deactivate
};
