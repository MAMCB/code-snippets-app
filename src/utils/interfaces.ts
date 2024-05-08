import type { Snippet } from "@prisma/client";

export interface SnippetDetailsPageProps {
  params: {
    id: string;
  };
}

export interface SnippetEditFormProps {
    snippet: Snippet;
    editSnippet: (snippet: Snippet) => void;

    
}

export enum SnippetLanguage {
    JavaScript = "javascript",
    TypeScript = "typescript",
    Python = "python",
    Ruby = "ruby",
    Java = "java",
    CSharp = "c#",
    
    PHP = "php",
    HTML = "html",
    CSS = "css",
    SCSS = "scss",
   
    JSON = "json",
  
    CPlusPlus = "c++",}
