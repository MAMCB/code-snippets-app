import type { Snippet } from "@prisma/client";

export interface SnippetDetailsPageProps {
  params: {
    id: string;
  };
}

export interface SnippetEditFormProps {
    snippet: Snippet;

    
}
