import { NextResponse } from 'next/server';
import * as ed from '@noble/ed25519';
import { createHash } from 'crypto';

// NOTE: Demo seed (DO NOT USE IN PRODUCTION)
const DEMO_SEED = new TextEncoder().encode('agentic-demo-seed-agentic-demo-seed'); // 32 bytes

async function getKeyPair() {
  const privateKey = createHash('sha256').update(DEMO_SEED).digest().subarray(0, 32);
  const publicKey = await ed.getPublicKey(privateKey);
  return { privateKey, publicKey };
}

export async function POST(req: Request) {
  const payload = await req.json();
  const { privateKey, publicKey } = await getKeyPair();
  const message = new TextEncoder().encode(JSON.stringify(payload));
  const signature = await ed.sign(message, privateKey);
  return NextResponse.json({
    payload,
    signature: Buffer.from(signature).toString('base64'),
    publicKey: Buffer.from(publicKey).toString('base64')
  });
}
