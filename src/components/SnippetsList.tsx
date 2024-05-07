import { db } from "@/db"

const  SnippetsList = async () => {


 
    const snippets = await db.snippet.findMany();

    const snippetList = snippets.map((snippet) => {
        return <div key={snippet.id}>{snippet.title}</div>
    })
  return (
    <div>{snippetList}</div>
  )
}

export default SnippetsList