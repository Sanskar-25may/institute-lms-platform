"use client";

import Link from "next/link";
import { useState } from "react";

export default function AdminStudentsPage() {
  const [search, setSearch] = useState("");

  const students = [
    { id: 1, name: "Ananya Rao", email: "ananya.r@example.com", status: "Active", joined: "Mar 2025", courses: 3, initials: "AR", color: "from-blue-500 to-indigo-600" },
    { id: 2, name: "Sara Kim", email: "sara@example.com", status: "Trial", joined: "Today", courses: 1, initials: "SK", color: "from-emerald-500 to-teal-600" },
    { id: 3, name: "Liam Nguyen", email: "liam@example.com", status: "Inactive", joined: "Oct 2025", courses: 0, initials: "LN", color: "from-slate-500 to-slate-600" },
  ];

  return (
    <div className="max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      
      {/* Breadcrumb & Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-2">
            <Link href="/admin/users" className="hover:text-blue-400 transition-colors">Users</Link>
            <span>/</span>
            <span className="text-blue-400">Students</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white mb-2">Student Directory</h1>
          <p className="text-slate-400 font-medium">Manage all enrolled learners on the platform.</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input type="text" placeholder="Search students..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-64 md:w-80 pl-10 pr-4 py-2.5 bg-[#131B2F] border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors" />
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-[#131B2F] border border-white/5 rounded-[24px] shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.02] border-b border-white/5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <th className="p-6 font-medium">Student Name</th>
                <th className="p-6 font-medium">Email</th>
                <th className="p-6 font-medium text-center">Enrolled Courses</th>
                <th className="p-6 font-medium">Status</th>
                <th className="p-6 font-medium">Joined</th>
                <th className="p-6 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${student.color} flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0`}>{student.initials}</div>
                      <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">{student.name}</h4>
                    </div>
                  </td>
                  <td className="p-6 text-sm text-slate-400">{student.email}</td>
                  <td className="p-6 text-center text-white font-bold">{student.courses}</td>
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${student.status === 'Active' ? 'bg-emerald-500' : student.status === 'Trial' ? 'bg-amber-500' : 'bg-slate-500'}`}></div>
                      <span className="text-sm font-medium text-slate-300">{student.status}</span>
                    </div>
                  </td>
                  <td className="p-6 text-sm text-slate-400">{student.joined}</td>
                  <td className="p-6 text-right">
                    <button className="px-4 py-2 bg-white/5 hover:bg-blue-600 hover:text-white text-slate-300 text-xs font-bold rounded-lg transition-colors border border-white/5 hover:border-blue-500">View Profile</button>
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