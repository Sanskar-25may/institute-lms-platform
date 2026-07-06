"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function InstructorCoursesPage() {
  const [search, setSearch] = useState("");

  const myCourses = [
    {
      id: 1,
      title: "Full-Stack React & TypeScript",
      status: "Published",
      students: "12,480",
      revenue: "$612K",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "TypeScript Deep Dive",
      status: "Published",
      students: "3,210",
      revenue: "$156K",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "React Server Components Masterclass",
      status: "Draft",
      students: "0",
      revenue: "$0",
      rating: 0,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&auto=format&fit=crop",
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      
      {/* --- HEADER & ACTIONS --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2">Course Management</h1>
          <p className="text-slate-400 font-medium">Create, edit, and monitor your educational content.</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input 
              type="text" 
              placeholder="Search courses..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-64 pl-10 pr-4 py-2.5 bg-[#131B2F] border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors" 
            />
          </div>
          <Link href="/instructor/create" className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-violet-900/50 flex items-center gap-2 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
            New Course
          </Link>
        </div>
      </div>

      {/* --- COURSE LIST TABLE --- */}
      <div className="bg-[#131B2F] border border-white/5 rounded-[24px] shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            
            <thead>
              <tr className="bg-white/[0.02] border-b border-white/5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <th className="p-6 font-medium">Course Details</th>
                <th className="p-6 font-medium text-center">Status</th>
                <th className="p-6 font-medium text-right">Students</th>
                <th className="p-6 font-medium text-right">Revenue</th>
                <th className="p-6 font-medium text-right">Actions</th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-white/5">
              {myCourses.map((course) => (
                <tr key={course.id} className="hover:bg-white/[0.02] transition-colors group">
                  
                  {/* Course Info */}
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-12 rounded-lg bg-slate-800 overflow-hidden shrink-0 border border-white/5 relative">
  <Image src={course.image} alt={course.title} fill sizes="64px" className="object-cover" />
</div>
                      <div>
                        <h4 className="font-bold text-white group-hover:text-violet-400 transition-colors line-clamp-1">{course.title}</h4>
                        {course.rating > 0 ? (
                           <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                             <svg className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                             {course.rating} Rating
                           </div>
                        ) : (
                           <div className="text-xs text-slate-500 mt-1">No ratings yet</div>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="p-6 text-center">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      course.status === 'Published' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-500/10 text-slate-400'
                    }`}>
                      {course.status}
                    </span>
                  </td>

                  {/* Students */}
                  <td className="p-6 text-right font-medium text-slate-300">
                    {course.students}
                  </td>

                  {/* Revenue */}
                  <td className="p-6 text-right font-bold text-emerald-400">
                    {course.revenue}
                  </td>

                  {/* Actions */}
                  <td className="p-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href="/instructor/create" className="p-2 text-slate-400 hover:text-violet-400 hover:bg-violet-500/10 rounded-lg transition-colors" title="Edit Course">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                      </Link>
                      <button className="p-2 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors" title="View Analytics">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                      </button>
                    </div>
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