const vscode = acquireVsCodeApi();

document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chatForm');
    chatForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const chatInput = document.getElementById('chatInput');
        const userMsg = chatInput.value.trim();
        if (userMsg) {
            vscode.postMessage({
                command: 'submit',
                text: userMsg
            });
            chatInput.value = '';
        }
    });
});
