import { NextResponse } from 'next/server';

export async function GET() {
  const spec = {
    version: '0.1.0',
    title: 'Agentic Platform API',
    endpoints: [
      { method: 'GET', path: '/api/health', summary: 'Health check' },
      { method: 'GET', path: '/api/openapi', summary: 'OpenAPI summary (this)' },
      { method: 'POST', path: '/api/ai/rag', summary: 'RAG answer with contexts' },
      { method: 'POST', path: '/api/cert/sign', summary: 'Sign certificate payload (Ed25519)' },
      { method: 'POST', path: '/api/cert/verify', summary: 'Verify certificate signature' }
    ],
    samples: {
      rag: { body: { query: 'What is the mission?' } },
      certSign: { body: { studentId: 's1', courseId: 'c1', issuedAt: '2025-01-01' } },
      certVerify: { body: { payload: { studentId: 's1' }, signature: '<base64>', publicKey: '<base64>' } }
    }
  };
  return NextResponse.json(spec, { headers: { 'Cache-Control': 'no-store' } });
}
