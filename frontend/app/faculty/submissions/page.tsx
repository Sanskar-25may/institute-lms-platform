"use client";
import { useState } from "react";

export default function SubmissionsPage() {
  const [filter, setFilter] = useState("pending");

  return (
    <div className="space-y-8 pb-20">
       <div className="flex justify-between items-end">
          <div>
             <h1 className="heading-font text-3xl font-bold mb-2">Student Submissions</h1>
             <p style={{ color: 'var(--text-secondary)' }}>Review and grade assignments.</p>
          </div>
          
          <div className="flex p-1 rounded-xl" style={{ background: 'var(--bg-surface)' }}>
             <button onClick={() => setFilter("pending")} className={`px-4 py-2 text-sm font-bold rounded-lg transition-all ${filter === "pending" ? 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm' : 'text-[var(--text-secondary)]'}`}>Needs Grading</button>
             <button onClick={() => setFilter("graded")} className={`px-4 py-2 text-sm font-bold rounded-lg transition-all ${filter === "graded" ? 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm' : 'text-[var(--text-secondary)]'}`}>Graded</button>
          </div>
       </div>

       <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 space-y-4">
             {[1, 2, 3].map(i => (
                <div key={i} className="p-6 rounded-[24px] flex items-center justify-between card-hover" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-soft)' }}>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg bg-black/5 dark:bg-surf-elevated">
                         #
                      </div>
                      <div>
                         <h3 className="font-bold">E-commerce API Integration</h3>
                         <div className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>Submitted by Sanskar G • Full-Stack React</div>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <span className="text-xs font-semibold" style={{ color: 'var(--text-tertiary)' }}>2 hours ago</span>
                      <button className="btn-primary px-4 py-2 rounded-lg text-sm font-bold">Grade</button>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </div>
  );
}