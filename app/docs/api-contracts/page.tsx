import Link from 'next/link';

export default function Page() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>API Contracts</h1>
      <p>Explore a compact OpenAPI-like summary from the app:</p>
      <pre className="whitespace-pre-wrap break-words">GET /api/openapi</pre>
      <p>
        Try RAG pipeline:
      </p>
      <pre>POST /api/ai/rag {`{ query: "What is the mission?" }`}</pre>
      <p>
        Certificate signing:
      </p>
      <pre>POST /api/cert/sign {`{ studentId, courseId, issuedAt }`}</pre>
      <p>
        Certificate verification:
      </p>
      <pre>POST /api/cert/verify {`{ payload, signature, publicKey }`}</pre>
      <p>
        Health: <code>GET /api/health</code>
      </p>
      <p>
        <Link href="/api/openapi" className="btn">View OpenAPI summary</Link>
      </p>
    </article>
  );
}
