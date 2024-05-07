import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetDetailsPageProps {
    params: {
        id: string;
    }
}

const SnippetDetailsPage = async (props: SnippetDetailsPageProps) => {
  const snippet = await db.snippet.findFirst({where: {id: parseInt(props.params.id)}});
    if (!snippet) {
        return notFound();
    }
  return <div>{snippet.title}</div>;
};

export default SnippetDetailsPage;