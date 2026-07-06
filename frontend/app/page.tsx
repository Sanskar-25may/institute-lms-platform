import Link from "next/link";

export default function LuminaLandingPage() {
  return (
    <div className="min-h-screen bg-[#0B0F19] font-sans text-slate-300 selection:bg-violet-500/30 overflow-x-hidden">
      
      {/* --- TOP NAVBAR --- */}
      <nav className="w-full border-b border-white/5 bg-[#0B0F19]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Lumina</span>
          </Link>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
            <Link href="/" className="text-white">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link>
            <Link href="/placements" className="hover:text-white transition-colors">Placements</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/feedback" className="hover:text-white transition-colors">Feedback</Link>
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-4">
            <Link href="/auth" className="hidden md:block text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Sign In
            </Link>
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-white cursor-pointer">
              SG
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          New AI-guided learning paths, live now
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
          Learn without limits. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Build without doubt.</span>
        </h1>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Lumina is a modern learning platform with expert-taught courses, live cohorts, and everything you need to master a new skill and land the role you want.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/auth" className="px-8 py-3.5 rounded-lg bg-violet-600 text-white text-sm font-bold hover:bg-violet-700 transition-colors flex items-center gap-2">
            Start learning free <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </Link>
          <button className="px-8 py-3.5 rounded-lg bg-white/5 text-white text-sm font-bold hover:bg-white/10 transition-colors border border-white/10">
            How it works
          </button>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8 text-xs font-medium text-slate-500">
          <div className="flex items-center gap-1.5"><svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> No credit card</div>
          <div className="flex items-center gap-1.5"><svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Cancel anytime</div>
          <div className="flex items-center gap-1.5"><svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> 7-day trial</div>
        </div>
      </header>

      {/* --- STATS SECTION --- */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5 text-center">
          <div>
            <div className="text-4xl font-extrabold text-violet-400 mb-2">180K+</div>
            <div className="text-sm font-medium text-slate-400">Active learners</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-violet-400 mb-2">1,200+</div>
            <div className="text-sm font-medium text-slate-400">Expert Instructors</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-violet-400 mb-2">3,500+</div>
            <div className="text-sm font-medium text-slate-400">Courses & tracks</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-violet-400 mb-2">94%</div>
            <div className="text-sm font-medium text-slate-400">Placement rate</div>
          </div>
        </div>
      </section>

      {/* --- EXPLORE BY CATEGORY --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-10">
          <span className="text-xs font-bold tracking-wider text-violet-500 uppercase bg-violet-500/10 px-3 py-1 rounded-full">Browse</span>
          <h2 className="text-3xl font-extrabold text-white mt-4 mb-2">Explore by category</h2>
          <p className="text-slate-400 text-sm">Pick a track and start learning today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Category Cards */}
          {[
            { name: "Web Development", courses: "128 courses", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", color: "text-blue-400", bg: "bg-blue-400/10" },
            { name: "Data Science", courses: "84 courses", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4", color: "text-emerald-400", bg: "bg-emerald-400/10" },
            { name: "Design", courses: "62 courses", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01", color: "text-pink-400", bg: "bg-pink-400/10" },
            { name: "Business", courses: "97 courses", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", color: "text-amber-400", bg: "bg-amber-400/10" },
            { name: "AI & ML", courses: "71 courses", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", color: "text-violet-400", bg: "bg-violet-400/10" },
            { name: "Marketing", courses: "45 courses", icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z", color: "text-rose-400", bg: "bg-rose-400/10" },
          ].map((cat, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${cat.bg} ${cat.color}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={cat.icon}></path></svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white group-hover:text-violet-400 transition-colors">{cat.name}</h3>
                <p className="text-xs text-slate-400">{cat.courses}</p>
              </div>
              <svg className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
          ))}
        </div>
      </section>

      {/* --- FEATURED COURSES --- */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold tracking-wider text-violet-500 uppercase bg-violet-500/10 px-3 py-1 rounded-full">Trending</span>
            <h2 className="text-3xl font-extrabold text-white mt-4">Featured courses this week</h2>
          </div>
          <button className="text-sm font-medium text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
            View all <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Course Card 1 */}
          <div className="bg-[#131B2F] rounded-2xl border border-white/5 overflow-hidden hover:border-violet-500/50 transition-colors group cursor-pointer">
            <div className="h-48 relative bg-gradient-to-br from-violet-600 to-indigo-900 p-4 flex flex-col justify-between">
              <div className="self-start px-2 py-1 bg-black/30 backdrop-blur-sm rounded text-[10px] font-bold text-white uppercase tracking-wide">Intermediate</div>
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 self-end group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[11px] font-medium text-slate-400 mb-1">Web • By Aisha Verma</p>
              <h3 className="text-lg font-bold text-white mb-4 line-clamp-1">Full-Stack React & TypeScript</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-slate-300 font-medium">
                  <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  4.9 <span className="text-slate-500">(12,480)</span>
                </div>
                <span className="font-bold text-white">$49</span>
              </div>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="bg-[#131B2F] rounded-2xl border border-white/5 overflow-hidden hover:border-violet-500/50 transition-colors group cursor-pointer">
            <div className="h-48 relative bg-gradient-to-br from-indigo-600 to-blue-900 p-4 flex flex-col justify-between">
              <div className="self-start px-2 py-1 bg-black/30 backdrop-blur-sm rounded text-[10px] font-bold text-white uppercase tracking-wide">Advanced</div>
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 self-end group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[11px] font-medium text-slate-400 mb-1">AI • By Marcus Chen</p>
              <h3 className="text-lg font-bold text-white mb-4 line-clamp-1">Applied Machine Learning</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-slate-300 font-medium">
                  <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  4.8 <span className="text-slate-500">(8,903)</span>
                </div>
                <span className="font-bold text-white">$69</span>
              </div>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="bg-[#131B2F] rounded-2xl border border-white/5 overflow-hidden hover:border-violet-500/50 transition-colors group cursor-pointer">
            <div className="h-48 relative bg-gradient-to-br from-fuchsia-600 to-purple-900 p-4 flex flex-col justify-between">
              <div className="self-start px-2 py-1 bg-black/30 backdrop-blur-sm rounded text-[10px] font-bold text-white uppercase tracking-wide">Beginner</div>
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 self-end group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[11px] font-medium text-slate-400 mb-1">Design • By Priya Nair</p>
              <h3 className="text-lg font-bold text-white mb-4 line-clamp-1">UI/UX Design Foundations</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-slate-300 font-medium">
                  <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  4.9 <span className="text-slate-500">(15,600)</span>
                </div>
                <span className="font-bold text-white">$39</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}