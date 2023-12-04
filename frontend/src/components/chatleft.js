// import React from 'react';
// import { Accordion } from '@heathmont/moon-core-tw';
// import { ControlsChevronDownSmall } from '@heathmont/moon-icons-tw';

// const Chat = ({ chatData }) => (

//     <Accordion>

//         <div className='bg-white rounded-xl shadow border border-neutral-200' style={{ width: "25%", padding : '10px 10px 10px 10px'}}>
//             <div className="w-[336px] pl-2 left-[12px] top-[16px] justify-between items-center inline-flex" style={{paddingBottom : '10px'}}>
//                 <div className="text-zinc-600 text-base font-normal font-['DM Sans'] leading-normal">Your Chats</div>
//                 <div className="justify-start items-center gap-2 flex">
//                     <div className="pl-1 pr-3 py-1 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center gap-1 flex">
//                         <div className="w-6 h-6 relative" />
//                         <div className="text-blue-600 text-sm font-medium font-['DM Sans'] leading-normal">New CI Agent</div>
//                     </div>
//                 </div>
//             </div>

//             {chatData.map((data, index) => (

//                 <Accordion.Item value={`item-${index}`}>
//                     <div className='bg-white rounded-lg border border-neutral-200 px-2 py-3 ' style={{ marginBottom: '10px' }}>
//                         <Accordion.Header className="moon-open:[&_svg]:rotate-180">
//                             <Accordion.Button>
//                                 <div className="w-8 h-8 relative rounded-full">
//                                     <img className="w-8 h-8  absolute rounded-[99px]" src="https://via.placeholder.com/32x32" />
//                                 </div>
//                                 <div className="flex-col justify-start items-start inline-flex">
//                                     <div className="text-black text-sm font-medium font-['DM Sans'] leading-normal">{data.heading}</div>
//                                 </div>
//                                 <ControlsChevronDownSmall className="text-trunks text-moon-24 transition duration-200 moon-open:text-bulma" />
//                             </Accordion.Button>
//                         </Accordion.Header>
//                         <Accordion.Content>
//                             <div style={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>

//                                 <div className="self-stretch pl-2 pr-4 py-2 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center gap-2 inline-flex">
//                                     <div className="w-6 h-6 relative" />
//                                     <div className="text-blue-600 text-sm font-medium font-['DM Sans'] leading-normal">New Chat with ProdWizard</div></div>

//                                 {data.chat.map((text, textIndex) => (

//                                     <div key={`text-${textIndex}`} style={{ padding: '10px 10px 10px 10px' }}>

//                                         <div className="text-black text-sm font-medium font-['DM Sans'] leading-normal">{text}</div>
//                                     </div>
//                                 ))}</div>
//                         </Accordion.Content>
//                     </div>
//                 </Accordion.Item>
//             ))}
//         </div>
//     </Accordion>
// );

// export default Chat;

import React, { useEffect } from 'react';
import { Accordion } from '@heathmont/moon-core-tw';
import { ControlsChevronDownSmall } from '@heathmont/moon-icons-tw';
import axios from 'axios';
import { set } from 'mongoose';



const handleNewChat= async(botname,setMessages,setMessageId,setChatData,chatData)=>{
  axios.post("http://localhost:5000/cia/createChat",{botname:botname,userId:"65645f987aa073e675de9071"}).then((res) => {
    console.log(res);
    setMessageId(res.data.id);
    setMessages(Array({role:"system",content: res.data.message}));
    let objIndex = chatData.findIndex((obj => obj.botname === botname));
    console.log(objIndex);
    let newChatData = chatData
    newChatData[objIndex].messagesArray.push({botname:botname,messages:Array({role:"system",message: res.data.message}),_id:res.data.id});
    setChatData(newChatData);
  }).catch((err) => {
    console.log(err);
  });
};

const Chatleft = ({ chatData,setMessages ,setMessageId,setChatData,messages,setBotname,setIndex}) => {
  const handleMessage= async(Messages,id,botname,index)=>{
    setMessageId(id);
    setMessages(Messages);
    setBotname(botname);
    setIndex(index);
  }
  useEffect(()=>{},[messages])
  return(
  <Accordion>
    <div className='bg-white rounded-xl shadow border border-neutral-200' style={{ width: "%", padding : '10px 10px 10px 10px'}}>
      <div className="w-[336px] pl-2 left-[12px] top-[16px] justify-between items-center inline-flex" style={{paddingBottom : '10px'}}>
        <div className="text-zinc-600 text-base font-normal font-['DM Sans'] leading-normal">Your Chats</div>
        <div className="justify-start items-center gap-2 flex">
          <div className="pl-1 pr-3 py-1 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center gap-1 flex">
            <div className="w-6 h-6 relative" />
            <div className="text-blue-600 text-sm font-medium font-['DM Sans'] leading-normal">New CI Agent</div>
          </div>
        </div>
      </div>
      {chatData.map((data, index) => {
        return (
          <Accordion.Item value={`item-${index}`}>
            <div className='bg-white rounded-lg border border-neutral-200 px-2 py-3 ' style={{ marginBottom: '10px' }}>
              <Accordion.Header className="moon-open:[&_svg]:rotate-180">
                <Accordion.Button >
                  <div className="w-8 h-8 relative rounded-full">
                    <img className="w-8 h-8  absolute rounded-[99px]" src="https://via.placeholder.com/32x32" />
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-black text-sm font-medium font-['DM Sans'] leading-normal">{data.botname}</div>
                  </div>
                  <ControlsChevronDownSmall className="text-trunks text-moon-24 transition duration-200 moon-open:text-bulma" />
                </Accordion.Button>
              </Accordion.Header>
              <Accordion.Content>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                  <button className="self-stretch pl-2 pr-4 py-2 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center gap-2 inline-flex" style={{margin : '10px 10px 10px 10px'}} onClick={()=>handleNewChat(data.botname,setMessages,setMessageId,setChatData,chatData)}>
                    <img src={require("../Assets/Plus.png")} alt="" className="w-6 h-6 relative" />
                    <div className="text-blue-600 text-sm font-medium font-['DM Sans'] leading-normal"  >New Chat with {data.botname}</div>
                  </button>
                      {data.messagesArray.map((chat, chatIndex) => (
                        <button className="w-[284px] h-10 px-3 py-2 bg-neutral-100 rounded-lg justify-between items-center inline-flex" key={`chat-${chatIndex}`} onClick={()=>handleMessage(chat.messages,chat._id,data.botname,chatIndex)}>
                        <div className="text-black text-sm font-normal font-['DM Sans'] leading-normal">{chat.messages.length>1? chat.messages[1].content.slice(0,20)+"...":"New Chat"}</div>
                        <div className="w-6 h-6 relative" />
                      </button>
                      ))}
                </div>
              </Accordion.Content>
            </div>
          </Accordion.Item>
        );
      })}
    </div>
  </Accordion>
)
};

export default Chatleft;

