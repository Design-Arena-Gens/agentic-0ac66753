"use client";

import { useEffect, useState } from 'react';

type Employer = { id: string; name: string; city?: string };

export default function EmployersCRM() {
  const [items, setItems] = useState<Employer[]>([]);
  const [draft, setDraft] = useState<Employer>({ id: '', name: '', city: '' });

  useEffect(() => { const d = localStorage.getItem('crm_employers'); if (d) setItems(JSON.parse(d)); }, []);
  useEffect(() => { localStorage.setItem('crm_employers', JSON.stringify(items)); }, [items]);

  const add = () => { if (!draft.name) return; setItems(p=>[...p,{...draft,id:crypto.randomUUID()}]); setDraft({id:'',name:'',city:''}); };

  return (
    <div className="card">
      <div className="card-header">Employers</div>
      <div className="card-body space-y-3">
        <div className="grid sm:grid-cols-3 gap-2">
          <input className="rounded bg-black/30 border border-white/10 px-3 py-2" placeholder="Name" value={draft.name} onChange={e=>setDraft({...draft, name:e.target.value})} />
          <input className="rounded bg-black/30 border border-white/10 px-3 py-2" placeholder="City" value={draft.city} onChange={e=>setDraft({...draft, city:e.target.value})} />
          <button className="btn" onClick={add}>Add</button>
        </div>
        <ul className="space-y-1 text-sm">
          {items.map(d => <li key={d.id} className="border-t border-white/10 pt-2">{d.name} ? {d.city}</li>)}
        </ul>
      </div>
    </div>
  );
}
