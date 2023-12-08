import React, { useEffect, useState } from 'react';
import CommentInput from './CommentInput';
// const comments = [
//   {
//     id: 1,
//     username: "Waleed Irfan",
//     position: "Sr. UX Architect | Product Designer | Chief Creative Officer",
//     content: "You shouldn't add any such images without adding caution. Automatic movement can trigger vertigo, headaches, and nausea in people with vestibular disorders and seizures in people with conditions like photosensitive epilepsy. It's the biggest accessibility issue.",
//     likes: 2,
//     reply: [
//       {
//         icon: "/Avatar.png",
//         username: "Vidya Sagar",
//         position: "Sr. UX Architect | Product Designer | Chief Creative Officer",
//         content: "You shouldn't add any such images without adding caution. Automatic movement ca",
//         likes: 2,
//       }
//    ],
//     icon: "/Avatar.png"
//   },
//   {
//     id: 2,
//     username: "Waleed Irfan",
//     position: "Sr. UX Architect | Product Designer | Chief Creative Officer",
//     content: "You shouldn't add any such images without adding caution. Automatic movement can trigger vertigo, headaches, and nausea in people with vestibular disorders and seizures in people with conditions like photosensitive epilepsy. It's the biggest accessibility issue.",
//     likes: 2,
//     reply: [
//       {
//         icon: "/Avatar.png",
//         username: "Vidya Sagar",
//         position: "Sr. UX Architect | Product Designer | Chief Creative Officer",
//         content: "You shouldn't add any such images without adding caution. Automatic movement ca",
//         likes: 2,
//       }
//    ],
//     icon: "/Avatar.png"
//   }
// ];

// const user = {
//   icon: "/Avatar.png"
// }
const Comment = ({ comment, user, post ,setPost}) => {
  const [commentClick,setCommentClick]=useState(0);
  useEffect(() => {
},[user]);
  return (
    <>
    <div className='flex '>
        <div className="flex-shrink-0 mr-3 mt-3">
            <img className="w-10 h-10 rounded-full" src={comment.icon} alt="Profile pic" />
        </div>
        <div className='w-[100%]'>
        <div className="bg-white border border-neutral-200 rounded-lg p-4 w-[100%]">
            <div className="flex items-center text-sm text-gray-600 justify-between">
            <div>
            <p className="font-bold text-black text-sm">{comment.username}</p>
            <p className='text-moon-10'>{comment.position}</p>
            </div>
            </div>
            <div className="mt-3 text-gray-800 text-sm">
                <p>{comment.content}</p>
            </div>
        </div>

            <div className="flex items-center justify-between mt-2 mb-2">
                <div className="flex items-center text-sm text-gray-500">
                    <button className="flex items-center rounded-sm justify-center mr-2 w-[6vw] text-blue-500 bg-blue-100 text-moon-10 py-[3px]">
                        <svg width="14" height="14" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Icon">
                        <path id="like" d="M6.66853 12.75H4.42747C4.0513 12.75 3.74713 12.443 3.75002 12.0663L3.78099 7.99486C3.78385 7.62211 4.08633 7.32143 4.45849 7.32143H6.66853M6.66853 12.75H11.3313C11.6488 12.75 11.9238 12.5292 11.9926 12.2187L13.2336 7.36431C13.3276 6.94053 13.0057 6.53846 12.5722 6.53846H10.6815C10.2546 6.53846 9.91931 6.25221 10.002 5.83275L10.3517 4.06011C10.4345 3.64064 10.1139 3.25 9.68708 3.25H9.55389C9.31293 3.25 9.09013 3.37823 8.96869 3.58664L6.66853 7.32143M6.66853 12.75V7.32143" stroke="#0578FB"/>
                        </g>
                        </svg>
                        {comment.likes}
                    </button>
                    <button className="flex items-center rounded-sm justify-center w-[6vw] text-blue-500 bg-blue-100 text-moon-10 py-[3px]" onClick={()=>{commentClick===0?setCommentClick(1):setCommentClick(0)}}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Icon">
                        <path id="Comment" d="M5.25 17.1632L5.25 8.87501C5.25 6.66586 7.04087 4.875 9.25001 4.87501L14.75 4.87502C16.9591 4.87502 18.75 6.66588 18.75 8.87502L18.75 12.4861C18.75 14.6952 16.9591 16.4861 14.75 16.4861L8.88461 16.4861L6.83752 17.9724C6.17646 18.4523 5.25 17.9801 5.25 17.1632Z" stroke="#0578FB" stroke-width="1.5"/>
                        </g>
                        </svg>

                        {comment.reply?.length}
                    </button>
                </div>
            </div>
            <div>

            {commentClick===1 && user &&user.icon && <CommentInput  user={user} comment={comment} post={post} setPost={setPost}/>}
            {comment.reply&& user && <CommentsList comments={comment.reply} post={post} user={user} setPost={setPost}/>}
            </div>
        </div>
    </div>
    </>
  );
};

const CommentsList = ({comments,user,post,setPost}) => {
  useEffect(() => {
    console.log(comments[1]?.reply);
},[post,comments]);
  return (
    <div className="p-1">
      {user && comments&&comments.map((comment, index) => (
         <Comment key={index} comment={comment} user={user} post={post} setPost={setPost} />
      ))}
    </div>
  );
};

export default CommentsList;
