import Link from "next/link";

export default function InstructorOverview() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-500">
      
      {/* --- HEADER ACTIONS --- */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Manage your courses, students, and submissions.</h1>
        </div>
        {/* FIXED: This is now a Link component pointing to the create page */}
        <Link href="/instructor/create" className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-violet-900/50 flex items-center gap-2 cursor-pointer">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          Create course
        </Link>
      </div>

      {/* --- TOP METRICS GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#131B2F] border border-white/5 p-6 rounded-2xl shadow-lg shadow-black/20">
          <p className="text-sm font-medium text-slate-400 mb-4">Total students</p>
          <div className="flex items-end justify-between">
            <h3 className="text-4xl font-extrabold text-white">15,690</h3>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">+210 this week</span>
          </div>
        </div>
        <div className="bg-[#131B2F] border border-white/5 p-6 rounded-2xl shadow-lg shadow-black/20">
          <p className="text-sm font-medium text-slate-400 mb-4">Active courses</p>
          <h3 className="text-4xl font-extrabold text-white">3</h3>
        </div>
        <div className="bg-[#131B2F] border border-white/5 p-6 rounded-2xl shadow-lg shadow-black/20">
          <p className="text-sm font-medium text-slate-400 mb-4">Avg. rating</p>
          <div className="flex items-end justify-between">
            <h3 className="text-4xl font-extrabold text-white">4.87</h3>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">+12%</span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-violet-900/40 to-fuchsia-900/20 border border-violet-500/20 p-6 rounded-2xl shadow-lg shadow-violet-900/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <svg className="w-16 h-16 text-violet-400" fill="currentColor" viewBox="0 0 20 20"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path></svg>
          </div>
          <p className="text-sm font-medium text-violet-200 mb-4 relative z-10">Revenue (this mo)</p>
          <div className="flex items-end justify-between relative z-10">
            <h3 className="text-4xl font-extrabold text-white">$34.2K</h3>
          </div>
        </div>
      </div>

      {/* --- MIDDLE ROW: COURSES & CHART --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2 bg-[#131B2F] border border-white/5 rounded-[24px] p-8 shadow-lg shadow-black/20 overflow-x-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">My courses</h3>
            <button className="text-sm font-medium text-slate-400 hover:text-white transition-colors">View all</button>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="pb-4 font-medium">Course</th>
                <th className="pb-4 font-medium">Students</th>
                <th className="pb-4 font-medium">Rating</th>
                <th className="pb-4 font-medium">Revenue</th>
                <th className="pb-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="py-4 font-bold text-white">Full-Stack React & TypeScript</td>
                <td className="py-4 text-slate-300">12,480</td>
                <td className="py-4 text-slate-300">4.9</td>
                <td className="py-4 text-emerald-400 font-bold">$612K</td>
                <td className="py-4"><span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-[10px] font-bold uppercase tracking-wider">Published</span></td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="py-4 font-bold text-white">TypeScript Deep Dive</td>
                <td className="py-4 text-slate-300">3,210</td>
                <td className="py-4 text-slate-300">4.8</td>
                <td className="py-4 text-emerald-400 font-bold">$156K</td>
                <td className="py-4"><span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-[10px] font-bold uppercase tracking-wider">Published</span></td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-4 font-bold text-white">React Server Components</td>
                <td className="py-4 text-slate-500">0</td>
                <td className="py-4 text-slate-500">—</td>
                <td className="py-4 text-slate-500 font-bold">$0</td>
                <td className="py-4"><span className="px-3 py-1 rounded-full bg-slate-500/10 text-slate-400 text-[10px] font-bold uppercase tracking-wider">Draft</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#131B2F] border border-white/5 rounded-[24px] p-8 shadow-lg shadow-black/20 flex flex-col">
          <h3 className="text-lg font-bold text-white mb-6">Engagement (weekly mins)</h3>
          <div className="flex-1 relative w-full h-full min-h-[200px] flex items-end pt-4">
             <div className="absolute inset-0 flex flex-col justify-between pb-8 z-0">
               <div className="w-full border-t border-white/5 border-dashed h-0"></div>
               <div className="w-full border-t border-white/5 border-dashed h-0"></div>
               <div className="w-full border-t border-white/5 border-dashed h-0"></div>
             </div>
             <div className="absolute inset-0 pb-8 z-10 w-full flex items-end justify-between px-2">
               <div className="w-[8%] bg-violet-600/50 hover:bg-violet-500 transition-colors rounded-t-sm h-[40%]"></div>
               <div className="w-[8%] bg-violet-600/50 hover:bg-violet-500 transition-colors rounded-t-sm h-[60%]"></div>
               <div className="w-[8%] bg-violet-600/50 hover:bg-violet-500 transition-colors rounded-t-sm h-[45%]"></div>
               <div className="w-[8%] bg-violet-600/50 hover:bg-violet-500 transition-colors rounded-t-sm h-[80%]"></div>
               <div className="w-[8%] bg-violet-600 hover:bg-violet-500 transition-colors rounded-t-sm h-[95%] relative">
                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-[#0B0F19] text-[10px] font-bold px-2 py-1 rounded shadow-lg">Peak</div>
               </div>
               <div className="w-[8%] bg-violet-600/50 hover:bg-violet-500 transition-colors rounded-t-sm h-[50%]"></div>
               <div className="w-[8%] bg-violet-600/50 hover:bg-violet-500 transition-colors rounded-t-sm h-[30%]"></div>
             </div>
             <div className="absolute bottom-0 left-0 w-full flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-wider z-20 px-2">
               <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
             </div>
          </div>
        </div>

      </div>

      {/* --- BOTTOM SECTION: SUBMISSIONS & DISCUSSIONS --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-12">
        <div className="bg-[#131B2F] border border-white/5 rounded-[24px] p-8 shadow-lg shadow-black/20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              Submissions to grade
            </h3>
            <Link href="#" className="text-sm font-medium text-violet-400 hover:text-violet-300">All submissions</Link>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
              <div>
                <h4 className="font-bold text-white mb-1">Build a REST API</h4>
                <p className="text-xs text-slate-400">Ananya Rao • Full-Stack React • 2h ago</p>
              </div>
              <button className="px-4 py-2 rounded-lg bg-white/5 text-slate-300 hover:bg-white/10 text-xs font-bold transition-colors">
                Review
              </button>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
              <div>
                <h4 className="font-bold text-white mb-1">Auth flow with JWT</h4>
                <p className="text-xs text-slate-400">David Kim • Full-Stack React • 5h ago</p>
              </div>
              <button className="px-4 py-2 rounded-lg bg-white/5 text-slate-300 hover:bg-white/10 text-xs font-bold transition-colors">
                Review
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#131B2F] border border-white/5 rounded-[24px] p-8 shadow-lg shadow-black/20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Recent discussions</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
              <div>
                <h4 className="font-bold text-white mb-1 line-clamp-1">How to memoize server components?</h4>
                <p className="text-xs text-slate-400">Started by James</p>
              </div>
              <span className="text-xs font-bold text-slate-500 whitespace-nowrap">8 replies</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
              <div>
                <h4 className="font-bold text-white mb-1 line-clamp-1">Best pattern for optimistic updates</h4>
                <p className="text-xs text-slate-400">Started by Elena</p>
              </div>
              <span className="text-xs font-bold text-slate-500 whitespace-nowrap">5 replies</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}