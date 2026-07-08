export default function AdminSettingsPage() {
  return (
    <div className="max-w-[1000px] mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <h1 className="text-3xl font-extrabold text-txt-primary mb-8">Platform Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-2">
          <button className="w-full text-left px-4 py-3 bg-violet-600/10 text-violet-400 font-bold rounded-xl border border-violet-500/20 transition-colors">General Info</button>
          <button className="w-full text-left px-4 py-3 text-txt-secondary hover:bg-white/[0.02] hover:text-txt-primary font-medium rounded-xl transition-colors">Payment Gateways</button>
          <button className="w-full text-left px-4 py-3 text-txt-secondary hover:bg-white/[0.02] hover:text-txt-primary font-medium rounded-xl transition-colors">Email & Notifications</button>
          <button className="w-full text-left px-4 py-3 text-txt-secondary hover:bg-white/[0.02] hover:text-txt-primary font-medium rounded-xl transition-colors">API Keys</button>
        </div>

        <div className="md:col-span-2 bg-[#131B2F] border border-bdr-soft rounded-[24px] shadow-lg p-8">
          <h2 className="text-xl font-bold text-txt-primary mb-6 border-b border-bdr-soft pb-4">General Platform Info</h2>
          
          <form className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-txt-secondary mb-2 uppercase">Platform Name</label>
              <input type="text" defaultValue="Aushutosh" className="w-full bg-[#0B0F19] border border-bdr-soft rounded-xl px-4 py-3 text-txt-primary focus:outline-none focus:border-violet-500 transition-colors" />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-txt-secondary mb-2 uppercase">Support Email</label>
                <input type="email" defaultValue="support@aushutosh.io" className="w-full bg-[#0B0F19] border border-bdr-soft rounded-xl px-4 py-3 text-txt-primary focus:outline-none focus:border-violet-500 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-txt-secondary mb-2 uppercase">Global Currency</label>
                <select className="w-full bg-[#0B0F19] border border-bdr-soft rounded-xl px-4 py-3 text-txt-primary focus:outline-none focus:border-violet-500 transition-colors">
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="INR">INR (₹)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-txt-secondary mb-2 uppercase">Platform Fee (%)</label>
              <input type="number" defaultValue="20" className="w-full bg-[#0B0F19] border border-bdr-soft rounded-xl px-4 py-3 text-txt-primary focus:outline-none focus:border-violet-500 transition-colors" />
              <p className="text-xs text-txt-tertiary mt-2">The percentage deducted from faculty sales before payouts.</p>
            </div>
            
            <div className="pt-6 border-t border-bdr-soft flex justify-end gap-3">
              <button type="button" className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-txt-primary text-sm font-bold rounded-xl shadow-lg shadow-violet-900/50 transition-all">Save Global Settings</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}