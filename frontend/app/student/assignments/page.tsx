"use client";

export default function AssignmentsPage() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2">Assignments</h1>
          <p className="text-slate-400 font-medium">Keep track of your upcoming deadlines.</p>
        </div>
      </div>

      <div className="bg-[#131B2F] border border-white/5 rounded-[24px] shadow-lg p-8">
        <div className="flex items-center gap-6 mb-8 border-b border-white/5 pb-4">
          <button className="text-violet-400 font-bold border-b-2 border-violet-500 pb-4 -mb-[18px]">To Do (2)</button>
          <button className="text-slate-500 font-bold hover:text-slate-300 pb-4 -mb-[18px]">Completed (14)</button>
        </div>

        <div className="space-y-4">
          {/* Assignment 1 */}
          <div className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 transition-colors group">
            <div className="flex items-start gap-4 mb-4 md:mb-0">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-violet-400 transition-colors">Build a REST API</h3>
                <p className="text-sm text-slate-400 mt-1">Full-Stack React & TypeScript</p>
                <div className="flex items-center gap-2 mt-3 text-xs font-bold">
                  <span className="bg-rose-500/10 text-rose-400 px-2 py-1 rounded-md">Due in 2 days</span>
                  <span className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded-md">In Progress</span>
                </div>
              </div>
            </div>
            <button className="w-full md:w-auto px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-violet-900/50">
              Continue Work
            </button>
          </div>

          {/* Assignment 2 */}
          <div className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 transition-colors group">
            <div className="flex items-start gap-4 mb-4 md:mb-0">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-violet-400 transition-colors">ML Regression Notebook</h3>
                <p className="text-sm text-slate-400 mt-1">Applied Machine Learning</p>
                <div className="flex items-center gap-2 mt-3 text-xs font-bold">
                  <span className="bg-amber-500/10 text-amber-400 px-2 py-1 rounded-md">Due in 5 days</span>
                  <span className="bg-white/5 text-slate-400 px-2 py-1 rounded-md">Not Started</span>
                </div>
              </div>
            </div>
            <button className="w-full md:w-auto px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all">
              Start Assignment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}