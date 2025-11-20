"use client";

import { useEffect, useState } from 'react';

type Student = { id: string; name: string; email: string; locale?: string; needs?: string };

export default function StudentsCRM() {
  const [students, setStudents] = useState<Student[]>([]);
  const [draft, setDraft] = useState<Student>({ id: '', name: '', email: '' });

  useEffect(() => {
    const data = localStorage.getItem('crm_students');
    if (data) setStudents(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('crm_students', JSON.stringify(students));
  }, [students]);

  const add = () => {
    if (!draft.name || !draft.email) return;
    setStudents(prev => [...prev, { ...draft, id: crypto.randomUUID() }]);
    setDraft({ id: '', name: '', email: '' });
  };

  return (
    <div className="space-y-4">
      <div className="card">
        <div className="card-header">Students</div>
        <div className="card-body space-y-3">
          <div className="grid sm:grid-cols-3 gap-2">
            <input className="rounded bg-black/30 border border-white/10 px-3 py-2" placeholder="Name" value={draft.name} onChange={e=>setDraft({...draft, name:e.target.value})} />
            <input className="rounded bg-black/30 border border-white/10 px-3 py-2" placeholder="Email" value={draft.email} onChange={e=>setDraft({...draft, email:e.target.value})} />
            <button className="btn" onClick={add}>Add</button>
          </div>
          <table className="w-full text-sm">
            <thead className="text-white/70"><tr><th className="text-start">Name</th><th className="text-start">Email</th></tr></thead>
            <tbody>
              {students.map(s=> (
                <tr key={s.id} className="border-t border-white/10"><td>{s.name}</td><td>{s.email}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
