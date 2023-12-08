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
      type: "paragraph",
      content: [{ type: "text", text: "Embedded post here", styles: { bold: true } }],
    };
  
    // Inserting the new block before the current one.
    editor.insertBlocks([embedBlock], currentBlock, "before");
  };
  
  // Custom Slash Menu item which executes the above function.
  const insertEmbedPostItem = {
    name: "Embed Post",
    execute: insertEmbed,
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
        // console.log(block);
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
  
  
  export default function PostReadOnly({post,setPost,ai,setAi,heading, complete}) {
    const [timer,setTimer] = useState(1);
    let content = post && post.content ? JSON.parse(post.content):"";
    if(content){
      if(!complete){
        content=content.slice(0,2);
        content[0].content[0].text+="..."
        // console.log(content);
      }
    }
    // Creates a new editor instance.
    let editor = useBlockNote({
      editable:post && post.isPublished?false:true,
      initialContent: content,
      slashMenuItems: customSlashMenuItemList,
      onEditorContentChange: (editor) => {
        if(timer<1000)
        setTimer(10000);
      }
    });
    useEffect(() => {
      
    }, [timer]);
  
    useEffect(() => {
      if(ai)
      {
        axios.post("http://localhost:5000/cia/postHelper",{botname:ai,content:traverse(editor.topLevelBlocks)}).then((res)=>{
          // console.log(res); 
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
    // console.log(editor);
    // Renders the editor instance.
    return <BlockNoteView editor={editor}  theme={lightDefaultTheme} className="h-[100%] w-[inherit] max-w-[inherit]" />;
  }