export default function Page() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>AI Orchestration Layer</h1>
      <p>
        The RAG pipeline retrieves context passages and synthesizes concise answers. This demo uses a static corpus and returns citations.
      </p>
      <pre>{`POST /api/ai/rag { query: string } -> { answer, contexts[] }`}</pre>
    </article>
  );
}
