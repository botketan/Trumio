import { ChatChat } from '@heathmont/moon-icons-tw';
import { useState,useRef,useEffect } from 'react';
import ChatComponent from './chatComponent';
import './CIA.css';
const Chats = () => {
    const containerRef=useRef(null);
    const [chats,setChat]=useState('');
    const [messages,setMessages]=useState([]);
    const handleChange=(e)=>{
        setChat(e.target.value);
    }
    const sendChat=async()=>{
        if(chats.trim() !== ""){
        const newMessage= {role:"user",content:chats}
        setMessages((prevMessages)=>[...prevMessages,newMessage])
        }
        setChat('');
    }

    useEffect(()=>{
        scrollToBottom();
    },[messages])

    const scrollToBottom = () => {
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    };

    const handleKeyDown = (e) => {
        
        if (e.key === 'Enter') {
          
          e.preventDefault();
          
          sendChat();
        }
      };
    

return (
    <>
        <div className="container mx-auto relative mb-8 rounded-xl shadow-xl pt-4 border-2 " style={{height:"616px",width:"914px"}}>
        <div className='contaner overflow-auto chat' ref={containerRef} style={{'height':"90%",'width':"100%",}}>
            {messages.map((message,i)=>(
                <ChatComponent key={i} props={message}></ChatComponent>
            ))}
        </div>

        <hr className='absolute bottom-12' style={{width:"100%"}}></hr>
        <div className="flex absolute bottom-0 items-center" style={{height:"48px",width:"100%"}}>
            
            <input  className="pl-6 border-none outline-none" style={{width:"90%"}} placeholder='Reply to ProdWizard....' value={chats} onChange={handleChange} onKeyDown={handleKeyDown}></input>
            <button className='bg-cyan-100 rounded-lg ml-3 items-center' style={{width:"5%"}} onClick={sendChat}>
                <ChatChat className='h-8 w-8 mx-auto my-auto' />
            </button>
        </div>
        </div>
    </>
  )
}

export default Chats