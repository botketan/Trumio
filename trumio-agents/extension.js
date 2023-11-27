const vscode = require('vscode');

function activate(context) {
    const provider = new ChatViewProvider(context.extensionUri);

    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider(ChatViewProvider.viewType, provider)
    );
	
}

class ChatViewProvider {
	constructor(extensionUri) {
		this._extensionUri = extensionUri;
    }
	
    resolveWebviewView(webviewView, context, _token) {
		this._view=webviewView;
		webviewView.webview.options = {
			enableScripts: true,
            localResourceRoots: [vscode.Uri.joinPath(this._extensionUri, 'media')]
        };
		
        webviewView.webview.html = this.getHtmlForWebview(webviewView.webview);
        webviewView.webview.onDidReceiveMessage(
			message => {
				switch (message.command) {
					case 'submit':
						console.log(`Message from the WebView: ${message.text}`);
                        break;
					}
				},
				undefined,
				context.subscriptions
				);
			}
			
			getHtmlForWebview(webview) {
				const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'script.js'));
				const nonce = getNonce();
				
				return `<!DOCTYPE html>
				<html lang="en">
				<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Chat</title>
				</head>
				<body>
				<form id="chatForm">
                <input type="text" id="chatInput" placeholder="Type something...">
                <button type="submit">Send</button>
				</form>
				<script nonce="${nonce}" src="${scriptUri}"></script>
				</body>
				</html>`;
			}
}
ChatViewProvider.viewType = "chatView";
function getNonce() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

exports.activate = activate;

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
