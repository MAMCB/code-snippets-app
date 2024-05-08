import { SnippetDetailsPageProps } from "@/utils/interfaces";
import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/SnippetEditForm";
import { redirect } from "next/navigation";
import type { Snippet } from "@prisma/client";

const SnippetEditPage = async (props:SnippetDetailsPageProps) => {
    const id = parseInt(props.params.id);
    const snippet = await db.snippet.findFirst({where: {id}});
    if (!snippet) {
        return notFound();
    }
    
    async function editSnippet(SnippetData: Snippet) {
        //this needs to be a server action
        "use server";
    
        //Check the user's input and make sure they're valid
        const title = SnippetData.title;
        const code = SnippetData.code;
        const language = SnippetData.language;
    
        //Create a new record in the database
        const snippet = await db.snippet.update({
          where: {id},
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

  return <div>
    
    <SnippetEditForm snippet={snippet} editSnippet={editSnippet} />
</div>;
};

export default SnippetEditPage;
