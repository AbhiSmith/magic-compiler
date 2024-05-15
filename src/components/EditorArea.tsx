"use client";
import React, { useState, useRef, useEffect } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

interface MonacoEditorProps {
  language: string;
  value: string;
  onChange: (value: string) => void;
}

const EditorArea: React.FC<MonacoEditorProps> = ({
  language,
  value,
  onChange,
}) => {
  const [textData, setTextData] = useState(value);
  const editorRef = useRef<any>(null);

  useEffect(() => {
    // Update editor content if value prop changes
    setTextData(value);
    if (editorRef.current) {
      editorRef.current.setValue(value);
    }
  }, [value]);

  // This function is called when the editor is mounted
  function handleEditorDidMount(editor: any, monaco: any) {
    // Store the editor instance in a ref for further usage
    editorRef.current = editor;

    // You can set initial editor content here if needed
    editor.setValue(textData);
  }

  // This function is called when the editor content changes
  function handleEditorChange(value: string | undefined, event: any) {
    // Update the state with the new editor content
    setTextData(value || "");
    // Call the onChange callback provided by the parent component
    onChange(value || "");
  }

  return (
    <Editor
      height="90vh"
      theme="vs-dark"
      defaultLanguage={language}
      defaultValue={value}
      value={textData}
      onMount={handleEditorDidMount}
      onChange={handleEditorChange}
    />
  );
};

export default EditorArea;
