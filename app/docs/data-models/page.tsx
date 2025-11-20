export default function Page() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Core Data Models</h1>
      <h2>SQL</h2>
      <pre>{`Student(id, name, email, locale, needs)
Enrollment(id, studentId, courseId, status)
Certificate(id, studentId, courseId, issuedAt, signature)
Donation(id, donorId, causeId, amount, createdAt)`}</pre>
      <h2>NoSQL</h2>
      <pre>{`ContentRevision { id, contentId, version, blocks[], createdBy, createdAt }
Progress { id, studentId, courseId, unitId, score, updatedAt }`}</pre>
      <h2>Vector</h2>
      <pre>{`DocumentEmbedding { id, docId, embedding[1536], metadata }`}</pre>
    </article>
  );
}
