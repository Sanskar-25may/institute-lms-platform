export default function AnalyticsPage() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2">Revenue Analytics</h1>
        <p className="text-slate-400 font-medium">Track your earnings and course performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#131B2F] border border-white/5 p-6 rounded-2xl shadow-lg">
          <p className="text-sm font-medium text-slate-400 mb-2">Gross Revenue (YTD)</p>
          <h3 className="text-4xl font-extrabold text-emerald-400">$768.4K</h3>
        </div>
        <div className="bg-[#131B2F] border border-white/5 p-6 rounded-2xl shadow-lg">
          <p className="text-sm font-medium text-slate-400 mb-2">Next Payout (Expected)</p>
          <h3 className="text-4xl font-extrabold text-white">$12,450</h3>
        </div>
        <div className="bg-[#131B2F] border border-white/5 p-6 rounded-2xl shadow-lg">
          <p className="text-sm font-medium text-slate-400 mb-2">Conversion Rate</p>
          <h3 className="text-4xl font-extrabold text-white">4.2%</h3>
        </div>
      </div>

      <div className="bg-[#131B2F] border border-white/5 rounded-[24px] p-8 shadow-lg">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-lg font-bold text-white">Sales & Enrollments (Last 30 Days)</h3>
          <select className="bg-[#0B0F19] border border-white/10 text-white text-sm rounded-lg px-3 py-2 outline-none">
            <option>All Courses</option>
            <option>Full-Stack React</option>
          </select>
        </div>
        
        {/* Mock Area Chart */}
        <div className="w-full h-64 relative flex items-end pt-4">
          <div className="absolute inset-0 flex flex-col justify-between pb-8 z-0">
            <div className="w-full border-t border-white/5 border-dashed"></div>
            <div className="w-full border-t border-white/5 border-dashed"></div>
            <div className="w-full border-t border-white/5 border-dashed"></div>
            <div className="w-full border-t border-white/5 border-dashed"></div>
          </div>
          <div className="absolute inset-0 pb-8 z-10">
            <svg viewBox="0 0 1000 200" className="w-full h-full preserve-aspect-ratio-none">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,180 C100,150 200,80 300,100 C400,120 500,60 600,80 C700,100 800,40 900,50 C950,55 1000,30 1000,30 L1000,200 L0,200 Z" fill="url(#chartGradient)" />
              <path d="M0,180 C100,150 200,80 300,100 C400,120 500,60 600,80 C700,100 800,40 900,50 C950,55 1000,30 1000,30" fill="none" stroke="#10B981" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}