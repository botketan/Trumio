import React, { useState } from "react";
import { Carousel } from '@heathmont/moon-core-tw';
import { ControlsChevronLeftSmall, ControlsChevronRightSmall} from '@heathmont/moon-icons-tw';
import { Link } from 'react-router-dom';
import axios from "axios";

const ExpertAgents = ({chatIds}) => {
  const carouselItems = chatIds.map((chat, index)=>{
    return {id: chat._id, name: chat.botname}
  });
  const initialMessages= chatIds.map((chat, index)=>{
    const items= chat.messages.filter((message)=> message.role!='system').map((message)=>{
      return {id: chat._id, content: message.content, role: message.role}
    })
    return items;
  })
  const [messages, setMessages] = useState(initialMessages.flat());
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = async (itemid) => {
    if (newMessage.trim()) {
      setMessages((prevMessages)=> [...prevMessages, { id: itemid, content: newMessage, role: "user" }]);
      
      axios.post("http://localhost:5000/cia/postChat",{chatId:itemid,ques:newMessage}).then((res) => {
          console.log(res.data.message);
          setMessages((prevMessages)=>[...prevMessages,{id: itemid, ...res.data.message}])
      }).catch((err) => {
          console.log(err);
      });
      setNewMessage('');
    }
  };

  const handleKeyDown = (e, itemid) => {
    if(e.key == 'Enter'){
      handleSendMessage(itemid);
    }
  }

  return (

    <div className="w-[28.88vw] h-[318px] relative bg-white rounded-xl shadow-md border border-neutral-200 pl-[16px] pr-[16px]">
      
      <div className="w-[26.88vw] h-8 pl-2 justify-between items-center inline-flex mt-[16px] mb-[10px]">
        <h1 className="text-zinc-600 text-base font-normal font-dmsans leading-normal">Your Go-To Expert Agents</h1>
        <Link to="/cia">
        <button className="px-3 py-1 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center flex">
          <div className="text-center text-blue-600 text-sm font-medium font-dmsans leading-normal">View All</div>
        </button>
        </Link>
      </div>

      <Carousel step={1} className="">
        <Carousel.LeftArrow className='w-12 h-12 p-3 bg-white rounded-full shadow border border-neutral-200 justify-center items-center'>
        <ControlsChevronLeftSmall/>
        </Carousel.LeftArrow>
        <Carousel.Reel className=''>
                {carouselItems.map((item) => (

                    <Carousel.Item key={item.id} className="flex flex-col w-[356px] h-[244px] relative bg-white rounded-xl border border-neutral-200">
                        
                        <div className='flex max-w-[356px] w-[356px] h-[52px] relative bg-blue-600 rounded-t-xl justify-between'>
                          <div className='flex'>
                            <div className="ml-[12px] mt-[10px] mb-[10px] mr-[12px] w-8 h-8 relative bg-white rounded-full"><div className="w-6 h-6 left-[4px] top-[8px] absolute text-center text-black text-xs font-medium font-dmsans leading-none">CI</div></div>
                            <div className="mt-[15px]  text-white text-sm font-medium font-dmsans leading-normal">{item.name}</div>
                          </div>
                          <div>
                          <Link to="/cia">
                            <img src="expandSVG.svg" alt="Expand SVG" className="h-[11.87px] w-[11.87px] ml-[12px] mt-[20px] mb-[10px] mr-[20px]"/>
                          </Link>  
                          </div>
                        </div>
                        <div className='h-[192px] w-[356px] max-w-[356px] border border-2ndPersontom grey-200 overflow-y-auto overflow-x-hidden'>

                        {messages.filter((message)=>message.id==item.id).map(message => (
                          <div className={`flex ${message.role === 'assistant' ? 'justify-start p-[8px] ml-[5px]' : 'justify-end p-[8px] mr-[5px]'}`}>
                            <p className={`flex ${message.role === "assistant" ? 'rounded-b-xl rounded-tr-xl px-4 max-w-[300px] py-2 bg-blue-100 lg:max-w-[300px] overflow-x-hidden':'rounded-b-xl rounded-tl-xl px-4 max-w-[300px] py-2 bg-blue-100 overflow-x-hidden lg:max-w-md'}`} style= {{overflowWrap: "break-word"}}>
                              {message.content}
                            </p>
                          </div>
                        ))}

                        </div>
                        <div className="w-[356px] pl-[16px] pr-[16px] mt-4 mb-[18px] flex items-center justify-between">
                            <input
                            className="w-full h-full form-input text-sm rounded focus:outline-none"
                            placeholder={`Reply to ${item.name}`}
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, item.id)}
                            />
                            <button className="w-5 h-5 relative" onClick={()=>handleSendMessage(item.id)}>
                              <img src="sendSVG.svg" alt="Send SVG" className="w-full h-full"/>
                            </button>
                        </div>                
                    
                    </Carousel.Item>
                ))}
        </Carousel.Reel>
        <Carousel.RightArrow className='w-12 h-12 p-3 bg-white rounded-full shadow border border-neutral-200 justify-center items-center inline-flex'>
        <ControlsChevronRightSmall />
        </Carousel.RightArrow>
        </Carousel>

      
    </div>
  );
};

export default ExpertAgents;