import { useEffect, useState } from "react";
import Chats from "../components/CIA/chats.js";
import Chatleft from "../components/chatleft.js";
import axios from "axios";

export default function Cia(){
    const [messages,setMessages] =useState([]);
    const [chatData,setChatData]=useState();
    const [messageId,setMessageId]=useState();
    const [botname,setBotname]=useState();
    const [index,setIndex]=useState(0);
    useEffect(()=>{
        axios.post("http://localhost:5000/user/getUser",{
            userId:"65645f987aa073e675de9071"
        }).then((res) => {
            let result = Object.groupBy(res.data.chatIds,({botname})=>botname)
            let Chats = [];
            for(let key in result){
                Chats.push({botname:key,messagesArray:result[key]});
            }
            console.log(Chats);
            setChatData(Chats);
        }).catch((err) => {
            console.log(err);
        });
    },[]);

    return (
        <div className="flex flex-row px-16 py-4 container w-[100%] h-[100%] gap-5">
            <div className="w-[30vw] h-[80vh] overflow-y-scroll">
                {chatData && <Chatleft chatData={chatData} setMessages={setMessages} setMessageId={setMessageId} setChatData={setChatData} messages={messages} setBotname={setBotname} setIndex={setIndex}/>}
            </div>
            <div className="w-[65vw] h-[80vh] overflow-y-scroll">
                {messages && <Chats messages={messages} setMessages={setMessages} messageId={messageId} chatData={chatData} setChatData={setChatData} botname={botname} index={index}/>}
            </div>
        </div>
    );
};