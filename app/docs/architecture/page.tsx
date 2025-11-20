export default function Page() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>High-Level Architecture</h1>
      <p>
        Core components: Web App (Next.js), API Routes, Vector/RAG Service (stub), Certificate Service (Ed25519),
        CRM UI, CMS/Docs, Offline PWA. Designed for Vercel deployment with future Kubernetes multi-region support.
      </p>
      <h2>Interactions</h2>
      <ul>
        <li>Web App ? API (REST) for AI, certificates, health</li>
        <li>RAG pipeline uses embeddings store (pluggable)</li>
        <li>Certificates are signed and verified using Ed25519</li>
      </ul>
    </article>
  );
}
