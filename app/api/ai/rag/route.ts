import { NextResponse } from 'next/server';

const CORPUS: Array<{ id: string; text: string; source: string }> = [
  { id: 'd1', text: 'Our mission is to enable equitable education and employability worldwide.', source: 'mission.md' },
  { id: 'd2', text: 'The platform supports Arabic (RTL) and English for inclusive access.', source: 'localization.md' },
  { id: 'd3', text: 'Certificates are signed using Ed25519 and verified publicly.', source: 'certificates.md' },
];

function simpleRetrieve(query: string) {
  const q = query.toLowerCase();
  return CORPUS
    .map((doc) => ({ doc, score: doc.text.toLowerCase().includes(q) ? 1 : 0 }))
    .filter((x) => x.score > 0)
    .slice(0, 3)
    .map((x) => x.doc);
}

export async function POST(req: Request) {
  const { query } = await req.json().catch(() => ({ query: '' }));
  const contexts = simpleRetrieve(String(query || ''));
  const answer = contexts.length
    ? `Answer synthesized from ${contexts.length} context(s): ` + contexts.map(c => c.text).join(' ')
    : 'No relevant context found; please rephrase your query.';
  return NextResponse.json({ answer, contexts });
}
