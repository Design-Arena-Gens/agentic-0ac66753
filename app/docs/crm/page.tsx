import Link from 'next/link';

export default function Page() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>CRM Systems</h1>
      <ul>
        <li><Link className="link" href="/crm/students">Students CRM</Link></li>
        <li><Link className="link" href="/crm/donors">Donors CRM</Link></li>
        <li><Link className="link" href="/crm/instructors">Instructors CRM</Link></li>
        <li><Link className="link" href="/crm/employers">Employers CRM</Link></li>
      </ul>
    </article>
  );
}
