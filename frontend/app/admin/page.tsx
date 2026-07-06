"use client";

export default function AdminOverview() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      
      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#131B2F] border border-white/5 p-6 rounded-2xl shadow-lg">
          <p className="text-sm font-medium text-slate-400 mb-2">Total users</p>
          <div className="flex items-end justify-between">
            <h3 className="text-4xl font-extrabold text-white">184,392</h3>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">+2,405 this week</span>
          </div>
        </div>
        <div className="bg-[#131B2F] border border-white/5 p-6 rounded-2xl shadow-lg">
          <p className="text-sm font-medium text-slate-400 mb-2">Active courses</p>
          <div className="flex items-end justify-between">
            <h3 className="text-4xl font-extrabold text-white">3,512</h3>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">+18</span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-violet-900/40 to-fuchsia-900/20 border border-violet-500/20 p-6 rounded-2xl shadow-lg">
          <p className="text-sm font-medium text-violet-200 mb-2">Total revenue</p>
          <h3 className="text-4xl font-extrabold text-white">$1.18M</h3>
        </div>
        <div className="bg-[#131B2F] border border-white/5 p-6 rounded-2xl shadow-lg">
          <p className="text-sm font-medium text-slate-400 mb-2">System uptime</p>
          <h3 className="text-4xl font-extrabold text-emerald-400">99.98%</h3>
        </div>
      </div>

      {/* Middle Section: Chart & Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-[#131B2F] border border-white/5 rounded-[24px] p-8 shadow-lg flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Revenue (6 mo)</h3>
            <span className="text-xs font-bold text-slate-400 uppercase">USD</span>
          </div>
          <div className="flex-1 relative w-full h-full min-h-[250px] flex items-end pt-4">
             <div className="absolute inset-0 flex flex-col justify-between pb-8 z-0">
               <div className="w-full border-t border-white/5 border-dashed h-0 flex items-center"><span className="absolute -left-6 text-[10px] text-slate-500">$50k</span></div>
               <div className="w-full border-t border-white/5 border-dashed h-0 flex items-center"><span className="absolute -left-6 text-[10px] text-slate-500">$40k</span></div>
               <div className="w-full border-t border-white/5 border-dashed h-0 flex items-center"><span className="absolute -left-6 text-[10px] text-slate-500">$30k</span></div>
               <div className="w-full border-t border-white/5 border-dashed h-0 flex items-center"><span className="absolute -left-6 text-[10px] text-slate-500">$20k</span></div>
             </div>
             <div className="absolute inset-0 pb-8 z-10 w-full ml-4">
               <svg viewBox="0 0 500 200" className="w-full h-full overflow-visible preserve-aspect-ratio-none">
                 <path d="M0,150 L100,140 L200,100 L300,110 L400,60 L500,20" fill="none" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                 <circle cx="0" cy="150" r="4" fill="#0B0F19" stroke="#8B5CF6" strokeWidth="2" />
                 <circle cx="100" cy="140" r="4" fill="#0B0F19" stroke="#8B5CF6" strokeWidth="2" />
                 <circle cx="200" cy="100" r="4" fill="#0B0F19" stroke="#8B5CF6" strokeWidth="2" />
                 <circle cx="300" cy="110" r="4" fill="#0B0F19" stroke="#8B5CF6" strokeWidth="2" />
                 <circle cx="400" cy="60" r="4" fill="#0B0F19" stroke="#8B5CF6" strokeWidth="2" />
                 <circle cx="500" cy="20" r="4" fill="#8B5CF6" />
               </svg>
             </div>
             <div className="absolute bottom-0 left-4 w-full flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-wider z-20">
               <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
             </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-[#131B2F] border border-white/5 rounded-[24px] p-8 shadow-lg">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
            Recent activity
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0">AV</div>
              <div>
                <p className="text-sm text-slate-300"><span className="font-bold text-white">Aisha Verma</span> published a new course</p>
                <p className="text-xs text-slate-500 mt-1">2h ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">SJ</div>
              <div>
                <p className="text-sm text-slate-300"><span className="font-bold text-white">Sarah Jenkins</span> started a 7-day trial</p>
                <p className="text-xs text-slate-500 mt-1">4h ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0">DA</div>
              <div>
                <p className="text-sm text-slate-300"><span className="font-bold text-white">Diego Alvarez</span> graded 12 submissions</p>
                <p className="text-xs text-slate-500 mt-1">5h ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">$</div>
              <div>
                <p className="text-sm text-slate-300">Payments processed <span className="font-bold text-emerald-400">$12.4K</span> in orders</p>
                <p className="text-xs text-slate-500 mt-1">6h ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <p className="text-sm text-slate-300"><span className="font-bold text-white">System</span> auto-backup completed</p>
                <p className="text-xs text-slate-500 mt-1">12h ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}