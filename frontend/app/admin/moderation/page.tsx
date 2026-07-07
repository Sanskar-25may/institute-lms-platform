"use client";

import { useState } from "react";

export default function AdminModerationPage() {
  const [activeQueue, setActiveQueue] = useState("courses");

  const pendingCourses = [
    { id: 1, title: "Advanced Node.js Scaling", faculty: "David Chen", submitted: "4 hrs ago", status: "Awaiting Review" },
    { id: 2, title: "Figma to React Native", faculty: "Sarah Jenkins", submitted: "1 day ago", status: "Awaiting Review" }
  ];

  return (
    <div className="max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2">Moderation Queue</h1>
        <p className="text-slate-400 font-medium">Review pending course publishes and handle flagged content.</p>
      </div>

      <div className="bg-[#131B2F] border border-white/5 rounded-[24px] shadow-lg overflow-hidden mt-8">
        {/* Queue Tabs */}
        <div className="flex items-center gap-6 px-8 pt-6 border-b border-white/5">
          <button onClick={() => setActiveQueue("courses")} className={`pb-4 text-sm font-bold transition-colors border-b-2 flex items-center gap-2 ${activeQueue === "courses" ? "text-violet-400 border-violet-500" : "text-slate-500 border-transparent hover:text-slate-300"}`}>
            Course Approvals <span className="bg-violet-500/20 text-violet-400 px-2 py-0.5 rounded-full text-[10px]">2</span>
          </button>
          <button onClick={() => setActiveQueue("flagged")} className={`pb-4 text-sm font-bold transition-colors border-b-2 flex items-center gap-2 ${activeQueue === "flagged" ? "text-rose-400 border-rose-500" : "text-slate-500 border-transparent hover:text-slate-300"}`}>
            Flagged Comments <span className="bg-rose-500/20 text-rose-400 px-2 py-0.5 rounded-full text-[10px]">0</span>
          </button>
        </div>

        {/* Content Queue */}
        <div className="overflow-x-auto">
          {activeQueue === "courses" ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/[0.02] border-b border-white/5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <th className="p-6 font-medium">Course Title</th>
                  <th className="p-6 font-medium">Faculty</th>
                  <th className="p-6 font-medium">Submitted</th>
                  <th className="p-6 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {pendingCourses.map((course) => (
                  <tr key={course.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 font-bold text-white">{course.title}</td>
                    <td className="p-6 text-slate-300 text-sm">{course.faculty}</td>
                    <td className="p-6 text-sm text-slate-400">{course.submitted}</td>
                    <td className="p-6 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-bold rounded-lg transition-colors border border-white/10">Preview</button>
                        <button className="px-4 py-2 bg-emerald-600/20 hover:bg-emerald-600 hover:text-white text-emerald-400 text-xs font-bold rounded-lg transition-colors border border-emerald-500/30">Approve</button>
                        <button className="px-4 py-2 bg-rose-600/20 hover:bg-rose-600 hover:text-white text-rose-400 text-xs font-bold rounded-lg transition-colors border border-rose-500/30">Reject</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
             <div className="p-16 text-center text-slate-500 flex flex-col items-center">
               <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
               <h3 className="text-xl font-bold text-white mb-1">Queue is empty</h3>
               <p>No flagged comments require your attention right now.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}