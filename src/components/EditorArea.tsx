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
    setTextData(value);
    if (editorRef.current) {
      editorRef.current.setValue(value);
    }
  }, [value]);

  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;

    editor.setValue(textData);
  }

  function handleEditorChange(value: string | undefined, event: any) {
    setTextData(value || "");
    onChange(value || "");
  }

  return (
    <Editor
      height="90vh"
      theme="vs-dark"
      defaultLanguage={language}
      defaultValue={value}
      value={textData}
      // onMount={handleEditorDidMount}
      onChange={handleEditorChange}
    />
  );
};

export default EditorArea;
