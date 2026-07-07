export default function ReportsPage() {
  return (
    <div className="space-y-8 pb-20">
       <div>
          <h1 className="heading-font text-3xl font-bold mb-2">Financial Reports</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Export and view platform earnings.</p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-[24px] flex flex-col justify-between" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-soft)' }}>
             <div>
                <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center mb-4">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 className="font-bold text-lg mb-1">Monthly Revenue</h3>
                <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>Export CSV report for February 2024</p>
             </div>
             <button className="btn-secondary w-full py-2 rounded-lg text-sm font-bold">Download CSV</button>
          </div>
          
          <div className="p-6 rounded-[24px] flex flex-col justify-between" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-soft)' }}>
             <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                </div>
                <h3 className="font-bold text-lg mb-1">Payouts</h3>
                <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>Instructor payout distribution report</p>
             </div>
             <button className="btn-secondary w-full py-2 rounded-lg text-sm font-bold">Download CSV</button>
          </div>
       </div>
    </div>
  );
}
