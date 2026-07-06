export default function MessagesPage() {
  return (
    <div className="max-w-[1200px] mx-auto animate-in fade-in duration-500 h-[calc(100vh-140px)] flex bg-[#131B2F] border border-white/5 rounded-[24px] overflow-hidden">
      <div className="w-80 border-r border-white/5 p-6 flex flex-col hidden md:flex">
        <h2 className="text-xl font-bold text-white mb-6">Messages</h2>
        <div className="flex-1 overflow-y-auto space-y-2">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10 cursor-pointer">
            <h4 className="font-bold text-white text-sm">Instructor Aisha</h4>
            <p className="text-xs text-slate-400 mt-1 truncate">Your latest assignment looked great!</p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-[#0B0F19]">
        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
        </div>
        <h3 className="text-xl font-bold text-white">Select a conversation</h3>
      </div>
    </div>
  );
}