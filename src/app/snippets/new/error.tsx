"use client";

import { ErrorPageProps } from "@/utils/interfaces";

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold">Error</h1>
      <p className="text-red-500">{error.message}</p>
      <button onClick={reset} className="rounded p-2 bg-blue-200 mt-4">
        Go back
      </button>
    </div>
  );
};