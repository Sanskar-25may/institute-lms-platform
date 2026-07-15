"use client";
import Link from "next/link";
import LiveCodeEditor from "@/components/LiveCodeEditor";

const DEFAULT_STATS = [
  { value: '10,000+', label: 'Students Trained' },
  { value: '98%',     label: 'Satisfaction Rate' },
  { value: '4.9★',   label: 'Mentor Rating' },
  { value: '96%',    label: 'Placement Hikes' },
];

const DEFAULT_FEATURES = [
  { title: 'Project-Based Learning', description: 'We threw out the video-course model. Every module ends with a deployable project reviewed by working engineers.', colSpan: 'md:col-span-2' },
  { title: 'Live Cohorts',           description: 'Weekly interactive code reviews and Q&A sessions with working engineers.' },
  { title: 'Verified Credentials',   description: 'All certificates are cryptographically verified and linked to your GitHub profile.' },
];

const DEFAULT_STEPS = [
  { title: 'Choose Your Track',       description: 'Browse our curriculum library and pick the specialisation that aligns with your career goals.', step: 1 },
  { title: 'Build Real Projects',      description: 'Complete hands-on projects under the guidance of senior engineers. Ship code, not just exercises.', step: 2 },
  { title: 'Get Hired',               description: 'Leverage our placement network and verified credentials to land roles at top tech companies.', step: 3 },
];

const DEFAULT_TESTIMONIALS = [
  { name: 'Rohan Deshmukh', role: 'Frontend Dev',      quote: 'The project-based learning model helped me build actual confidence. I got a job offer within 3 weeks of graduating.' },
  { name: 'Priya Nair',     role: 'Data Analyst',       quote: 'Outstanding curriculum quality. The peer cohort reviews made me understand what clean code really means.' },
  { name: 'Aman Verma',     role: 'DevOps Engineer',    quote: 'Highly practical. Setting up CI/CD pipelines in the classroom was the game changer.' },
];

const DEFAULT_MARQUEE = [
  { name: 'Google' },
  { name: 'Microsoft' },
  { name: 'Amazon' },
  { name: 'Razorpay' },
  { name: 'Paytm' },
  { name: 'Cred' },
  { name: 'Flipkart' },
  { name: 'Meta' },
  { name: 'Netflix' },
  { name: 'Zepto' }
];

const DEFAULT_TECH = [
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'TypeScript' },
  { name: 'Node.js' },
  { name: 'PostgreSQL' },
  { name: 'Docker' },
  { name: 'AWS' },
  { name: 'Redis' },
  { name: 'TailwindCSS' },
  { name: 'GraphQL' }
];

export default function LandingPageClient({ initialData = {} }: { initialData?: any }) {
  const statsList = (initialData.stats && initialData.stats.length > 0) ? initialData.stats : DEFAULT_STATS;
  const featuresList = (initialData.features && initialData.features.length > 0) ? initialData.features : DEFAULT_FEATURES;
  const stepsList = (initialData.howItWorks && initialData.howItWorks.length > 0) ? initialData.howItWorks : DEFAULT_STEPS;
  const testimonialsList = (initialData.testimonials && initialData.testimonials.length > 0) ? initialData.testimonials : DEFAULT_TESTIMONIALS;
  const marqueeList = (initialData.marquee && initialData.marquee.length > 0) ? initialData.marquee : DEFAULT_MARQUEE;
  const techList = (initialData.techStackMarquee && initialData.techStackMarquee.length > 0) ? initialData.techStackMarquee : DEFAULT_TECH;

  return (
    <div className="min-h-screen pt-20">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-48 md:pb-32 min-h-[100svh] md:min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--bg-base)]"></div>
        </div>

        <div className="absolute inset-0 dot-grid opacity-50 z-0 pointer-events-none"></div>
        
        {/* Blur orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-40 z-0" style={{ background: 'var(--accent-primary)' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[120px] opacity-40 z-0" style={{ background: 'var(--accent-cyan)' }}></div>
        
        <div className="scan-container absolute inset-0 z-0 pointer-events-none">
           <div className="scan-line"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center mt-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 backdrop-blur-md" 
             style={{ background: 'var(--glass-bg)', border: '1px solid var(--border-soft)' }}
          >
             <span className="w-2 h-2 rounded-full animate-pulse-glow" style={{ background: 'var(--accent-success)' }}></span>
             <span className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>Spring Cohort Enrolling Now</span>
          </div>

          <h1 className="heading-font text-5xl md:text-7xl font-bold tracking-tight max-w-4xl mb-6 drop-shadow-2xl">
            {initialData.heroTitle || "Build skills that"} <br/><span className="shimmer-text">{initialData.heroHighlight || "ship real products."}</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-10 drop-shadow-md" style={{ color: 'var(--text-secondary)' }}>
            {initialData.heroSubtitle || "Project-based engineering courses taught by the industry's top 1%. Join 10,000+ developers building the future of software."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link href="/courses" className="btn-primary px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-2">
              Explore Curriculums
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
            <Link href="/projects" className="btn-secondary px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-2 backdrop-blur-md">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
              View Alumni Projects
            </Link>
          </div>

          {/* Enquiry Button */}
          <Link
            href="https://wa.me/917355259488?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20courses%20at%20CodersSpot."
            target="_blank"
            rel="noopener noreferrer"
            className="mb-16 inline-flex items-center gap-3 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg border"
            style={{
              background: 'color-mix(in srgb, #25D366 15%, transparent)',
              borderColor: '#25D366',
              color: '#25D366'
            }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Enquire on WhatsApp
          </Link>

          <div className="flex items-center gap-4">
             <div className="flex -space-x-3">
               {[1,2,3,4,5].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 overflow-hidden shadow-lg" style={{ borderColor: 'var(--bg-base)' }}>
                   <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" className="w-full h-full object-cover"/>
                 </div>
               ))}
             </div>
             <div className="text-sm font-semibold flex flex-col items-start drop-shadow-md">
               <div className="flex text-amber-400">★★★★★</div>
               <span style={{ color: 'var(--text-secondary)' }}>4.9/5 from 2,400 reviews</span>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Stats strip */}
      <section className="py-12 md:py-16 backdrop-blur-md border-y" style={{ background: 'color-mix(in srgb, var(--bg-surface) 60%, transparent)', borderColor: 'var(--border-soft)' }}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 md:gap-8 divide-x" style={{ borderColor: 'var(--border-soft)' }}>
              {statsList.map((stat: any, i: number) => (
                <div 
                   key={i} 
                   className={`text-center px-2 md:px-4 ${i === 2 ? 'border-l-0 md:border-l' : ''} animate-fade-in-up`}
                   style={{ borderColor: 'var(--border-soft)', animationDelay: `${i * 100}ms` }}
                >
                  <div className="heading-font text-3xl md:text-4xl font-bold mb-2 gradient-text">{stat.value}</div>
                  <div className="text-xs md:text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* 3. Marquee */}
      <section className="py-20 overflow-hidden border-b" style={{ borderColor: 'var(--border-soft)', background: 'color-mix(in srgb, var(--bg-card) 50%, transparent)' }}>
        <div className="text-center mb-10 relative z-20">
          <p className="text-sm font-bold uppercase tracking-widest drop-shadow-md" style={{ color: 'var(--text-secondary)' }}>Engineers from top companies learn here</p>
        </div>
        
        {/* Marquee scroll area with contained fade masks */}
        <div className="relative overflow-hidden">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--bg-card), transparent)' }}></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, var(--bg-card), transparent)' }}></div>
          
          <div className="flex animate-marquee whitespace-nowrap opacity-70 transition-all duration-500 hover:opacity-100">
             {Array.from({ length: 4 }).map((_, group) => (
               <div key={group} className="flex items-center gap-16 px-8 text-2xl font-bold font-mono shrink-0" style={{ color: 'var(--text-secondary)' }}>
                    {marqueeList.map((company: any, i: number) => (
                      <span key={i}>{company.name}</span>
                    ))}
               </div>
             ))}
          </div>
          
          <div className="text-center mt-16 mb-10 relative z-20">
            <p className="text-sm font-bold uppercase tracking-widest drop-shadow-md" style={{ color: 'var(--text-secondary)' }}>
              Mastering the most in-demand technologies
            </p>
          </div>

          {/* Tech Stack Marquee */}
          <div className="flex animate-marquee whitespace-nowrap opacity-50" style={{ animationDirection: 'reverse', animationDuration: '40s' }}>
             {Array.from({ length: 4 }).map((_, group) => (
               <div key={group} className="flex items-center gap-16 px-8 text-xl font-bold font-mono text-transparent bg-clip-text shrink-0" style={{ backgroundImage: 'linear-gradient(to right, var(--accent-primary), var(--accent-cyan))' }}>
                    {techList.map((tech: any, i: number) => (
                      <span key={i}>{tech.name}</span>
                    ))}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Live Code Editor Section */}
      <LiveCodeEditor />

      {/* 4. Features bento grid */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="heading-font text-3xl md:text-5xl font-bold mb-6">Why CodersSpot is different.</h2>
             <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>We threw out the traditional video-course model and built a platform optimized for actual skill acquisition.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuresList.map((feature: any, i: number) => (
                <div 
                   key={i}
                   className={`${feature.colSpan || ''} rounded-[32px] p-8 md:p-12 relative overflow-hidden backdrop-blur-md card-glow flex flex-col border card-hover`}
                   style={{ minHeight: i === 0 ? '300px' : 'auto', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}
                >
                   <div className={`absolute ${i === 0 ? 'top-0 right-0' : i === 1 ? 'bottom-0 right-0' : 'top-0 left-0'} w-32 h-32 blur-[60px] opacity-30`} style={{ background: i === 0 ? 'var(--accent-primary)' : i === 1 ? 'var(--accent-cyan)' : 'var(--accent-success)' }}></div>
                   <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ background: `color-mix(in srgb, ${i === 0 ? 'var(--accent-primary)' : i === 1 ? 'var(--accent-cyan)' : 'var(--accent-success)'} 80%, transparent)`, color: '#fff' }}>
                      <span className="font-bold text-xl">{i + 1}</span>
                   </div>
                   <h3 className={`heading-font ${i === 0 ? 'text-2xl' : 'text-xl'} font-bold mb-3`}>{feature.title}</h3>
                   <p className="drop-shadow-md text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
                </div>
              ))}

              {/* Feature 4 (Full width CTA card) */}
              <div className="md:col-span-2 rounded-[32px] p-8 md:p-12 relative overflow-hidden backdrop-blur-xl card-glow flex flex-col md:flex-row items-center justify-between gap-8 border shadow-2xl card-hover" 
                 style={{ background: 'linear-gradient(135deg, color-mix(in srgb, var(--bg-card) 60%, transparent), color-mix(in srgb, var(--accent-primary) 10%, transparent))', borderColor: 'var(--border-strong)' }}
              >
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
                 <div className="relative z-10 text-center md:text-left">
                   <h3 className="heading-font text-2xl md:text-3xl font-bold mb-3 drop-shadow-lg">Join 10,000+ developers today</h3>
                   <p className="drop-shadow-md text-sm" style={{ color: 'var(--text-secondary)' }}>Get instant access to all courses, projects, and the community.</p>
                 </div>
                 <div className="flex flex-col sm:flex-row gap-4 shrink-0 relative z-10">
                    <Link href="/engineers" className="btn-primary px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(124,58,237,0.5)]">Meet the Engineers</Link>
                    <Link href="/community" className="btn-secondary px-6 py-3 rounded-xl bg-[var(--bg-card)]">Join the Community</Link>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 5. How it works */}
      <section className="py-32 relative backdrop-blur-sm border-y" style={{ background: 'color-mix(in srgb, var(--bg-surface) 40%, transparent)', borderColor: 'var(--border-soft)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="heading-font text-3xl font-bold mb-4">How it works</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed z-0" style={{ borderColor: 'var(--border-strong)' }}></div>
              
              {stepsList.map((item: any, i: number) => (
                <div 
                   key={i} 
                   className="relative z-10 flex flex-col items-center text-center animate-fade-in-up"
                   style={{ animationDelay: `${i * 150}ms` }}
                >
                   <div className="w-20 h-20 rounded-2xl flex items-center justify-center heading-font text-3xl font-bold mb-6 shadow-2xl backdrop-blur-xl border-2" style={{ background: 'color-mix(in srgb, var(--bg-elevated) 80%, transparent)', borderColor: 'var(--border-med)', color: 'var(--accent-primary)' }}>
                      {item.step || (i + 1)}
                   </div>
                   <h3 className="text-xl font-bold mb-3 drop-shadow-md">{item.title}</h3>
                   <p className="drop-shadow-sm text-sm" style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="heading-font text-3xl font-bold mb-4 drop-shadow-lg">Loved by engineers worldwide</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonialsList.map((t: any, i: number) => (
                <div 
                   key={i} 
                   className="p-8 rounded-[24px] shadow-xl backdrop-blur-md border card-hover flex flex-col justify-between" 
                   style={{ background: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
                >
                   <div>
                     <div className="flex gap-1 text-amber-400 mb-6 drop-shadow-md">★★★★★</div>
                     <p className="text-base md:text-lg mb-8 italic drop-shadow-sm" style={{ color: 'var(--text-primary)' }}>"{t.quote}"</p>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg flex-shrink-0" style={{ background: 'var(--accent-primary)' }}>{t.name?.[0] || "?"}</div>
                      <div>
                        <div className="font-bold drop-shadow-md">{t.name}</div>
                        <div className="text-sm drop-shadow-sm" style={{ color: 'var(--text-secondary)' }}>{t.role || "Developer"}</div>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="relative overflow-hidden text-center border-t py-40" style={{ borderColor: 'var(--border-soft)' }}>
         <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-base)] via-transparent to-[var(--bg-base)] z-0"></div>
         <div className="absolute inset-0 dot-grid opacity-30 z-0"></div>

         <div 
            className="relative z-10 max-w-3xl mx-auto px-4 p-12 rounded-[40px] backdrop-blur-xl border shadow-2xl"
            style={{ background: 'color-mix(in srgb, var(--bg-card) 60%, transparent)', borderColor: 'var(--glass-border)' }}
         >
            <h2 className="heading-font text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">Ready to build the future?</h2>
            <p className="text-xl mb-10 drop-shadow-md" style={{ color: 'var(--text-secondary)' }}>Join thousands of developers leveling up their careers.</p>
            <div className="inline-block hover:scale-105 transition-transform duration-200">
               <Link href="/auth" className="btn-primary px-10 py-5 rounded-2xl text-xl inline-flex items-center gap-3 shadow-[0_0_30px_rgba(124,58,237,0.6)]">
                  Start Your Journey
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
}
