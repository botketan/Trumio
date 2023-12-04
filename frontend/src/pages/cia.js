import { useEffect, useState } from "react";
import Chats from "../components/CIA/chats.js";
import Chatleft from "../components/chatleft.js";
import axios from "axios";
import { set } from "mongoose";

export default function Cia(){
    const [messages,setMessages] =useState([]);
    const [chatData,setChatData]=useState();
    const [messageId,setMessageId]=useState();

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
                {chatData && <Chatleft chatData={chatData} setMessages={setMessages} setMessageId={setMessageId}/>}
            </div>
            <div className="w-[65vw] h-[80vh] overflow-y-scroll">
                <Chats messages={messages} setMessages={setMessages} messageId={messageId}/>
            </div>
        </div>
    );
};