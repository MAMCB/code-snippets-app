import type { Snippet } from "@prisma/client";

export interface SnippetDetailsPageProps {
  params: {
    id: string;
  };
}

export interface SnippetEditFormProps {
    snippet: Snippet;
    

    
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

    export function getLanguageColor(language: string): string {
        return languageColors[language];
    } 
    export interface LanguageColors {
        [key: string]: string;
    }

    const languageColors: LanguageColors = {
        javascript: "#f1e05a",
        typescript : "#2b7489",
        python : "#3572A5",
        ruby : "#701516",
        java : "#b07219",
       "c#" : "#178600",
        
        php : "#4F5D95",
        html : "#e34c26",
        css : "#563d7c",
        scss : "#c6538c",
       
        json : "#292929",
      
        "c++" : "#f34b7d",}
    

