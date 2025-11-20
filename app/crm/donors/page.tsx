"use client";

import { useEffect, useState } from 'react';

type Donor = { id: string; name: string; amount?: number };

export default function DonorsCRM() {
  const [donors, setDonors] = useState<Donor[]>([]);
  const [draft, setDraft] = useState<Donor>({ id: '', name: '', amount: 0 });

  useEffect(() => {
    const data = localStorage.getItem('crm_donors');
    if (data) setDonors(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('crm_donors', JSON.stringify(donors));
  }, [donors]);

  const add = () => {
    if (!draft.name) return;
    setDonors(prev => [...prev, { ...draft, id: crypto.randomUUID() }]);
    setDraft({ id: '', name: '', amount: 0 });
  };

  return (
    <div className="card">
      <div className="card-header">Donors</div>
      <div className="card-body space-y-3">
        <div className="grid sm:grid-cols-3 gap-2">
          <input className="rounded bg-black/30 border border-white/10 px-3 py-2" placeholder="Name" value={draft.name} onChange={e=>setDraft({...draft, name:e.target.value})} />
          <input type="number" className="rounded bg-black/30 border border-white/10 px-3 py-2" placeholder="Amount" value={draft.amount} onChange={e=>setDraft({...draft, amount:Number(e.target.value)})} />
          <button className="btn" onClick={add}>Add</button>
        </div>
        <ul className="space-y-1 text-sm">
          {donors.map(d => <li key={d.id} className="border-t border-white/10 pt-2">{d.name} ? ${d.amount ?? 0}</li>)}
        </ul>
      </div>
    </div>
  );
}
