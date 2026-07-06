import Link from "next/link";

export default function TestimonialsPage() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Frontend Developer",
      rating: 5,
      text: "Lumina completely changed how I approach coding. The React course wasn't just theory—it was actual production-level architecture. I landed a mid-level role 3 weeks after finishing.",
      initials: "SJ",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "David Kim",
      role: "Product Designer",
      rating: 5,
      text: "As a designer trying to learn code, other platforms made me feel stupid. Lumina's instructors explain the 'why' before the 'how'. The UI/UX is also just stunning to look at.",
      initials: "DK",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Priya Sharma",
      role: "AI Researcher",
      rating: 5,
      text: "The Machine Learning curriculum is rigorous. It doesn't hold your hand, but the community discussions and the way the video player integrates with notes is a game changer.",
      initials: "PS",
      color: "from-fuchsia-500 to-purple-500"
    },
    {
      name: "Michael Chen",
      role: "Engineering Manager",
      rating: 4,
      text: "I bought team licenses for my entire frontend squad. The quality of the advanced TypeScript material is better than anything else on the market right now.",
      initials: "MC",
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "Elena Petrova",
      role: "Freelance Dev",
      rating: 5,
      text: "The portfolio projects you build in these courses are actually impressive. I used my final project from the Full-Stack course to land a $15k client.",
      initials: "EP",
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "James Wilson",
      role: "Student",
      rating: 5,
      text: "The dark mode, the keyboard shortcuts in the video player, the instant grading... it feels like an app built in 2026, not a clunky school website from 2010.",
      initials: "JW",
      color: "from-violet-500 to-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] font-sans text-slate-300 selection:bg-violet-500/30 overflow-x-hidden pb-24 animate-in fade-in duration-500">
      
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
            <Link href="/testimonials" className="text-white">Testimonials</Link>
            <Link href="/placements" className="hover:text-white transition-colors">Placements</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/feedback" className="hover:text-white transition-colors">Feedback</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/auth" className="hidden md:block text-sm font-medium text-slate-300 hover:text-white transition-colors">Sign In</Link>
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-white cursor-pointer hover:bg-slate-700 transition-colors">SG</div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold tracking-wider text-slate-400 uppercase mb-8">
          Wall of Love
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          Don't just take <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">our word for it.</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
          Join thousands of learners who have transformed their careers, built incredible projects, and rediscovered the joy of learning.
        </p>
        
        <div className="flex items-center justify-center gap-4 text-white">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            ))}
          </div>
          <span className="font-bold text-xl">4.9/5</span>
          <span className="text-slate-500 font-medium">from 12,000+ reviews</span>
        </div>
      </header>

      {/* --- REVIEWS GRID --- */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-[#131B2F] border border-white/5 p-8 rounded-[24px] hover:border-violet-500/30 transition-colors shadow-lg">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <svg key={idx} className={`w-4 h-4 ${idx < review.rating ? 'text-amber-400' : 'text-slate-700'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                ))}
              </div>
              <p className="text-slate-300 leading-relaxed mb-8 text-sm md:text-base">"{review.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold shadow-md shrink-0`}>
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-xs text-slate-400">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="bg-gradient-to-b from-[#131B2F] to-[#0B0F19] border border-white/5 rounded-[32px] p-12 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to write your own success story?</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">Start learning today with a 7-day free trial. Cancel anytime.</p>
          <Link href="/auth" className="inline-block px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-violet-900/50">
            Get Started For Free
          </Link>
        </div>
      </section>

    </div>
  );
}