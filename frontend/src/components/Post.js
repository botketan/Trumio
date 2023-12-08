import {
  BlockNoteView,
  getDefaultReactSlashMenuItems,
  ReactSlashMenuItem,
  lightDefaultTheme,
  useBlockNote,
  PartialBlock,
} from "@blocknote/react";
import "@blocknote/core/style.css";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { json } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";


// Command to insert an Embed of a post in a new block below.
const insertEmbed = (editor) => {
  // Block that the text cursor is currently in.
  const currentBlock = editor.getTextCursorPosition().block;

  // New block we want to insert.
  const embedBlock = {
    type: "link",
    content: [{ type: "text", text: "Embedded post here", styles: { bold: true } }],
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  };

  // Inserting the new block before the current one.
  editor.insertBlocks([embedBlock], currentBlock, "before");
};

// Custom Slash Menu item which executes the above function.
const insertEmbedPostItem = {
  name: "Embed Post",
  execute: (editor)=>{
    const link=prompt("Enter the link of the post you want to embed");
    editor.createLink(link, "Example Link")
  },
  aliases: ["embed", "ed"],
  group: "Other",
  icon: <HiOutlineGlobeAlt size={18} />,
  hint: "Used to embed a post below.",
};

// List containing all default Slash Menu Items, as well as our custom one.
const customSlashMenuItemList = [
  ...getDefaultReactSlashMenuItems(),
  insertEmbedPostItem,
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


export default function Post({post,setPost,ai,setAi,heading}) {
  const [timer,setTimer] = useState(1);
  // Creates a new editor instance.
  let editor = useBlockNote({
    editable:post && post.isPublished?false:true,
    initialContent: post && post.content ? JSON.parse(post.content) : "",
    slashMenuItems: customSlashMenuItemList,
    onEditorContentChange: (editor) => {
      if(timer<1000)
      setTimer(10000);
    }
  });
  useEffect(() => {
    let c=0;
    const interval = setInterval(() => {
      if(timer>1)
      {
        setTimer(timer/10);
      }
      axios.put("http://localhost:5000/post/update",{id:post._id,content:JSON.stringify(editor.topLevelBlocks),title:heading?heading:"Untitled"}).then((res) => {console.log(res);setPost({_id:post._id, content:JSON.stringify(editor.topLevelBlocks)}) }).catch((err) => {console.log(err);});
      
    }, (2000000/timer));
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    if(ai)
    {
      axios.post("http://localhost:5000/cia/postHelper",{botname:ai,content:traverse(editor.topLevelBlocks)}).then((res)=>{
        console.log(res); 
        setAi();
        editor.insertBlocks(
          [{ content: String(res.data) }],
          editor.getTextCursorPosition().block,
          "after"
        )
      })
      .catch((err)=>console.log(err));
    }
  }, [ai]);

  useEffect(() => {
    if(timer<1000)
    setTimer(100000);
  }, [heading]);

  // if(post && post.content)
  // {
  //   editor.initialContent= JSON.parse(post.content);
  //   console.log("here")
  //   console.log(editor.initialContent);
  // }
  console.log(editor);
  // Renders the editor instance.
  return <BlockNoteView editor={editor}  theme={lightDefaultTheme} className={`h-[100%] w-[inherit] max-w-[52vw] `} />;
}