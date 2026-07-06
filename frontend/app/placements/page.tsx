import Link from "next/link";

export default function PlacementsPage() {
  const partners = [
    { name: 'Google', offers: '148 offers to date', salary: '$160K', bg: 'bg-blue-500/10', color: 'text-blue-500', initial: 'G' },
    { name: 'Microsoft', offers: '132 offers to date', salary: '$152K', bg: 'bg-emerald-500/10', color: 'text-emerald-500', initial: 'M' },
    { name: 'Amazon', offers: '210 offers to date', salary: '$166K', bg: 'bg-amber-500/10', color: 'text-amber-500', initial: 'A' },
    { name: 'Meta', offers: '94 offers to date', salary: '$195K', bg: 'bg-blue-600/10', color: 'text-blue-600', initial: 'M' },
    { name: 'Stripe', offers: '46 offers to date', salary: '$210K', bg: 'bg-indigo-500/10', color: 'text-indigo-500', initial: 'S' },
    { name: 'Shopify', offers: '68 offers to date', salary: '$135K', bg: 'bg-green-500/10', color: 'text-green-500', initial: 'S' },
    { name: 'Figma', offers: '31 offers to date', salary: '$188K', bg: 'bg-pink-500/10', color: 'text-pink-500', initial: 'F' },
    { name: 'Notion', offers: '22 offers to date', salary: '$175K', bg: 'bg-slate-100/10', color: 'text-slate-100', initial: 'N' }
  ];

  const stories = [
    { name: 'Rishi Singh', role: 'SDE III @ Stripe', bump: '+$80K', year: "'25", initial: 'AR', color: 'from-blue-400 to-indigo-500' },
    { name: 'Sanskar Gupta', role: 'AI Founder @ MedAI Tech', bump: 'Funded', year: "'26", initial: 'SG', color: 'from-violet-400 to-fuchsia-500' },
    { name: 'Sofia Martinez', role: 'Product Designer @ Figma', bump: '+$65K', year: "'25", initial: 'SM', color: 'from-amber-400 to-orange-500' },
    { name: 'Palak Gupta', role: 'Analyst @ SSCBS', bump: '+$45K', year: "'26", initial: 'S', color: 'from-sky-400 to-blue-500' },
    { name: 'Mohammad Fahad Siddiqui', role: 'Growth @ Notion', bump: '+$55K', year: "'24", initial: 'FA', color: 'from-rose-400 to-red-500' },
    { name: 'Arya Jaiswal', role: 'SDE @ Microsoft', bump: '+$90K', year: "'26", initial: 'HO', color: 'from-emerald-400 to-teal-500' }
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] font-sans text-slate-300 selection:bg-violet-500/30 overflow-x-hidden pb-24">
      
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
            <Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link>
            <Link href="/placements" className="text-white">Placements</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/feedback" className="hover:text-white transition-colors">Feedback</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/auth" className="hidden md:block text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Sign In
            </Link>
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-white cursor-pointer hover:bg-slate-700 transition-colors">
              SG
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold tracking-wider text-slate-400 uppercase mb-8">
          Career outcomes
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          Our grads work at <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">top companies.</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          94% placement rate. Verified by hiring partners. Backed by real offer letters.
        </p>
      </header>

      {/* --- HIGH-LEVEL STATS --- */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-[#131B2F] border border-white/5 rounded-3xl p-8 flex flex-col justify-center">
            <p className="text-sm font-medium text-slate-400 mb-2">Total offers</p>
            <p className="text-4xl font-extrabold text-white">751+</p>
            <p className="text-xs font-bold text-emerald-400 mt-2">+12% YoY</p>
          </div>
          <div className="bg-[#131B2F] border border-white/5 rounded-3xl p-8 flex flex-col justify-center">
            <p className="text-sm font-medium text-slate-400 mb-2">Hiring partners</p>
            <p className="text-4xl font-extrabold text-white">500+</p>
            <p className="text-xs font-bold text-emerald-400 mt-2">Active network</p>
          </div>
          <div className="bg-gradient-to-br from-violet-900/40 to-fuchsia-900/20 border border-violet-500/20 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <svg className="w-16 h-16 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <p className="text-sm font-medium text-violet-200 mb-2 relative z-10">Avg. package</p>
            <p className="text-4xl font-extrabold text-white relative z-10">$142K</p>
            <p className="text-xs font-bold text-violet-300 mt-2 relative z-10">Top 10% average</p>
          </div>
          <div className="bg-[#131B2F] border border-white/5 rounded-3xl p-8 flex flex-col justify-center">
            <p className="text-sm font-medium text-slate-400 mb-2">Placement rate</p>
            <p className="text-4xl font-extrabold text-white">94%</p>
            <p className="text-xs font-bold text-emerald-400 mt-2">Within 6 months</p>
          </div>
        </div>
      </section>

      {/* --- TOP HIRING PARTNERS --- */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-white mb-8">Top hiring partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:bg-white/[0.05] transition-colors relative">
              <div className="absolute top-6 right-6 text-xs font-bold text-slate-300 bg-white/10 px-2 py-1 rounded">
                {partner.salary}
              </div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-xl mb-6 ${partner.bg} ${partner.color}`}>
                {partner.initial}
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{partner.name}</h3>
              <p className="text-xs text-slate-400">{partner.offers}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- RECENT SUCCESS STORIES --- */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Recent success stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <div key={i} className="bg-[#131B2F] border border-white/5 p-6 rounded-2xl flex items-center gap-4 hover:border-violet-500/30 transition-colors cursor-pointer group">
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${story.color} flex items-center justify-center shrink-0`}>
                <span className="text-white font-bold text-sm tracking-wide">{story.initial}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-bold truncate group-hover:text-violet-400 transition-colors">{story.name}</h3>
                <p className="text-xs text-slate-400 truncate mt-0.5">{story.role}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">
                    {story.bump}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 bg-white/5 px-2 py-0.5 rounded">
                    Batch {story.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}