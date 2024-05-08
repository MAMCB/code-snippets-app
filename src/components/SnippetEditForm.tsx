"use client";

import { SnippetEditFormProps } from "@/utils/interfaces";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";

const SnippetEditForm = ({snippet,editSnippet}:SnippetEditFormProps) => {
    const [editedSnippet, setEditedSnippet] = useState(snippet);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditorChange = (value:string = "", event:any) => {
        setEditedSnippet({...editedSnippet, code: value});
    }
  return (
    <div>
      <div className="flex gap-4 my-8 items-center">
        {isEditing ? (
          <input
            className="border rounded p-2 w-1/2"
            type="text"
            value={editedSnippet.title}
            onChange={(e) =>
              setEditedSnippet({ ...editedSnippet, title: e.target.value })
            }
          />
        ) : (
          <h1 className="text-xl font-bold">{editedSnippet.title}</h1>
        )}

        <button
          className="border p-2 rounded"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Close" : "Change"}
        </button>
      </div>

      <Editor
       
        height="40vh"
        theme="vs-dark"
        defaultLanguage={snippet.language || "javascript"}
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />

      <button
        className="border p-2 rounded mt-4"
        onClick={() => editSnippet(editedSnippet)}
      >
        Submit
      </button>
    </div>
  );
}

export default SnippetEditForm