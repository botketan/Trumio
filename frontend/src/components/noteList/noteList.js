import { GenericPlus } from '@heathmont/moon-icons-tw';
import Note from './note';
import axios from 'axios';
import { Link, redirect, useNavigate } from 'react-router-dom';
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const NoteList=({posts,setPost,setPosts,setHeading, searchParams, setSearchParams, place})=>{
    const navigate=useNavigate();
    const createTrunote=()=>{
        axios.post("http://localhost:5000/post/create",{userId:"65645f987aa073e675de9071"}).then((res) => {
            window.location.reload(true)})
            .catch((err) => {
            console.log(err);});
    }
    if(place!=="Notes"){
        posts=posts.filter((post)=>post.isPublished===false).slice(0,3);
    }
    return <>
        <div className={`container mx-auto shadow-xl rounded-xl p-4 border-2 overflow-y-scroll ${place==="Notes"?"h-full":""}`} style={{width:"100%"}}>
            <div className='flex justify-between items-center pt-2 pb-3'>
                <span className='ml-2 font-light'>Your {place==="Notes"?"Trunotes":"Drafts"}</span>
                <div>
                    {place==="Notes"?<button className='flex items-center bg-blue-600 bg-opacity-10 rounded-lg p-1' onClick={createTrunote}>
                        <GenericPlus className='h-6 w-6 mr-1 text-blue-600'/>
                        <span className="text-blue-600 text-sm font-medium font-dmsans leading-normal pr-1 flex items-center">New Trunote</span>
                    </button>:<Link to="../Notes"><button className='flex items-center bg-blue-600 bg-opacity-10 rounded-lg p-1 px-2 justify-center'>
                        {/* <GenericPlus className='h-6 w-6 mr-1 text-blue-600'/> */}
                        <span className="text-blue-600 text-sm font-medium font-dmsans leading-normal flex items-center">View All Trunotes</span>
                    </button></Link>}
                </div>
            </div>
                {posts.map((post)=>{
                    return <button className='w-full' onClick ={async()=>{
                        if(place==="Notes"){
                        setPost();
                        await sleep(50);
                        setHeading(post.title); 
                        setPost(post); 
                        setSearchParams({id:post._id});
                        axios.post("http://localhost:5000/post/getByUserId",{
                            userId:"65645f987aa073e675de9071"
                        }).then((res) => {
                        setPosts(res.data.reverse());

                        }).catch((err) => {
                            console.log(err);
                        });
                        }
                        else{
                            navigate("../Notes?id="+post._id);
                        }
                    }}><Note props={post}/></button>
                })}
        </div>
    </>
}

export default NoteList;