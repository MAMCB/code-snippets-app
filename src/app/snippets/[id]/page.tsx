import { db } from "@/db";
import { notFound } from "next/navigation";
import { SnippetDetailsPageProps } from "@/utils/interfaces";
import Link from "next/link";
import { deleteSnippet } from "@/utils/actions";



const SnippetDetailsPage = async (props: SnippetDetailsPageProps) => {
  const snippet = await db.snippet.findFirst({where: {id: parseInt(props.params.id)}});
    if (!snippet) {
        return notFound();
    }

    const deleteSnippetAction = deleteSnippet.bind(null,snippet.id);
  return (
    <div className="mt-8">
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">
          {snippet.title + " - " + snippet.language.toUpperCase()}
        </h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="border p-2 rounded"
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button type="submit" className="border p-2 rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="border p-3 rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetDetailsPage;
export async function generateStaticParams()
{
  const snippets = await db.snippet.findMany();
  return snippets.map((snippet) => {
    return{id: snippet.id.toString()}
  });

}