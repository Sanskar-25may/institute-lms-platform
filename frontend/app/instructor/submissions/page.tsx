"use client";

import { useState } from "react";

export default function SubmissionsPage() {
  const [activeTab, setActiveTab] = useState("pending");

  const pendingGrades = [
    { id: 1, student: "Ananya Rao", assignment: "Build a REST API", course: "Full-Stack React", submitted: "2h ago", status: "Needs Review" },
    { id: 2, student: "David Kim", assignment: "Auth flow with JWT", course: "Full-Stack React", submitted: "5h ago", status: "Needs Review" },
    { id: 3, student: "Priya Sharma", assignment: "TypeScript Generics", course: "TypeScript Deep Dive", submitted: "1 day ago", status: "Needs Review" }
  ];

  return (
    <div className="max-w-[1200px] mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2">Submissions</h1>
          <p className="text-slate-400 font-medium">Review and grade student project work.</p>
        </div>
      </div>

      <div className="bg-[#131B2F] border border-white/5 rounded-[24px] shadow-lg overflow-hidden">
        {/* Tabs */}
        <div className="flex items-center gap-6 px-8 pt-6 border-b border-white/5">
          <button onClick={() => setActiveTab("pending")} className={`pb-4 text-sm font-bold transition-colors border-b-2 ${activeTab === "pending" ? "text-violet-400 border-violet-500" : "text-slate-500 border-transparent hover:text-slate-300"}`}>
            Needs Review (14)
          </button>
          <button onClick={() => setActiveTab("graded")} className={`pb-4 text-sm font-bold transition-colors border-b-2 ${activeTab === "graded" ? "text-violet-400 border-violet-500" : "text-slate-500 border-transparent hover:text-slate-300"}`}>
            Graded
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.02] border-b border-white/5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <th className="p-6 font-medium">Student</th>
                <th className="p-6 font-medium">Assignment</th>
                <th className="p-6 font-medium">Course</th>
                <th className="p-6 font-medium">Submitted</th>
                <th className="p-6 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {pendingGrades.map((sub) => (
                <tr key={sub.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 font-bold text-white">{sub.student}</td>
                  <td className="p-6 text-slate-300">{sub.assignment}</td>
                  <td className="p-6 text-slate-400 text-sm">{sub.course}</td>
                  <td className="p-6 text-sm text-slate-400">{sub.submitted}</td>
                  <td className="p-6 text-right">
                    <button className="px-4 py-2 bg-violet-600/20 text-violet-400 hover:bg-violet-600 hover:text-white text-xs font-bold rounded-lg transition-colors border border-violet-500/30">
                      Grade Work
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}