"use client";

import { SnippetEditFormProps } from "@/utils/interfaces";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";

const SnippetEditForm = ({snippet}:SnippetEditFormProps) => {
    const [code, setCode] = useState(snippet.code);

    const handleEditorChange = (value:string = "", event:any) => {
        setCode(value);
    }
  return (
    <div>
        <Editor
            height="40vh"
            theme="vs-dark"
            defaultLanguage={snippet.language || "javascript"}
            defaultValue={snippet.code}
            options={{minimap:{enabled:false}}}
            onChange={handleEditorChange}/>
    </div>
  )
}

export default SnippetEditForm