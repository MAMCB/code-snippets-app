
"use server";

import type { Snippet } from "@prisma/client";
import { redirect } from "next/navigation";
import { db } from "@/db";

export async function editSnippet(SnippetData: Snippet, id: number) {
  //Check the user's input and make sure they're valid
  const title = SnippetData.title;
  const code = SnippetData.code;
  const language = SnippetData.language;

  //Create a new record in the database
  const snippet = await db.snippet.update({
    where: { id },
    data: {
      title,
      code,
      language,
    },
  });

  console.log("Snippet updated:", snippet);
  //Redirect the user to the new snippet's page
  redirect("/");
}

 export async function handleSubmit(formData: FormData) {
   

   //Check the user's input and make sure they're valid
   const title = formData.get("title") as string;
   const code = formData.get("code") as string;
   const language = formData.get("language") as string;

   //Create a new record in the database
   const snippet = await db.snippet.create({
     data: {
       title,
       code,
       language,
     },
   });

   console.log("Snippet created:", snippet);
   //Redirect the user to the new snippet's page
   redirect("/");
 }

