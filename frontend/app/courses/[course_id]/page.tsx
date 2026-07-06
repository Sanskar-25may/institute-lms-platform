import Link from "next/link";

// In Next.js 13/14 App Router, dynamic routes receive `params` as a prop.
export default function CourseDetailPage({ params }: { params: { course_id: string } }) {
  // TODO: In the backend phase, we will fetch the course data using params.course_id
  // const course = await getCourseById(params.course_id);

  return (
    <div className="min-h-screen bg-[#0B0F19] font-sans text-slate-300 selection:bg-violet-500/30 overflow-x-hidden">
      
      {/* --- UNIFIED NAVBAR --- */}
      <nav className="w-full border-b border-white/5 bg-[#0B0F19]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Lumina</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/courses" className="text-white font-bold">Courses</Link>
            <Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link>
          </div>

          <div className="flex items-center gap-4">
             {/* FIXED: Enroll button correctly points to auth */}
            <Link href="/auth" className="text-sm font-bold text-white bg-violet-600 hover:bg-violet-700 px-5 py-2.5 rounded-lg shadow-lg shadow-violet-900/50 transition-all">Sign In</Link>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative w-full border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#131B2F] to-[#0B0F19] z-0"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-violet-600/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-violet-500/10 text-violet-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-violet-500/20">Intermediate</span>
              <span className="flex items-center gap-1 text-xs font-bold text-amber-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                4.9 (12,480 ratings)
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
               Full-Stack React & TypeScript
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
              Master the entire modern web stack. Build production-ready applications with React 19, Next.js, TypeScript, and PostgreSQL.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md">
                AV
              </div>
              <div>
                <p className="text-sm font-bold text-white">Created by Aisha Verma</p>
                <p className="text-xs text-slate-400">Senior Software Engineer</p>
              </div>
            </div>
          </div>

          {/* Floating Checkout Card */}
          <div className="lg:justify-self-end w-full max-w-md bg-[#131B2F] border border-white/5 rounded-[24px] p-8 shadow-2xl relative">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <svg className="w-32 h-32 text-violet-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 7a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1H9a1 1 0 01-1-1V7z"></path></svg>
            </div>
            <div className="relative z-10">
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-white">$149</span>
              </div>
              
              {/* FIXED: Pointing to auth */}
              <Link href="/auth" className="w-full block text-center py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-violet-900/50 mb-4">
                Enroll Now
              </Link>
              <p className="text-xs text-center text-slate-500 mb-8">30-day money-back guarantee</p>
              
              <div className="space-y-4">
                <h4 className="font-bold text-white text-sm">This course includes:</h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex items-center gap-3"><svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> 42 hours of on-demand video</li>
                  <li className="flex items-center gap-3"><svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> 18 coding exercises</li>
                  <li className="flex items-center gap-3"><svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Access to private Discord community</li>
                  <li className="flex items-center gap-3"><svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Certificate of completion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- CONTENT SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">What you&apos;ll learn</h2>
            <div className="bg-[#131B2F] border border-white/5 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-3 text-sm text-slate-300">
                <svg className="w-5 h-5 text-violet-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Build production-ready React applications from scratch.</span>
              </div>
              <div className="flex gap-3 text-sm text-slate-300">
                <svg className="w-5 h-5 text-violet-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Master TypeScript for strong typing and fewer bugs.</span>
              </div>
              <div className="flex gap-3 text-sm text-slate-300">
                <svg className="w-5 h-5 text-violet-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Implement secure user authentication with JWT.</span>
              </div>
              <div className="flex gap-3 text-sm text-slate-300">
                <svg className="w-5 h-5 text-violet-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Deploy full-stack apps to Vercel and AWS.</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Course Curriculum</h2>
            <div className="space-y-4">
              {[
                { title: "Module 1: Introduction & Setup", lessons: "4 lessons", time: "45m" },
                { title: "Module 2: React Core Concepts", lessons: "8 lessons", time: "2h 15m" },
                { title: "Module 3: Advanced Hooks & State", lessons: "6 lessons", time: "3h 40m" },
                { title: "Module 4: TypeScript Integration", lessons: "10 lessons", time: "4h 20m" }
              ].map((mod, i) => (
                <div key={i} className="bg-[#131B2F] border border-white/5 rounded-xl p-6 flex items-center justify-between cursor-pointer hover:border-violet-500/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    <h4 className="font-bold text-white">{mod.title}</h4>
                  </div>
                  <div className="text-sm font-medium text-slate-500">
                    {mod.lessons} • {mod.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}