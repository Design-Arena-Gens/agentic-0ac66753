"use client";

import { useEffect, useState } from 'react';

type Instructor = { id: string; name: string; expertise?: string };

export default function InstructorsCRM() {
  const [items, setItems] = useState<Instructor[]>([]);
  const [draft, setDraft] = useState<Instructor>({ id: '', name: '', expertise: '' });

  useEffect(() => { const d = localStorage.getItem('crm_instructors'); if (d) setItems(JSON.parse(d)); }, []);
  useEffect(() => { localStorage.setItem('crm_instructors', JSON.stringify(items)); }, [items]);

  const add = () => { if (!draft.name) return; setItems(p=>[...p,{...draft,id:crypto.randomUUID()}]); setDraft({id:'',name:'',expertise:''}); };

  return (
    <div className="card">
      <div className="card-header">Instructors</div>
      <div className="card-body space-y-3">
        <div className="grid sm:grid-cols-3 gap-2">
          <input className="rounded bg-black/30 border border-white/10 px-3 py-2" placeholder="Name" value={draft.name} onChange={e=>setDraft({...draft, name:e.target.value})} />
          <input className="rounded bg-black/30 border border-white/10 px-3 py-2" placeholder="Expertise" value={draft.expertise} onChange={e=>setDraft({...draft, expertise:e.target.value})} />
          <button className="btn" onClick={add}>Add</button>
        </div>
        <ul className="space-y-1 text-sm">
          {items.map(d => <li key={d.id} className="border-t border-white/10 pt-2">{d.name} ? {d.expertise}</li>)}
        </ul>
      </div>
    </div>
  );
}
