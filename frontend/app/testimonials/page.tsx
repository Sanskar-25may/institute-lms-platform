import Link from "next/link";
import { getSiteContent } from "@/lib/cms";

const DEFAULT_TESTIMONIALS = [
  {
    name: 'Rohan Deshmukh',
    role: 'Frontend Dev @ Razorpay',
    quote: 'The project-based learning model helped me build actual confidence. I got a job offer within 3 weeks of graduating.',
    color: 'from-violet-500 to-indigo-500',
  },
  {
    name: 'Priya Nair',
    role: 'Data Engineer @ Google',
    quote: 'Outstanding curriculum quality. The peer cohort reviews made me understand what clean code really means.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'Aman Verma',
    role: 'DevOps Engineer @ Amazon',
    quote: 'Highly practical. Setting up CI/CD pipelines in the classroom was the game changer.',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    name: 'Sneha Patel',
    role: 'Full Stack Dev @ Flipkart',
    quote: 'The mentors genuinely care about your growth. I had 1-on-1 sessions every week that were incredibly valuable.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    name: 'Arjun Rao',
    role: 'Backend Engineer @ Cred',
    quote: 'The system design module alone was worth the entire fee. I cleared 5 FAANG interviews back-to-back.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Divya Singh',
    role: 'ML Engineer @ Meta',
    quote: "I was skeptical at first, but the quality of instruction exceeded everything I'd seen on Udemy or Coursera.",
    color: 'from-purple-500 to-violet-500',
  },
];

export default async function TestimonialsPage() {
  const cmsData = await getSiteContent("public-testimonials");

  const testimonialsList = (cmsData?.testimonials && cmsData.testimonials.filter((t: any) => t.isActive !== false).length > 0)
    ? cmsData.testimonials.filter((t: any) => t.isActive !== false)
    : DEFAULT_TESTIMONIALS;

  return (
    <div className="min-h-screen pt-32 pb-20 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="heading-font text-5xl font-bold mb-6">{cmsData?.heading || "Hear from our students"}</h1>
          <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>{cmsData?.subtitle || "Over 10,000 developers have upgraded their careers with CodersSpot."}</p>
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
           {testimonialsList.map((t: any, i: number) => (
             <div key={i} className="p-8 rounded-[24px] card-hover flex flex-col justify-between" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-soft)' }}>
                <div>
                   <div className="flex gap-1 text-amber-400 mb-6">★★★★★</div>
                   <p className="text-lg mb-8 italic leading-relaxed" style={{ color: 'var(--text-primary)' }}>"{t.quote}"</p>
                </div>
                <div className="flex items-center gap-4 border-t pt-6" style={{ borderColor: 'var(--border-soft)' }}>
                   {t.imgUrl ? (
                      <img src={t.imgUrl} alt={t.name} className="w-12 h-12 rounded-full border-2 object-cover" style={{ borderColor: 'var(--bg-surface)' }} />
                   ) : (
                      <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-white shadow-lg" style={{ borderColor: 'var(--bg-surface)', background: 'var(--accent-primary)' }}>
                         {t.name?.[0] || "?"}
                      </div>
                   )}
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