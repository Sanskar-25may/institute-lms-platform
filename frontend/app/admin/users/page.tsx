import Link from "next/link";

export default function AdminUsersHub() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2">User Management</h1>
        <p className="text-slate-400 font-medium">Select a user role to view, manage, and control platform profiles.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        
        {/* --- STUDENTS CARD --- */}
        <Link href="/admin/users/students" className="bg-[#131B2F] border border-white/5 rounded-[32px] p-10 hover:border-blue-500/50 transition-all group cursor-pointer shadow-lg relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="w-24 h-24 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          </div>
          
          <h2 className="text-3xl font-extrabold text-white mb-3 group-hover:text-blue-400 transition-colors">Students</h2>
          <p className="text-slate-400 mb-8 max-w-sm">Manage enrollments, view learning progress, and handle account settings for all learners.</p>
          
          <div className="mt-auto inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-6 py-3 rounded-xl font-bold transition-colors group-hover:bg-blue-600 group-hover:text-white">
            Manage 184,392 Students
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </div>
        </Link>

        {/* --- TEACHERS CARD --- */}
        <Link href="/admin/users/teachers" className="bg-[#131B2F] border border-white/5 rounded-[32px] p-10 hover:border-fuchsia-500/50 transition-all group cursor-pointer shadow-lg relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-500 to-pink-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="w-24 h-24 rounded-full bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </div>
          
          <h2 className="text-3xl font-extrabold text-white mb-3 group-hover:text-fuchsia-400 transition-colors">Teachers</h2>
          <p className="text-slate-400 mb-8 max-w-sm">Review instructor applications, manage payouts, and control course publishing rights.</p>
          
          <div className="mt-auto inline-flex items-center gap-2 bg-fuchsia-500/10 text-fuchsia-400 px-6 py-3 rounded-xl font-bold transition-colors group-hover:bg-fuchsia-600 group-hover:text-white">
            Manage 1,204 Teachers
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </div>
        </Link>

      </div>
    </div>
  );
}