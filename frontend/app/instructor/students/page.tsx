"use client";

import { useState } from "react";

export default function InstructorStudentsPage() {
  const [search, setSearch] = useState("");

  const students = [
    {
      id: 1,
      name: "Ananya Rao",
      email: "ananya.r@example.com",
      course: "Full-Stack React & TypeScript",
      progress: 85,
      lastActive: "2 hours ago",
      initials: "AR",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      name: "David Kim",
      email: "dkim99@example.com",
      course: "Full-Stack React & TypeScript",
      progress: 42,
      lastActive: "Yesterday",
      initials: "DK",
      color: "from-emerald-500 to-teal-600"
    },
    {
      id: 3,
      name: "Priya Sharma",
      email: "priya.sharma@example.com",
      course: "TypeScript Deep Dive",
      progress: 100,
      lastActive: "3 days ago",
      initials: "PS",
      color: "from-fuchsia-500 to-pink-600"
    },
    {
      id: 4,
      name: "Michael Chen",
      email: "mchen@example.com",
      course: "React Server Components",
      progress: 12,
      lastActive: "1 week ago",
      initials: "MC",
      color: "from-amber-500 to-orange-600"
    },
    {
      id: 5,
      name: "Sarah Jenkins",
      email: "s.jenkins@example.com",
      course: "Full-Stack React & TypeScript",
      progress: 68,
      lastActive: "Just now",
      initials: "SJ",
      color: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      
      {/* --- HEADER & ACTIONS --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2">Student Directory</h1>
          <p className="text-slate-400 font-medium">Monitor progress and message your learners.</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input 
              type="text" 
              placeholder="Search by name or email..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-64 md:w-80 pl-10 pr-4 py-2.5 bg-[#131B2F] border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors" 
            />
          </div>
          <button className="px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all flex items-center gap-2 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
            Filter
          </button>
        </div>
      </div>

      {/* --- STUDENT ROSTER TABLE --- */}
      <div className="bg-[#131B2F] border border-white/5 rounded-[24px] shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            
            <thead>
              <tr className="bg-white/[0.02] border-b border-white/5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <th className="p-6 font-medium">Student</th>
                <th className="p-6 font-medium">Enrolled Course</th>
                <th className="p-6 font-medium">Progress</th>
                <th className="p-6 font-medium">Last Active</th>
                <th className="p-6 font-medium text-right">Actions</th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-white/5">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-white/[0.02] transition-colors group">
                  
                  {/* Student Identity */}
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${student.color} flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0`}>
                        {student.initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-white group-hover:text-violet-400 transition-colors">{student.name}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">{student.email}</p>
                      </div>
                    </div>
                  </td>

                  {/* Course */}
                  <td className="p-6 text-sm font-medium text-slate-300">
                    {student.course}
                  </td>

                  {/* Progress Bar */}
                  <td className="p-6">
                    <div className="flex items-center gap-3 max-w-[150px]">
                      <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${student.progress === 100 ? 'bg-emerald-500' : 'bg-violet-500'}`} 
                          style={{ width: `${student.progress}%` }}
                        ></div>
                      </div>
                      <span className={`text-xs font-bold ${student.progress === 100 ? 'text-emerald-400' : 'text-slate-300'}`}>
                        {student.progress}%
                      </span>
                    </div>
                  </td>

                  {/* Last Active */}
                  <td className="p-6 text-sm text-slate-400">
                    {student.lastActive}
                  </td>

                  {/* Actions */}
                  <td className="p-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="px-4 py-2 bg-white/5 hover:bg-violet-600 hover:text-white text-slate-300 text-xs font-bold rounded-lg transition-colors border border-white/5 hover:border-violet-500 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                        Message
                      </button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
            
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="p-4 border-t border-white/5 flex items-center justify-between text-sm text-slate-400 bg-white/[0.01]">
          <span>Showing 1 to 5 of 12,480 students</span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded border border-white/5 transition-colors disabled:opacity-50">Previous</button>
            <button className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded border border-white/5 transition-colors">Next</button>
          </div>
        </div>
      </div>

    </div>
  );
}