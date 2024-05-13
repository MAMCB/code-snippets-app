import SnippetsList from "@/components/SnippetsList";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="mt-8">
      <h1>Welcome to your Library of code Snippets</h1>
      <SnippetsList />
      
    </div>
  );
}
