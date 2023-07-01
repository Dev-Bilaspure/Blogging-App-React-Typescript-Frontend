import React, { useState } from "react";
import ReactQuill from "react-quill";
import { TextareaAutosize } from "@mui/material";
import "react-quill/dist/quill.snow.css";
import "./TextEditorStyles.css";
import { twMerge } from "tailwind-merge";
import { convert } from "html-to-text";

const TextEditor = ({ setIsSaving, blogContent, setBlogContent, ...props }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: "" }, { align: "center" }, { align: "right" }],
      ["link"],
      [{ color: [] }, { background: [] }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "align",
    "link",
    "color",
    "background",
  ];
  

  const handleChange = (html) => {
    setBlogContent(html);
  };

  return (
    <div className={twMerge("text-editor-container", props.className)}>
      <ReactQuill
        value={blogContent}
        onChange={handleChange}
        theme="snow"
        modules={modules}
        formats={formats}
        placeholder="Tell your story..."
        className="ql-style"
      />
    </div>
  );
};

export default TextEditor;
