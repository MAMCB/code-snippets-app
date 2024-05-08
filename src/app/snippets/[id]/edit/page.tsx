import { SnippetDetailsPageProps } from "@/utils/interfaces";
import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/SnippetEditForm";




const SnippetEditPage = async (props:SnippetDetailsPageProps) => {
    const id = parseInt(props.params.id);
    const snippet = await db.snippet.findFirst({where: {id}});
    if (!snippet) {
        return notFound();
    }
    
   

  return <div className="mt-8">
    
    <SnippetEditForm snippet={snippet}  />
</div>;
};

export default SnippetEditPage;
