export default function CalendarPage() {
  return (
    <div className="max-w-[1200px] mx-auto animate-in fade-in duration-500">
      <h1 className="text-3xl font-extrabold text-white mb-8">Calendar</h1>
      <div className="bg-[#131B2F] border border-white/5 rounded-[24px] shadow-lg p-12 text-center h-[500px] flex flex-col items-center justify-center">
        <svg className="w-16 h-16 text-slate-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        <p className="text-lg font-bold text-white mb-2">Calendar Integration Coming Soon</p>
        <p className="text-slate-400">Sync with Google Calendar feature is currently under development.</p>
      </div>
    </div>
  );
}