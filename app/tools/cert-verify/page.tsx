"use client";

import { useState } from 'react';

export default function CertVerifyTool() {
  const [payload, setPayload] = useState('{"studentId":"s1","courseId":"c1","issuedAt":"2025-01-01"}');
  const [signature, setSignature] = useState('');
  const [publicKey, setPublicKey] = useState('');
  const [result, setResult] = useState<string>('');

  const sign = async () => {
    setResult('');
    const res = await fetch('/api/cert/sign', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(JSON.parse(payload))});
    const data = await res.json();
    setSignature(data.signature);
    setPublicKey(data.publicKey);
  };

  const verify = async () => {
    setResult('');
    const res = await fetch('/api/cert/verify', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ payload: JSON.parse(payload), signature, publicKey })});
    const data = await res.json();
    setResult(data.valid ? 'VALID' : 'INVALID');
  };

  return (
    <div className="card">
      <div className="card-header">Certificate Sign & Verify</div>
      <div className="card-body space-y-3">
        <label className="block text-sm">Payload JSON</label>
        <textarea className="w-full h-40 p-3 rounded bg-black/30 border border-white/10" value={payload} onChange={e=>setPayload(e.target.value)} />
        <div className="flex gap-2">
          <button className="btn" onClick={sign}>Sign</button>
          <button className="btn" onClick={verify}>Verify</button>
        </div>
        <div>
          <div className="text-sm text-white/70">Signature</div>
          <div className="break-all text-xs">{signature}</div>
        </div>
        <div>
          <div className="text-sm text-white/70">Public Key</div>
          <div className="break-all text-xs">{publicKey}</div>
        </div>
        <div className="text-lg font-semibold">Result: {result}</div>
      </div>
    </div>
  );
}
