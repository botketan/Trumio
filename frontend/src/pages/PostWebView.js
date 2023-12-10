import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import PostReadOnly from '../components/PostReadonly.js';
import axios from 'axios';
import CommentsList from '../components/Comments/Comments.js';
import CommentInput from '../components/Comments/CommentInput.js';



function traverse(blocks){
    let s ="";
    if (Array.isArray(blocks) && blocks.length) {
      blocks.map((block)=>{
        console.log(block);
        if(block.content)
        {
          block.content.forEach((content) => {
            s+=content.text +" ";
          });
        }
        s+= traverse(block.children);
      });
      return s;
    }
    return "";
  
  }

export default function PostWebView({userId}) {
    const {id} = useParams();
    const [post, setPost] = useState();
    const [owner,setOwner] = useState();
    const [reply,setReply] = useState();
    const [user ,setUser] = useState();
    useEffect(() => {
        axios.post("http://localhost:5000/post/getById",{
            postId:id ,userId:userId
        }).then((res) => {
            res.data.isPublished=true;
            setPost(res.data);
            axios.post("http://localhost:5000/user/getUser",{userId:res.data.userId}).then((res) => {
                setOwner(res.data);
            }).catch((err) => {console.log(err);});
        }).catch((err) => {
            console.log(err);
        });
        axios.post("http://localhost:5000/user/getUser",{userId:userId}).then((res) => {
            console.log(res.data);
            setUser(res.data);
        }).catch((err) => {console.log(err);});
    },[]);

    return (
        <>
        {post &&<div className="ml-[-3.5vw] bg-transparent"> <PostReadOnly post={post}  setPost={setPost}  /></div>}
        </>
    )
}
