"use client";
import { SnippetLanguage } from "@/utils/interfaces";
import { handleSubmit } from "@/utils/actions";
import { useFormState } from "react-dom";

const SnippetForm = () => {
 const [formState, action] = useFormState(handleSubmit,{message:""});
 
  return (
    <form action={action}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-16" htmlFor="title">
            Title
          </label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            id="title"
            name="title"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-16" htmlFor="language">
            Language
          </label>
          <select
            className="border rounded p-2 w-full"
            id="language"
            name="language"
          >
            <option value="">Select a language</option>
            {Object.values(SnippetLanguage).map((language) => (
              <option key={language} value={language}>
                {language.toLocaleUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-4">
          <label className="w-16" htmlFor="code">
            Code
          </label>
          <textarea
            className="border rounded p-2 w-full"
            id="code"
            name="code"
          />
        </div>
        <div>{formState.message}</div>

        <button className="rounded p-2 bg-blue-200" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}

export default SnippetForm