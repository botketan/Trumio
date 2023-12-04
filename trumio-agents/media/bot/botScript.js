const vscode = acquireVsCodeApi();


document.addEventListener('DOMContentLoaded', () => {
    const sendChatBtn = document.querySelector(".chat-input span");
    const chatInput = document.querySelector(".chat-input textarea");
    const chatbox = document.querySelector(".chatbox");
    console.log('DOM loaded');
    
    
    let userMessage;
    
    const createChatLi = (message,className)=>{
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", className);
        let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
        chatLi.innerHTML = chatContent;
        return chatLi;
    }
    
    
    const handleChat = () =>{
        userMessage =  chatInput.value.trim();
        
        if(!userMessage) return;
        
        // apppend the user's message to the chatbox
        chatbox.appendChild(createChatLi(userMessage ,"outgoing"));
        vscode.postMessage({ // Post message to vs code's "extension.js" page
            command: 'submit',
            text: userMessage
        });
        chatInput.value = '';
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); 
            handleChat();
        }
    }
    
    sendChatBtn.addEventListener("click", handleChat);
    chatInput.addEventListener("keypress", handleKeyPress);
    window.addEventListener('message', event => {
        const message = event.data; // The JSON data our extension sent
        switch (message.command) {
            case 'response':
                console.log(message.text);
                chatbox.appendChild(createChatLi(message.text,"incoming"));
                break;
        }
    });
    
});
