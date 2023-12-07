import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import PostReadOnly from '../components/PostReadonly.js';
import axios from 'axios';
import CommentsList from '../components/Comments/Comments.js';
import CommentInput from '../components/Comments/CommentInput.js';

const comments = [
  {
    id: 1,
    username: "Waleed Irfan",
    position: "Sr. UX Architect | Product Designer | Chief Creative Officer",
    content: "You shouldn't add any such images without adding caution. Automatic movement can trigger vertigo, headaches, and nausea in people with vestibular disorders and seizures in people with conditions like photosensitive epilepsy. It's the biggest accessibility issue.",
    likes: 2,
    reply: [
      {
        icon: "/Avatar.png",
        username: "Vidya Sagar",
        position: "Sr. UX Architect | Product Designer | Chief Creative Officer",
        content: "You shouldn't add any such images without adding caution. Automatic movement ca",
        likes: 2,
      }
   ],
    icon: "/Avatar.png"
  },
  {
    id: 2,
    username: "Waleed Irfan",
    position: "Sr. UX Architect | Product Designer | Chief Creative Officer",
    content: "You shouldn't add any such images without adding caution. Automatic movement can trigger vertigo, headaches, and nausea in people with vestibular disorders and seizures in people with conditions like photosensitive epilepsy. It's the biggest accessibility issue.",
    likes: 2,
    reply: [
      {
        icon: "/Avatar.png",
        username: "Vidya Sagar",
        position: "Sr. UX Architect | Product Designer | Chief Creative Officer",
        content: "You shouldn't add any such images without adding caution. Automatic movement ca",
        likes: 2,
      }
   ],
    icon: "/Avatar.png"
  }
];


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

export default function PostWebView() {
    const {id} = useParams();
    const [post, setPost] = useState();
    const [owner,setOwner] = useState();
    const [reply,setReply] = useState();
    const [user ,setUser] = useState();
    useEffect(() => {
        axios.post("http://localhost:5000/post/getById",{
            postId:id ,userId:"65645f987aa073e675de9071"
        }).then((res) => {
            res.data.isPublished=true;
            setPost(res.data);
            axios.post("http://localhost:5000/user/getUser",{userId:res.data.userId}).then((res) => {
                setOwner(res.data);
            }).catch((err) => {console.log(err);});
        }).catch((err) => {
            console.log(err);
        });
        axios.post("http://localhost:5000/user/getUser",{userId:"65645f987aa073e675de9071"}).then((res) => {
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
