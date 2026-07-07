import Link from "next/link";

export default function TestimonialsPage() {
  const testimonials = [
    { name: "Alex Chen", role: "Frontend Engineer at Stripe", quote: "The Next.js course finally made server components click for me. I rebuilt our company's dashboard using the patterns taught here.", img: "12" },
    { name: "Sarah Jenkins", role: "Software Engineer at Netflix", quote: "Unlike Udemy where you just watch videos, here you actually code. The project reviews from real engineers are invaluable.", img: "41" },
    { name: "David Kim", role: "Full Stack Dev at Vercel", quote: "The UI/UX foundation course changed how I approach frontend. Everything I build now looks 10x better automatically.", img: "32" },
    { name: "Maria Garcia", role: "Backend Developer at Spotify", quote: "I thought I knew Node.js until I took the Scaling Node course. The deep dive into event loop optimization blew my mind.", img: "45" },
    { name: "James Wilson", role: "Mobile Lead at Airbnb", quote: "The React Native masterclass is the only resource you need to build production-ready mobile apps today.", img: "60" },
    { name: "Priya Patel", role: "ML Engineer at Google", quote: "Applied Machine Learning bridges the gap between Jupyter notebooks and scalable ML pipelines perfectly.", img: "44" },
    { name: "Tom Baker", role: "Freelance Developer", quote: "I doubled my hourly rate after taking the System Design course. I can finally architect robust solutions for clients.", img: "22" },
    { name: "Nina Li", role: "UI Designer", quote: "Even as a designer, learning React and Tailwind here gave me the tools to prototype my own ideas without waiting for devs.", img: "36" },
    { name: "Kevin Hart", role: "CTO at Startup", quote: "We use Aushutosh for onboarding all our junior engineers now. It's simply the best return on investment for technical training.", img: "50" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="heading-font text-5xl font-bold mb-6">Hear from our students</h1>
          <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>Over 10,000 developers have upgraded their careers with Aushutosh.</p>
        </div>

        {/* Rating Banner */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20 p-8 rounded-3xl" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-soft)' }}>
           <div className="flex items-center gap-4">
              <div className="text-5xl font-bold gradient-text">4.9</div>
              <div className="flex flex-col">
                 <div className="flex text-amber-500 text-xl">★★★★★</div>
                 <span className="text-sm font-semibold uppercase tracking-widest mt-1" style={{ color: 'var(--text-tertiary)' }}>Average Rating</span>
              </div>
           </div>
           <div className="hidden md:block w-px h-16" style={{ background: 'var(--border-soft)' }}></div>
           <div className="text-lg font-medium" style={{ color: 'var(--text-secondary)' }}>
              Based on 2,400+ reviews from verified students.
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {testimonials.map((t, i) => (
             <div key={i} className="p-8 rounded-[24px] card-hover flex flex-col justify-between" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-soft)' }}>
                <div>
                   <div className="flex gap-1 text-amber-400 mb-6">★★★★★</div>
                   <p className="text-lg mb-8 italic leading-relaxed" style={{ color: 'var(--text-primary)' }}>"{t.quote}"</p>
                </div>
                <div className="flex items-center gap-4 border-t pt-6" style={{ borderColor: 'var(--border-soft)' }}>
                   <img src={`https://i.pravatar.cc/100?img=${t.img}`} alt={t.name} className="w-12 h-12 rounded-full border-2" style={{ borderColor: 'var(--bg-surface)' }} />
                   <div>
                     <div className="font-bold">{t.name}</div>
                     <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t.role}</div>
                   </div>
                </div>
             </div>
           ))}
        </div>

      </div>
    </div>
  );
}