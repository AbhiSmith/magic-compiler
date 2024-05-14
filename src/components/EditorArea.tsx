"use client";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

const EditorArea = () => {
  return (
    <Editor
      height="90vh"
      theme="vs-dark"
      defaultLanguage="javascript"
      defaultValue="// some comment"
    />
  );
};

export default EditorArea;
