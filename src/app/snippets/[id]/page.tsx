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
  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <button className="border p-2 rounded">Edit</button>
          <button className="border p-2 rounded">Delete</button>
        </div>
      </div>
      <pre className="border p-3 rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetDetailsPage;