 // src/pages/SliderManager.jsx
import React, { useEffect, useState } from "react";
import { fetchSlides, createSlide, deleteSlide } from "../api/settingsService";

export default function SliderManager({ creds }) {
  const [slides, setSlides] = useState([]);
  const [form, setForm] = useState({ title: "", subtitle: "", imageUrl: "", link: "", order: 0, active: true });

  function load() {
    fetchSlides().then(setSlides).catch(console.error);
  }

  useEffect(()=> load(), []);

  async function handleCreate() {
    try {
      await createSlide(creds, form);
      setForm({ title: "", subtitle: "", imageUrl: "", link: "", order: 0, active: true });
      load();
    } catch (err) { alert(err.message); }
  }

  async function handleDelete(id) {
    if (!confirm("Delete slide?")) return;
    try {
      await deleteSlide(creds, id);
      load();
    } catch (err) { alert(err.message); }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold">Slider Manager</h2>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-white p-4 rounded shadow">
          <label className="block text-sm">Title</label>
          <input className="w-full p-2 border mt-1" value={form.title} onChange={e=>setForm({...form,title:e.target.value})} />
          <label className="block text-sm mt-2">Subtitle</label>
          <input className="w-full p-2 border mt-1" value={form.subtitle} onChange={e=>setForm({...form,subtitle:e.target.value})} />
          <label className="block text-sm mt-2">Image URL</label>
          <input className="w-full p-2 border mt-1" value={form.imageUrl} onChange={e=>setForm({...form,imageUrl:e.target.value})} placeholder="https://..." />
          <label className="block text-sm mt-2">Link</label>
          <input className="w-full p-2 border mt-1" value={form.link} onChange={e=>setForm({...form,link:e.target.value})} />
          <label className="block text-sm mt-2">Order</label>
          <input type="number" className="w-full p-2 border mt-1" value={form.order} onChange={e=>setForm({...form,order: Number(e.target.value)})} />
          <div className="mt-3">
            <button onClick={handleCreate} className="px-4 py-2 bg-indigo-600 text-white rounded">Create Slide</button>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-semibold">Existing Slides</h4>
          <ul className="mt-2 space-y-2">
            {slides.map(s => (
              <li key={s._id} className="flex items-center gap-3 border p-2 rounded">
                <img src={s.imageUrl} alt="" style={{width:80,height:50,objectFit:'cover'}} />
                <div className="flex-1">
                  <div className="font-semibold">{s.title}</div>
                  <div className="text-sm text-slate-600">{s.subtitle}</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={()=>navigator.clipboard.writeText(JSON.stringify(s))} className="px-2 py-1 border rounded">Copy</button>
                  <button onClick={()=>handleDelete(s._id)} className="px-2 py-1 bg-red-600 text-white rounded">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
