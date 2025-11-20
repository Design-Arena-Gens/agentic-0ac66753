export default function Page() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Certificate Trust & Verification</h1>
      <p>Certificates signed with Ed25519. Verify via API or UI tool.</p>
      <pre>{`POST /api/cert/sign { payload } -> { signature, publicKey }
POST /api/cert/verify { payload, signature, publicKey } -> { valid }`}</pre>
    </article>
  );
}
