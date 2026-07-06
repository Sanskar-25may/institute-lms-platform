import Link from "next/link";

export default function StudentOverview() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-500">
      
      {/* --- TOP METRICS GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#131B2F] border border-white/5 p-6 rounded-2xl shadow-lg shadow-black/20">
          <p className="text-sm font-medium text-slate-400 mb-4">Enrolled courses</p>
          <div className="flex items-end justify-between">
            <h3 className="text-4xl font-extrabold text-white">3</h3>
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            </div>
          </div>
        </div>

        <div className="bg-[#131B2F] border border-violet-500/30 p-6 rounded-2xl shadow-[0_0_30px_rgba(139,92,246,0.1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
            <svg className="w-24 h-24 text-violet-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path></svg>
          </div>
          <p className="text-sm font-medium text-slate-400 mb-4 relative z-10">Learning streak</p>
          <div className="flex flex-col relative z-10">
            <h3 className="text-4xl font-extrabold text-white">12 <span className="text-xl text-slate-400">days</span></h3>
            <p className="text-xs font-bold text-violet-400 mt-2">+3 this week</p>
          </div>
        </div>

        <div className="bg-[#131B2F] border border-white/5 p-6 rounded-2xl shadow-lg shadow-black/20">
          <p className="text-sm font-medium text-slate-400 mb-4">Hours this week</p>
          <div className="flex flex-col">
            <h3 className="text-4xl font-extrabold text-white">8.4<span className="text-xl text-slate-400">h</span></h3>
          </div>
        </div>

        <div className="bg-[#131B2F] border border-white/5 p-6 rounded-2xl shadow-lg shadow-black/20">
          <p className="text-sm font-medium text-slate-400 mb-4">Certificates</p>
          <div className="flex items-end justify-between">
            <h3 className="text-4xl font-extrabold text-white">2</h3>
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
          </div>
        </div>
      </div>

      {/* --- MIDDLE SECTION: CONTINUE LEARNING & CHART --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Continue Learning List */}
        <div className="lg:col-span-2 bg-[#131B2F] border border-white/5 rounded-[24px] p-8 shadow-lg shadow-black/20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Continue learning</h3>
            {/* FIXED: Routes to the new student courses library */}
            <Link href="/student/courses" className="text-sm font-medium text-violet-400 hover:text-violet-300">View all</Link>
          </div>

          <div className="space-y-2">
            {[
              { title: "Full-Stack React & TypeScript", lesson: "Lesson 14: Server functions", progress: "68%", color: "bg-blue-500" },
              { title: "System Design Deep Dive", lesson: "Lesson 8: Caching strategies", progress: "32%", color: "bg-fuchsia-500" },
              { title: "Applied Machine Learning", lesson: "Lesson 3: Regression basics", progress: "12%", color: "bg-emerald-500" },
            ].map((course, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl hover:bg-white/[0.02] transition-colors group border border-transparent hover:border-white/5">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shadow-inner">
                    <svg className="w-6 h-6 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                  </div>
                  <div className="flex-1 pr-4">
                    <h4 className="font-bold text-white text-base group-hover:text-violet-400 transition-colors line-clamp-1">{course.title}</h4>
                    <p className="text-xs text-slate-400 mt-1">{course.lesson}</p>
                    <div className="flex items-center gap-3 mt-3 max-w-sm">
                      <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className={`h-full ${course.color} rounded-full`} style={{ width: course.progress }}></div>
                      </div>
                      <span className="text-xs font-bold text-slate-300 w-8">{course.progress}</span>
                    </div>
                  </div>
                </div>
                {/* FIXED: Resume correctly goes to the classroom video player */}
                <Link href="/student/classroom" className="px-4 py-2 rounded-lg border border-white/10 text-xs font-bold text-white hover:bg-white/5 transition-colors hidden sm:block">
                  Resume
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Activity Chart (SVG Mock) */}
        <div className="bg-[#131B2F] border border-white/5 rounded-[24px] p-8 shadow-lg shadow-black/20 flex flex-col">
          <h3 className="text-lg font-bold text-white mb-6">Weekly activity</h3>
          <div className="flex-1 relative w-full h-full min-h-[200px] flex items-end pt-4">
             <div className="absolute inset-0 flex flex-col justify-between pb-8 z-0">
               <div className="w-full border-t border-white/5 border-dashed h-0"></div>
               <div className="w-full border-t border-white/5 border-dashed h-0"></div>
               <div className="w-full border-t border-white/5 border-dashed h-0"></div>
             </div>
             <div className="absolute inset-0 pb-8 z-10 w-full">
               <svg viewBox="0 0 400 150" className="w-full h-full overflow-visible preserve-aspect-ratio-none">
                 <defs>
                   <linearGradient id="gradientArea" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                     <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                   </linearGradient>
                 </defs>
                 <path d="M0,130 C40,110 80,40 120,60 C160,80 200,100 240,40 C280,-20 320,80 360,50 C380,35 400,20 400,20 L400,150 L0,150 Z" fill="url(#gradientArea)" />
                 <path d="M0,130 C40,110 80,40 120,60 C160,80 200,100 240,40 C280,-20 320,80 360,50 C380,35 400,20 400,20" fill="none" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                 <circle cx="120" cy="60" r="4" fill="#0B0F19" stroke="#8B5CF6" strokeWidth="2" />
                 <circle cx="240" cy="40" r="4" fill="#0B0F19" stroke="#8B5CF6" strokeWidth="2" />
                 <circle cx="360" cy="50" r="4" fill="#0B0F19" stroke="#8B5CF6" strokeWidth="2" />
               </svg>
             </div>
             <div className="absolute bottom-0 left-0 w-full flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-wider z-20">
               <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
             </div>
          </div>
        </div>
      </div>

      {/* --- BOTTOM SECTION: LIVE CLASSES & ASSIGNMENTS --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-12">
        
        {/* Upcoming Live Classes */}
        <div className="bg-[#131B2F] border border-white/5 rounded-[24px] p-8 shadow-lg shadow-black/20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Upcoming live classes
            </h3>
            {/* FIXED: Routes to Live Classes */}
            <Link href="/student/live" className="text-sm font-medium text-violet-400 hover:text-violet-300">View all</Link>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div>
                <h4 className="font-bold text-white mb-1">Live Q&A: React Server Components</h4>
                <p className="text-xs text-slate-400">Today • 6:00 PM • Aisha Verma</p>
              </div>
              <button className="px-4 py-2 rounded-lg bg-violet-600/20 text-violet-400 hover:bg-violet-600 hover:text-white text-xs font-bold transition-colors">
                Join
              </button>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div>
                <h4 className="font-bold text-white mb-1">Workshop: Design Critique</h4>
                <p className="text-xs text-slate-400">Tomorrow • 4:00 PM • Priya Nair</p>
              </div>
              <button className="px-4 py-2 rounded-lg bg-white/5 text-slate-300 hover:bg-white/10 text-xs font-bold transition-colors">
                RSVP
              </button>
            </div>
          </div>
        </div>

        {/* Assignments */}
        <div className="bg-[#131B2F] border border-white/5 rounded-[24px] p-8 shadow-lg shadow-black/20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Assignments</h3>
            {/* FIXED: Routes to Assignments */}
            <Link href="/student/assignments" className="text-sm font-medium text-violet-400 hover:text-violet-300">View all</Link>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div>
                <h4 className="font-bold text-white mb-1">Build a REST API</h4>
                <p className="text-xs text-slate-400">Full-Stack React • Due in 2 days</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                In progress
              </span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div>
                <h4 className="font-bold text-white mb-1">ML Regression Notebook</h4>
                <p className="text-xs text-slate-400">Applied Machine Learning • Due in 5 days</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/5 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                Not started
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}