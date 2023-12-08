// import React from 'react';
// import { Accordion } from '@heathmont/moon-core-tw';
// import { ControlsChevronDownSmall } from '@heathmont/moon-icons-tw';

// const Chat = ({ chatData }) => (

//     <Accordion>

//         <div className='bg-white rounded-xl shadow border border-neutral-200' style={{ width: "25%", padding : '10px 10px 10px 10px'}}>
//             <div className="w-[336px] pl-2 left-[12px] top-[16px] justify-between items-center inline-flex" style={{paddingBottom : '10px'}}>
//                 <div className="text-zinc-600 text-base font-normal font-dmsans leading-normal">Your Chats</div>
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

import React, { useEffect, useState } from 'react';
import { Accordion, Button, IconButton, Modal } from '@heathmont/moon-core-tw';
import { ControlsChevronDownSmall, ControlsCloseSmall } from '@heathmont/moon-icons-tw';
import axios from 'axios';



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
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [selectedChatId, setSelectedChatId] = useState(0);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const handleMessage= async(Messages,id,botname,index)=>{
    setMessageId(id);
    setSelectedChatId(id);
    setMessages(Messages);
    setBotname(botname);
    setIndex(index);
  }
  useEffect(()=>{},[messages])

  const handleNewCia= async()=>{
    closeModal();
    axios.post("http://localhost:5000/cia/createChat",{botname:name,userId:"65645f987aa073e675de9071"}).then((res) => {
      console.log(res);
      window.location.reload();
    }).catch((err) => {
      console.log(err);
    });
  };

  return(
    <>
  <Accordion className='w-[22.5vw]'>
    <div className='bg-white rounded-xl shadow border border-neutral-200' style={{ padding : '10px 10px 10px 10px'}}>
      <div className="w-[22.5vw] pl-2 left-[12px] top-[16px] items-center inline-flex" style={{paddingBottom : '10px'}}>
        <div className="text-zinc-600 text-base font-normal font-dmsans leading-normal">Your Chats</div>
        <div className="justify-start items-center gap-2 mr-6 flex ml-auto">
          <button className="pl-1 pr-3 py-1 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center gap-1 flex" onClick={openModal}>
            <img src={require("../Assets/Plus.png")} alt="" className="w-6 h-6 relative" />
            <div className="text-blue-600 text-sm font-medium font-dmsans leading-normal">New CI Agent</div>
          </button>
        </div>
      </div>
      {chatData.map((data, index) => {
        return (
          <Accordion.Item key={index} value={`item-${index}`}>
            <div className='bg-white rounded-lg border border-neutral-200 px-2 py-3 ' style={{ marginBottom: '10px' }}>
              <Accordion.Header className="moon-open:[&_svg]:rotate-180">
                <Accordion.Button className=' justify-normal' >
                  <ControlsChevronDownSmall className="text-trunks text-moon-24 transition duration-200 moon-open:text-bulma" />
                  <div className="w-8 h-8 relative rounded-full">
                    <img alt='' className="w-8 h-8 absolute rounded-[99px]" src="https://icons.iconarchive.com/icons/pictogrammers/material/256/robot-happy-icon.png" />
                  </div>
                  <div className="flex-col ml-2 mr-auto inline-flex">
                    <div className="text-black text-sm font-medium font-dmsans leading-normal">{data.botname}</div>
                  </div>
                </Accordion.Button>
              </Accordion.Header>
              <Accordion.Content className='border-0'>
                <div className='' style={{ display: "flex", flexDirection: "column"}}>
                  <button className="w-[19vw] px-3 py-2 bg-blue-600 justify-center bg-opacity-10 rounded-lg gap-2 inline-flex my-2 mr-2" onClick={()=>handleNewChat(data.botname,setMessages,setMessageId,setChatData,chatData)}>
                    <img src={require("../Assets/Plus.png")} alt="" className="w-6 h-6 relative" />
                    <div className="text-blue-600 text-sm font-medium font-dmsans leading-normal"  >New Chat with {data.botname}</div>
                  </button>
                      {data.messagesArray.map((chat, chatIndex) => (
                        <button className={"w-[97%] h-10 px-3 py-2 rounded-lg justify-between items-center inline-flex my-1 " + ((chat._id===selectedChatId)?"bg-neutral-300 hover:bg-neutral-400":" hover:bg-neutral-200")} key={`chat-${chatIndex}`} onClick={()=>handleMessage(chat.messages,chat._id,data.botname,chatIndex)}>
                        <div className="text-black text-center w-[100%] font-normal font-dmsans leading-normal">{chat.messages.length>1&&chat.messages[1].content? chat.messages[1].content.slice(0,20)+"...":"New Chat"}</div>
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
  <Modal open={isOpen} onClose={closeModal}>
  <Modal.Backdrop />
        <Modal.Panel className="w-[300px] bg-white border border-solid border-gray-500 px-4 py-2">
          <div className="border-b py-3 relative">
            <h3 className="text-moon-18 text-bulma font-dm-sans">Create new Cia</h3>
            <IconButton
              variant="ghost"
              size="sm"
              className="absolute top-1 end-1"
              onClick={closeModal}
            >
              <ControlsCloseSmall className="text-moon-24" />
            </IconButton>
          </div>
          <input className="w-[100%] h-10 px-4 py-2 bg-neutral-100 rounded-lg justify-between items-center inline-flex my-4" placeholder="Enter Botname" value={name} onChange={(e)=>{setName(e.target.value);}}/>
          <div className="flex gap-2 p-3 justify-end pr-0">
            <Button className='border rounded-xl bg-blue-600 bg-opacity-10 text-blue-600' variant="outline" onClick={closeModal}>
              Cancel
            </Button>
            <Button className='border rounded-xl bg-blue-600 bg-opacity-10 text-blue-600' onClick={()=>handleNewCia()}>Create</Button>
          </div>
        </Modal.Panel>
</Modal>
</>
)
};

export default Chatleft;

