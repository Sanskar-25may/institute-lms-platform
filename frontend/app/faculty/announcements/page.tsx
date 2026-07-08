export default function AnnouncementsPage() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <div>
        <h1 className="text-3xl font-extrabold text-txt-primary mb-2">Announcements</h1>
        <p className="text-txt-secondary font-medium">Broadcast updates to your enrolled students.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Compose Form */}
        <div className="lg:col-span-2 bg-[#131B2F] border border-bdr-soft rounded-[24px] shadow-lg p-8 h-max">
          <h3 className="text-lg font-bold text-txt-primary mb-6">New Announcement</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-txt-secondary mb-2 uppercase">Select Course Cohort</label>
              <select className="w-full bg-[#0B0F19] border border-bdr-soft rounded-xl px-4 py-3 text-sm text-txt-primary focus:outline-none focus:border-violet-500 transition-colors">
                <option>All Enrolled Students (15,690)</option>
                <option>Full-Stack React & TypeScript (12,480)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-txt-secondary mb-2 uppercase">Subject</label>
              <input type="text" placeholder="e.g. New module uploaded!" className="w-full bg-[#0B0F19] border border-bdr-soft rounded-xl px-4 py-3 text-txt-primary focus:outline-none focus:border-violet-500 transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold text-txt-secondary mb-2 uppercase">Message</label>
              <textarea rows={6} placeholder="Write your broadcast message..." className="w-full bg-[#0B0F19] border border-bdr-soft rounded-xl px-4 py-3 text-txt-primary focus:outline-none focus:border-violet-500 transition-colors resize-none"></textarea>
            </div>
            <button type="button" className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-txt-primary font-bold rounded-xl transition-all shadow-lg shadow-violet-900/50">
              Send Broadcast
            </button>
          </form>
        </div>

        {/* History */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="text-lg font-bold text-txt-primary mb-6">Recent Broadcasts</h3>
          <div className="bg-[#131B2F] border border-bdr-soft p-5 rounded-2xl">
            <span className="text-[10px] font-bold text-violet-400 uppercase tracking-wider mb-2 block">Full-Stack React • 3 Days Ago</span>
            <h4 className="font-bold text-txt-primary mb-2">Live Q&A Rescheduled</h4>
            <p className="text-sm text-txt-secondary line-clamp-2">Hi everyone, due to a scheduling conflict, our Thursday office hours will be moved to Friday at 4PM.</p>
          </div>
          <div className="bg-[#131B2F] border border-bdr-soft p-5 rounded-2xl">
            <span className="text-[10px] font-bold text-violet-400 uppercase tracking-wider mb-2 block">All Students • 2 Weeks Ago</span>
            <h4 className="font-bold text-txt-primary mb-2">Welcome to the new platform!</h4>
            <p className="text-sm text-txt-secondary line-clamp-2">We just rolled out the new dark mode UI and improved video player. Let me know what you think!</p>
          </div>
        </div>
      </div>
    </div>
  );
}