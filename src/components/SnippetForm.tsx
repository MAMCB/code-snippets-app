import { db } from "@/db";
import { redirect } from "next/navigation";

const SnippetForm = () => {
  async function handleSubmit(formData: FormData) {
    //this needs to be a server action
    "use server";

    //Check the user's input and make sure they're valid
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    //Create a new record in the database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    console.log("Snippet created:", snippet);
    //Redirect the user to the new snippet's page
    redirect("/");

  }

  return (
    <form action={handleSubmit}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
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
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            className="border rounded p-2 w-full"
            
            id="code"
            name="code"
          />
        </div>
        <button className="rounded p-2 bg-blue-200" type="submit"> Create </button>
    
      </div>
    </form>
  );
}

export default SnippetForm