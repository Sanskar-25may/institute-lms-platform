import { getSiteContent } from "@/lib/cms";

export default async function AdminCoursesPage() {
  const cmsData = await getSiteContent("admin-courses");

  return (
    <div className="max-w-[1200px] mx-auto space-y-8 animate-fade-in-up pb-24">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="heading-font text-3xl font-extrabold mb-2">{cmsData?.heading || "Global Course Catalog"}</h1>
          <p className="text-txt-secondary font-medium">Monitor all published and drafted content across the platform.</p>
        </div>
      </div>

      <div className="border rounded-[24px] shadow-lg overflow-hidden p-8 text-center h-[400px] flex flex-col items-center justify-center" style={{ background: 'var(--bg-card)', borderColor: 'var(--border-soft)' }}>
        <svg className="w-16 h-16 mb-4" style={{ color: 'var(--text-tertiary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
        <p className="text-lg font-bold mb-2">Course Management Panel</p>
        <p className="max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>This section allows admins to unpublish, feature, or review course curriculum globally.</p>
      </div>
    </div>
  );
}