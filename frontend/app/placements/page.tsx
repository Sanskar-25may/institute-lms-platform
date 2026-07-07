import Link from "next/link";

export default function PlacementsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full mb-6 font-semibold text-sm" style={{ background: 'var(--bg-elevated)', color: 'var(--accent-primary)', border: '1px solid var(--border-soft)' }}>
             Career Outcomes
          </div>
          <h1 className="heading-font text-5xl md:text-6xl font-bold mb-6">Where our alumni work</h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>Aushutosh graduates don't just pass interviews; they hit the ground running on day one. Here's where they are building the future.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
           {[
             { title: "Average Salary Increase", value: "+$42k", sub: "For students switching jobs within 6 months" },
             { title: "Top Tier Placements", value: "34%", sub: "Graduates hired by FAANG or unicorns" },
             { title: "Hiring Partners", value: "250+", sub: "Companies actively recruiting from our cohorts" }
           ].map((stat, i) => (
             <div key={i} className="p-8 text-center rounded-[24px]" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-soft)' }}>
                <h3 className="text-4xl font-bold mb-2 gradient-text">{stat.value}</h3>
                <h4 className="font-bold text-lg mb-2">{stat.title}</h4>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{stat.sub}</p>
             </div>
           ))}
        </div>

        {/* Logos Marquee static grid */}
        <div className="mb-24 text-center">
           <h3 className="font-bold mb-10 text-xl" style={{ color: 'var(--text-secondary)' }}>Hiring Partners</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {['Google', 'Meta', 'Netflix', 'Amazon', 'Apple', 'Stripe', 'Vercel', 'Linear', 'Discord', 'Notion'].map(company => (
                 <div key={company} className="h-20 flex items-center justify-center rounded-xl font-bold text-xl grayscale hover:grayscale-0 transition-all cursor-pointer" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-soft)' }}>
                    {company}
                 </div>
              ))}
           </div>
        </div>

        {/* Alumni Spotlights */}
        <div>
           <h2 className="heading-font text-3xl font-bold text-center mb-12">Alumni Spotlights</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Emily Rogers", prev: "Junior Dev at Agency", now: "Software Engineer at Stripe", img: "5", quote: "The System Design course gave me the confidence to ace the Stripe loop." },
                { name: "James Carter", prev: "Bootcamp Grad", now: "Frontend Eng at Vercel", img: "11", quote: "Learning how React actually works under the hood was the game changer for me." },
                { name: "Anita Patel", prev: "Data Analyst", now: "ML Engineer at Netflix", img: "44", quote: "Moving from notebooks to production ML pipelines is what got me the role." }
              ].map((alumni, i) => (
                 <div key={i} className="p-8 rounded-[24px] relative overflow-hidden" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-soft)' }}>
                    <div className="absolute top-0 right-0 w-32 h-32 blur-[50px] opacity-20" style={{ background: 'var(--accent-primary)' }}></div>
                    <div className="relative z-10">
                       <img src={`https://i.pravatar.cc/150?img=${alumni.img}`} alt={alumni.name} className="w-16 h-16 rounded-full mb-6 border-2" style={{ borderColor: 'var(--bg-surface)' }} />
                       <h3 className="font-bold text-xl mb-1">{alumni.name}</h3>
                       
                       <div className="flex flex-col gap-2 mt-4 mb-6 text-sm">
                          <div className="flex items-center gap-2">
                             <span className="px-2 py-1 rounded bg-black/5 font-semibold" style={{ color: 'var(--text-secondary)' }}>Before</span>
                             <span>{alumni.prev}</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <span className="px-2 py-1 rounded font-semibold text-white" style={{ background: 'var(--accent-primary)' }}>After</span>
                             <span className="font-bold" style={{ color: 'var(--text-primary)' }}>{alumni.now}</span>
                          </div>
                       </div>
                       
                       <p className="italic" style={{ color: 'var(--text-secondary)' }}>"{alumni.quote}"</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}