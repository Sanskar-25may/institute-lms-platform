"use client";

export default function SettingsPage() {
  return (
    <div className="max-w-[1000px] mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      <h1 className="text-3xl font-extrabold text-white mb-8">Account Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Settings Nav */}
        <div className="md:col-span-1 space-y-2">
          <button className="w-full text-left px-4 py-3 bg-violet-600/10 text-violet-400 font-bold rounded-xl border border-violet-500/20 transition-colors">Profile Details</button>
          <button className="w-full text-left px-4 py-3 text-slate-400 hover:bg-white/[0.02] hover:text-white font-medium rounded-xl transition-colors">Security & Password</button>
          <button className="w-full text-left px-4 py-3 text-slate-400 hover:bg-white/[0.02] hover:text-white font-medium rounded-xl transition-colors">Notifications</button>
          <button className="w-full text-left px-4 py-3 text-slate-400 hover:bg-white/[0.02] hover:text-white font-medium rounded-xl transition-colors">Billing</button>
        </div>

        {/* Settings Form */}
        <div className="md:col-span-2 bg-[#131B2F] border border-white/5 rounded-[24px] shadow-lg p-8">
          <div className="flex items-center gap-6 mb-8 border-b border-white/5 pb-8">
            <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold text-2xl shadow-md border border-white/10 relative group cursor-pointer">
              SG
              <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
            </div>
            <div>
              <button className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-sm font-bold rounded-lg border border-white/10 transition-colors mb-2">Upload new picture</button>
              <p className="text-xs text-slate-500">JPG, GIF or PNG. Max size of 800K</p>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">First Name</label>
                <input type="text" defaultValue="Sanskar" className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Last Name</label>
                <input type="text" defaultValue="Gupta" className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Email Address</label>
              <input type="email" defaultValue="sam1234@gmail.com" className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors" />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Bio</label>
              <textarea rows={4} className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors resize-none" placeholder="Tell us a little about yourself..."></textarea>
            </div>

            <div className="pt-6 border-t border-white/5 flex justify-end gap-3">
              <button type="button" className="px-6 py-3 bg-transparent text-slate-300 text-sm font-bold rounded-xl hover:text-white transition-colors">Cancel</button>
              <button type="submit" className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white text-sm font-bold rounded-xl shadow-lg shadow-violet-900/50 transition-all">Save Changes</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}