import { db } from "@/db"
import Link from "next/link";
import { getLanguageColor } from "@/utils/interfaces";

const  SnippetsList = async () => {


 
    const snippets = await db.snippet.findMany();

    const snippetList = snippets.map((snippet) => {
        return (
          <Link
            key={snippet.id}
            href={`/snippets/${snippet.id}`}
            className="flex justify-between items-center p-2 border-4 rounded"
            style={{ borderColor: getLanguageColor(snippet.language) }}
          >
            <div>{snippet.title + " - " + snippet.language.toUpperCase()}</div>
            <div>View</div>
          </Link>
        );
    })
  return (
    <div>
        <div className="flex m-2 justify-between items-center">
            <h1 className="text-xl font-bold">Snippets</h1>
            <Link href="/snippets/new" className="border p-2 rounded">
                New
            </Link>
        </div>
      <div className="flex flex-col gap-2">{snippetList}</div>
    </div>
  );
}

export default SnippetsList