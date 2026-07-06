import Link from "next/link";

export default function AboutPage() {
  const team = [
    { initials: "EP", name: "Elena Petrova", role: "Founder & CEO", desc: "Ex-Coursera. Believes learning should feel like play.", color: "from-violet-500 to-fuchsia-500" },
    { initials: "MC", name: "Marcus Chen", role: "Head of Curriculum", desc: "Former CMU professor. Builds courses that actually stick.", color: "from-blue-500 to-cyan-500" },
    { initials: "PN", name: "Priya Nair", role: "Head of Design", desc: "Design lead behind three award-winning learning apps.", color: "from-emerald-500 to-teal-500" },
    { initials: "DA", name: "Diego Alvarez", role: "Head of Engineering", desc: "Scaled learning platforms to 10M+ students.", color: "from-amber-500 to-orange-500" }
  ];

  const values = [
    { title: "Learners first", desc: "Every decision starts with 'Does it help learners get better?'" },
    { title: "Craft matters", desc: "We sweat pixels, pacing, and pedagogy in equal measure." },
    { title: "Access for all", desc: "Financial aid, offline mode, and 40+ language subtitles." },
    { title: "Outcomes over vanity", desc: "We measure success by careers changed, not videos watched." }
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
            <Link href="/about" className="text-white">About</Link>
            <Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link>
            <Link href="/placements" className="hover:text-white transition-colors">Placements</Link>
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
      <header className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold tracking-wider text-slate-400 uppercase mb-8">
          About Us
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          Built by learners, <span className="text-violet-500">for learners.</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          We're on a mission to make world-class education feel personal, affordable, and joyful — for anyone, anywhere.
        </p>
      </header>

      {/* --- OUR STORY --- */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-white mb-6">Our story</h2>
        <div className="space-y-6 text-slate-400 leading-relaxed">
          <p>
            Lumina began in 2021 with a simple frustration: online learning felt lonely, generic, and disconnected from actual careers. We set out to build a platform where every learner has a coach, every course leaves someone real, and every lesson is designed with the same care as a great product.
          </p>
          <p>
            Four years later, we've helped 180,000+ learners in 90+ countries change their careers, build companies, and rediscover the joy of learning something new.
          </p>
        </div>
      </section>

      {/* --- VALUES GRID --- */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-white mb-10 text-center">What we believe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:bg-white/[0.04] transition-colors">
              <h3 className="text-white font-bold mb-3">{val.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- THE TEAM --- */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">The team</h2>
          <p className="text-slate-400">A small group of teachers, engineers, and designers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div key={i} className="bg-[#131B2F] border border-white/5 p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300">
              <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${member.color} p-0.5 mb-6 shadow-lg`}>
                <div className="w-full h-full bg-[#0B0F19] rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-white">{member.initials}</span>
                </div>
              </div>
              <h3 className="text-white font-bold text-lg">{member.name}</h3>
              <p className="text-xs font-bold text-violet-400 uppercase tracking-wider mt-1 mb-4">{member.role}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}