const vscode = acquireVsCodeApi();

document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chatForm');
    chatForm.addEventListener('submit', (event) => { // On sending message to the bot
        event.preventDefault();
        const chatInput = document.getElementById('chatInput');
        const userMsg = chatInput.value.trim();
        if (userMsg) {
            vscode.postMessage({ // POst message to vs code's "extension.js" page
                command: 'submit',
                text: userMsg
            });
            chatInput.value = '';
        }
    });
});
