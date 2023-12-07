import React, { useState,useEffect } from "react";
import NoteList from "../components/noteList/noteList.js";
import Post from "../components/Post.js";
import Navbar from "../components/Navbar.js";
import { ControlsCloseSmall, OtherRocket } from "@heathmont/moon-icons-tw";
import AISuggestions from "../components/AISuggestions.js";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { Button, Dropdown, IconButton, MenuItem, Modal } from "@heathmont/moon-core-tw";

export default function Notes() {
  const [heading, setHeading] = useState("Untitled");
  const [post, setPost] = useState();
  const [ai,setAi]= useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const [communities,setCommunities] = useState();
  const [community,setCommunity] = useState();

  console.log(searchParams.get("id"));
  useEffect(() => {
    axios.post("http://localhost:5000/post/getByUserId",{
        userId:"65645f987aa073e675de9071"
    }).then((res) => {
      setPosts(res.data.reverse());
      console.log(searchParams.get("new"));
      if(searchParams.get("new")){
        setSearchParams({});
        axios.post("http://localhost:5000/post/create",{userId:"65645f987aa073e675de9071"}).then((res) => {
        window.location.reload(true)})
        .catch((err) => {
        console.log(err);});
      }
      if(!post)
      {
        console.log(res.data)
        let check=0;
        for(let note in res.data){
          if(res.data[note]._id==searchParams.get("id")){
            setPost(res.data[note]);
            setHeading(res.data[note].title);
            check=1;
            console.log("here is some data");
            console.log(res.data[note]);
          }
        }
        if(check==0){
          setPost(res.data[0]);
          setHeading(res.data[0].title);
          setSearchParams({id:res.data[0]._id});
        }
      }
    }).catch((err) => {
        console.log(err);
    });
    axios.post("http://localhost:5000/community/getByUserId",{userId:"65645f987aa073e675de9071"}).then((res) => {
      console.log(res);
      setCommunities(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, []);
  // useEffect(() => {
  // }, [heading]);
  const [posts,setPosts] = useState([
    {
        title:"ProdWizard",
        isPublished:true,
    },
    {
        title:"helloWorld",
        isPublished:true,
    },
  ]);

  const handlePublish= async()=>{
    closeModal();
    axios.post("http://localhost:5000/community/publish",{postId:post._id,communityId:community._id}).then((res) => {
      console.log(res);
      window.location.reload();
    }).catch((err) => {
      console.log(err);
    }); 
  }

  return (
    <>
      <div className="flex flex-row px-16 py-4 container w-[100%] h-[100%] gap-5">
        <div className=" w-[40vw] h-[85vh] ">
            <NoteList posts={posts} setPost={setPost} setPosts={setPosts} setHeading={setHeading} searchParams={searchParams} setSearchParams={setSearchParams} place={"Notes"}/>
        </div>
        <div className="container mx-auto my-auto h-[100%] shadow-xl border border-neutral-200 rounded-lg">
            <div className="h-[50px] w-[100%] p-4 border-neutral-200 flex gap-4 items-center" >
              <div className={"flex justify-center gap-4 items-center" + ((post && !post.isPublished)?" w-[90%]":" w-[100%]")}>
                <span className={`h-8 px-2 py-1 rounded-md font-medium ` + ((post)?((post.isPublished)?" text-purple-500 bg-purple-100":" text-yellow-500 bg-yellow-100"):"")}>{(post)?((post.isPublished)?"PUBLISHED":"DRAFT"):""}</span>
                <input type="text" onChange={(e)=>{
                  setHeading(e.target.value)
                  }} value={heading} className="font-medium focus:outline-none w-[fit-content]"></input>
              </div>
              {post && !post.isPublished && <button className="w-[92px] h-8 pl-1 pr-3 py-1 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center gap-1 inline-flex" onClick={()=>{
                openModal();
                }}>
                <OtherRocket className="w-6 h-6 relative text-blue-600" />
                <div className="text-blue-600 text-sm font-medium font-dmsans leading-normal">Publish</div>
              </button>}
            </div>
            <div className="w-[100%] h-[65vh] overflow-y-scroll p-2 border-b-2 border-t-2 border-neutral-200 overflow-x-hidden">
                {post && <Post post={post}  setPost={setPost} ai={ai} setAi={setAi} heading={heading}/>}
            </div>
            <div className="px-3">
              <AISuggestions setAi={setAi}/>
            </div>
        </div>
      </div>
      <Modal open={isOpen} onClose={closeModal}>
      <Modal.Backdrop />
        <Modal.Panel className="border border-solid border-gray-500 px-4 py-2 bg-white">
          <div className="border-b-[0.063rem] border-neutral-200 pt-5 pb-4 px-6 relative">
            <h3 className="text-moon-18 text-black font-medium">Publish Post</h3>
            <IconButton
              variant="ghost"
              size="sm"
              className="absolute top-4 end-5"
              onClick={closeModal}
            >
              <ControlsCloseSmall className="text-moon-24" />
            </IconButton>
          </div>
          <div className="flex gap-2 p-4 justify-end pt-2">
          <Dropdown value={community} onChange={setCommunity} size="xl">
              {({ open }) => (
                <>
                  <Dropdown.Select
                    open={open}
                    label="Community"
                    placeholder="Choose community..."
                    data-test="data-test"
                  >
                    {community?.title}
                  </Dropdown.Select>

                  <Dropdown.Options className="bg-white">
                    {communities.map((community, index) => (
                      <Dropdown.Option value={community} key={index}>
                        {({ selected, active }) => (
                          <MenuItem isActive={active} isSelected={selected}>
                            {community.title}
                          </MenuItem>
                        )}
                      </Dropdown.Option>
                    ))}
                  </Dropdown.Options>
                </>
              )}
            </Dropdown>
            </div>
          <div className="flex gap-2 p-4 justify-end pt-2">
            <Button variant="outline" onClick={closeModal}>
              Cancel
            </Button>
            <Button onClick={()=>handlePublish()}>Create</Button>
          </div>
        </Modal.Panel>
    </Modal>
    </>
  );
}