import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F19] font-sans text-slate-300 selection:bg-violet-500/30 overflow-x-hidden">
      
      {/* --- UNIFIED NAVBAR --- */}
      <nav className="w-full border-b border-white/5 bg-[#0B0F19]/80 backdrop-blur-md fixed top-0 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-600/20">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Lumina</span>
          </Link>

          {/* FIXED: Real Links instead of dead anchors */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
            <Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/feedback" className="hover:text-white transition-colors">Feedback</Link>
          </div>

          <div className="flex items-center gap-4">
             {/* FIXED: Auth routing */}
            <Link href="/auth" className="hidden md:block text-sm font-medium text-slate-300 hover:text-white transition-colors">Log in</Link>
            <Link href="/auth" className="text-sm font-bold text-white bg-violet-600 hover:bg-violet-700 px-5 py-2.5 rounded-lg shadow-lg shadow-violet-900/50 transition-all">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-violet-400 uppercase tracking-wider mb-8">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
            The Future of Education
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight max-w-4xl mx-auto">
            Learn exactly what you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">build the future.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop watching outdated tutorials. Lumina provides interactive, project-based engineering courses taught by the industry's top 1%.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/courses" className="w-full sm:w-auto px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-violet-900/50 text-lg flex items-center justify-center gap-2">
              Explore Courses
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
            <Link href="/auth" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all text-lg flex items-center justify-center">
              Start Free Trial
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col items-center">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">Trusted by engineers at</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale">
              {/* Using generic placeholders for logos to remain clean */}
              <div className="text-xl font-extrabold text-white">Google</div>
              <div className="text-xl font-extrabold text-white">Meta</div>
              <div className="text-xl font-extrabold text-white">Stripe</div>
              <div className="text-xl font-extrabold text-white">Netflix</div>
              <div className="text-xl font-extrabold text-white">Vercel</div>
            </div>
          </div>
        </div>
      </main>

      {/* --- FEATURE SECTION --- */}
      <section className="bg-[#131B2F] border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Project-Based Learning</h3>
            <p className="text-slate-400 leading-relaxed">Build actual SaaS products, not just &apos;Hello World&apos; apps. Your portfolio will thank you.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Live Cohorts & Office Hours</h3>
            <p className="text-slate-400 leading-relaxed">Don&apos;t get stuck alone. Join weekly live sessions and get unblocked by senior engineers.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Industry-Recognized Certificates</h3>
            <p className="text-slate-400 leading-relaxed">Earn verified credentials that hiring managers actually respect and look for.</p>
          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/5 text-center bg-[#0B0F19]">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <span className="text-lg font-bold text-white">Lumina</span>
        </div>
        <p className="text-sm text-slate-500">© 2026 Lumina Education. All rights reserved.</p>
      </footer>
    </div>
  );
}