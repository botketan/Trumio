import { GenericPlus } from '@heathmont/moon-icons-tw';
import Note from './note';
import axios from 'axios';
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const NoteList=({posts,setPost,setPosts,setHeading, searchParams, setSearchParams})=>{

    const createTrunote=()=>{
        axios.post("http://localhost:5000/post/create",{userId:"65645f987aa073e675de9071"}).then((res) => {
            window.location.reload(true)})
            .catch((err) => {
            console.log(err);});
    }
    return <>
        <div className="container mx-auto shadow-xl rounded-lg p-4 border-2 overflow-y-scroll" style={{width:"360px",height:"616px"}}>
            <div className='flex justify-between items-center'>
                <span className='py-6 ml-2 font-light'>Your Trunotes</span>
                <div>
                    <button className='flex items-center bg-blue-600 bg-opacity-10 rounded-lg p-1' onClick={createTrunote}>
                        <GenericPlus className='h-6 w-6 mr-1 text-blue-600'/>
                        <span className="text-blue-600 text-sm font-medium font-['DM Sans'] leading-normal pb-1 pr-1">New Trunote</span>
                    </button>
                </div>
            </div>
                {posts.map((post)=>{
                    return <button  onClick ={async()=>{setPost(); 
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
                    }}><Note props={post}/></button>
                })}
        </div>
    </>
}

export default NoteList;