export default function AdminCoursesPage() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-txt-primary mb-2">Global Course Catalog</h1>
          <p className="text-txt-secondary font-medium">Monitor all published and drafted content across the platform.</p>
        </div>
      </div>

      <div className="bg-[#131B2F] border border-bdr-soft rounded-[24px] shadow-lg overflow-hidden p-8 text-center h-[400px] flex flex-col items-center justify-center">
        <svg className="w-16 h-16 text-slate-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
        <p className="text-lg font-bold text-txt-primary mb-2">Course Management Panel</p>
        <p className="text-txt-secondary max-w-md mx-auto">This section allows admins to unpublish, feature, or review course curriculum globally.</p>
      </div>
    </div>
  );
}