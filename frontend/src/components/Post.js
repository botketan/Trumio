import {
  BlockNoteView,
  getDefaultReactSlashMenuItems,
  ReactSlashMenuItem,
  useBlockNote,
} from "@blocknote/react";
import "@blocknote/core/style.css";
import { HiOutlineGlobeAlt } from "react-icons/hi";

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

export default function Post() {
  // Creates a new editor instance.
  const editor = useBlockNote({
    slashMenuItems: customSlashMenuItemList,
    onEditorContentChange: (editor) => {
      console.log(JSON.stringify(editor.topLevelBlocks));
    }
  });
  console.log(editor);
  // Renders the editor instance.
  return <BlockNoteView editor={editor} />;
}