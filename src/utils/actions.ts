
"use server";

import type { Snippet } from "@prisma/client";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { revalidatePath } from "next/cache";

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
  revalidatePath("/");
  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

 export async function handleSubmit(formState:{message:string},formData: FormData) {
   

   //Check the user's input and make sure they're valid
   const title = formData.get("title");
   const code = formData.get("code");
   const language = formData.get("language");

   try{
   //validate the user's input
   if(typeof title !== "string" || title.length < 3) {
    return {message: "Title must be at least 3 characters long"};
    }

    if(typeof code !== "string" || code.length < 3) {
      return {message: "Code must be at least 3 characters long"};
    }

    if(typeof language !== "string" || language.length < 1) {
      return {message: "Please select a language"};
    }

  //  //Create a new record in the database
   const snippet = await db.snippet.create({
     data: {
       title,
       code,
       language,
     },
   });
   console.log("Snippet created:", snippet);
 
  } catch (error) {
    if(error instanceof Error) {
      return {message: error.message};
  }
  else {
    return {message: "An unknown error occurred"};
  }
}
   
   //Redirect the user to the new snippet's page
   revalidatePath("/");
   redirect("/");
 }

 export async function deleteSnippet(id: number) {
    await db.snippet.delete({where: {id}});
    revalidatePath("/");
    redirect("/");
 }

