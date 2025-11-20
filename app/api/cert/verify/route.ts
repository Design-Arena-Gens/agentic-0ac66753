import { NextResponse } from 'next/server';
import * as ed from '@noble/ed25519';

export async function POST(req: Request) {
  const { payload, signature, publicKey } = await req.json();
  const msg = new TextEncoder().encode(JSON.stringify(payload));
  const sig = Uint8Array.from(Buffer.from(String(signature), 'base64'));
  const pub = Uint8Array.from(Buffer.from(String(publicKey), 'base64'));
  let valid = false;
  try {
    // ed.verify may be sync or async depending on version; await handles both
    valid = await ed.verify(sig, msg, pub) as boolean;
  } catch {
    valid = false;
  }
  return NextResponse.json({ valid });
}
