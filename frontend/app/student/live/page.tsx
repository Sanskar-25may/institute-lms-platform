export default function LiveClassesPage() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2">Live Classes & Cohorts</h1>
          <p className="text-slate-400 font-medium">Join upcoming sessions and office hours.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Session */}
        <div className="bg-gradient-to-br from-[#131B2F] to-[#0B0F19] border border-violet-500/30 rounded-[24px] shadow-lg shadow-violet-900/20 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-6">
            <span className="flex items-center gap-2 text-xs font-bold text-rose-400 bg-rose-500/10 px-3 py-1.5 rounded-full uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              Live Now
            </span>
          </div>
          <div className="p-8">
            <p className="text-sm font-bold text-violet-400 mb-2 uppercase tracking-wider">Office Hours</p>
            <h2 className="text-2xl font-extrabold text-white mb-4">React Server Components Q&A</h2>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold text-sm">AV</div>
              <div>
                <p className="text-sm font-bold text-white">Aisha Verma</p>
                <p className="text-xs text-slate-400">Lead Instructor</p>
              </div>
            </div>
            <button className="w-full py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              Join Zoom Meeting
            </button>
          </div>
        </div>

        {/* Upcoming Session */}
        <div className="bg-[#131B2F] border border-white/5 rounded-[24px] shadow-lg p-8">
          <p className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wider">Upcoming Workshop</p>
          <h2 className="text-2xl font-extrabold text-white mb-4">Design Critique Session</h2>
          <div className="flex items-center gap-6 mb-8 text-slate-300 font-medium">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              Tomorrow
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              4:00 PM IST
            </div>
          </div>
          <button className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all">
            RSVP
          </button>
        </div>
      </div>
    </div>
  );
}