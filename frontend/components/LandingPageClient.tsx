"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function LandingPageClient({ initialData = {} }: { initialData?: any }) {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen pt-20">
      {/* 1. Hero Section with Video Background and Parallax */}
      <section className="relative overflow-hidden pt-20 pb-48 md:pb-32 min-h-[100svh] md:min-h-[90vh] flex items-center justify-center">
        
        {/* Specific Hero Video Background Removed (causing 404s) */}
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--bg-base)]"></div>
        </motion.div>

        <div className="absolute inset-0 dot-grid opacity-50 z-0 pointer-events-none"></div>
        
        {/* Blur orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-40 z-0" style={{ background: 'var(--accent-primary)' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[120px] opacity-40 z-0" style={{ background: 'var(--accent-cyan)' }}></div>
        
        <div className="scan-container absolute inset-0 z-0 pointer-events-none">
           <div className="scan-line"></div>
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           style={{ y: heroY }}
           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center mt-10"
        >
          <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 backdrop-blur-md" 
             style={{ background: 'var(--glass-bg)', border: '1px solid var(--border-soft)' }}
          >
             <span className="w-2 h-2 rounded-full animate-pulse-glow" style={{ background: 'var(--accent-success)' }}></span>
             <span className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>Spring Cohort Enrolling Now</span>
          </motion.div>

          <h1 className="heading-font text-5xl md:text-7xl font-bold tracking-tight max-w-4xl mb-6 drop-shadow-2xl">
            {initialData.heroTitle || "Build skills that"} <br/><span className="shimmer-text">{initialData.heroHighlight || "ship real products."}</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-10 drop-shadow-md" style={{ color: 'var(--text-secondary)' }}>
            {initialData.heroSubtitle || "Project-based engineering courses taught by the industry's top 1%. Join 10,000+ developers building the future of software."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/courses" className="btn-primary px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-2">
              Explore Courses
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
            <Link href="/auth" className="btn-secondary px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-2 backdrop-blur-md">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Watch Demo
            </Link>
          </div>

          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.6, duration: 1 }}
             className="flex items-center gap-4"
          >
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
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Stats strip */}
      <section className="py-12 md:py-16 backdrop-blur-md border-y" style={{ background: 'color-mix(in srgb, var(--bg-surface) 60%, transparent)', borderColor: 'var(--border-soft)' }}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 md:gap-8 divide-x" style={{ borderColor: 'var(--border-soft)' }}>
              {(initialData.stats || []).filter((s: any) => s.isActive !== false).map((stat: any, i: number) => (
                <motion.div 
                   key={i} 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-50px" }}
                   transition={{ delay: i * 0.1, duration: 0.6 }}
                   className={`text-center px-2 md:px-4 ${i === 2 ? 'border-l-0 md:border-l' : ''}`}
                   style={{ borderColor: 'var(--border-soft)' }}
                >
                  <div className="heading-font text-3xl md:text-4xl font-bold mb-2 gradient-text">{stat.value}</div>
                  <div className="text-xs md:text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>{stat.label}</div>
                </motion.div>
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
          {/* Fade masks - only cover the marquee row, not the heading */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--bg-card), transparent)' }}></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, var(--bg-card), transparent)' }}></div>
          
          <div className="flex animate-marquee whitespace-nowrap opacity-70 transition-all duration-500 hover:opacity-100">
             {[1, 2].map((group) => (
               <div key={group} className="flex items-center gap-16 px-8 text-2xl font-bold font-mono" style={{ color: 'var(--text-secondary)' }}>
                  {(initialData.marquee && initialData.marquee.filter((m: any) => m.isActive !== false).length > 0) ? (
                    initialData.marquee.filter((m: any) => m.isActive !== false).map((company: any, i: number) => (
                      <span key={i}>{company.name}</span>
                    ))
                  ) : (
                    <span className="opacity-50 italic">No companies added to CMS</span>
                  )}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. Features bento grid */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             className="text-center max-w-3xl mx-auto mb-16"
           >
             <h2 className="heading-font text-3xl md:text-5xl font-bold mb-6">Why CodersSpot is different.</h2>
             <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>We threw out the traditional video-course model and built a platform optimized for actual skill acquisition.</p>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(initialData.features && initialData.features.filter((f: any) => f.isActive !== false).length > 0) ? (
                initialData.features.filter((f: any) => f.isActive !== false).map((feature: any, i: number) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     whileHover={{ y: -5, scale: i === 0 ? 1.01 : 1.02 }}
                     viewport={{ once: true, margin: "-100px" }}
                     transition={{ delay: i * 0.1, duration: 0.4 }}
                     className={`${i === 0 ? 'md:col-span-2' : ''} rounded-[32px] p-8 md:p-12 relative overflow-hidden backdrop-blur-md card-glow flex flex-col border`}
                     style={{ minHeight: i === 0 ? '400px' : 'auto', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}
                  >
                     <div className={`absolute ${i === 0 ? 'top-0 right-0' : i === 1 ? 'bottom-0 right-0' : 'top-0 left-0'} w-32 h-32 blur-[60px] opacity-30`} style={{ background: i === 0 ? 'var(--accent-primary)' : i === 1 ? 'var(--accent-cyan)' : 'var(--accent-success)' }}></div>
                     <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ background: `color-mix(in srgb, ${i === 0 ? 'var(--accent-primary)' : i === 1 ? 'var(--accent-cyan)' : 'var(--accent-success)'} 80%, transparent)`, color: '#fff' }}>
                        <span className="font-bold text-xl">{i + 1}</span>
                     </div>
                     <h3 className={`heading-font ${i === 0 ? 'text-2xl' : 'text-xl'} font-bold mb-3`}>{feature.title}</h3>
                     <p className="drop-shadow-md" style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
                  </motion.div>
                ))
              ) : (
                <div className="md:col-span-3 text-center py-20 text-gray-500 italic border border-dashed rounded-3xl" style={{ borderColor: 'var(--border-soft)' }}>
                   No features provided in CMS
                </div>
              )}

              {/* Feature 4 (Full width CTA card) */}
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 whileHover={{ scale: 1.01 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ delay: 0.3, duration: 0.5 }}
                 className="md:col-span-2 rounded-[32px] p-8 md:p-12 relative overflow-hidden backdrop-blur-xl card-glow flex flex-col md:flex-row items-center justify-between gap-8 border shadow-2xl" 
                 style={{ background: 'linear-gradient(135deg, color-mix(in srgb, var(--bg-card) 60%, transparent), color-mix(in srgb, var(--accent-primary) 10%, transparent))', borderColor: 'var(--border-strong)' }}
              >
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
                 <div className="relative z-10 text-center md:text-left">
                   <h3 className="heading-font text-2xl md:text-3xl font-bold mb-3 drop-shadow-lg">Join 10,000+ developers today</h3>
                   <p className="drop-shadow-md" style={{ color: 'var(--text-secondary)' }}>Get instant access to all courses, projects, and the community.</p>
                 </div>
                 <div className="flex flex-col sm:flex-row gap-4 shrink-0 relative z-10">
                    <Link href="/auth" className="btn-primary px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(124,58,237,0.5)]">Start Free Trial</Link>
                    <Link href="/courses" className="btn-secondary px-6 py-3 rounded-xl bg-[var(--bg-card)]">Browse Courses</Link>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* 5. How it works */}
      <section className="py-32 relative backdrop-blur-sm border-y" style={{ background: 'color-mix(in srgb, var(--bg-surface) 40%, transparent)', borderColor: 'var(--border-soft)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             className="text-center max-w-3xl mx-auto mb-16"
           >
             <h2 className="heading-font text-3xl font-bold mb-4">How it works</h2>
           </motion.div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed z-0" style={{ borderColor: 'var(--border-strong)' }}></div>
              
              {(initialData.howItWorks && initialData.howItWorks.filter((h: any) => h.isActive !== false).length > 0) ? (
                initialData.howItWorks.filter((h: any) => h.isActive !== false).map((item: any, i: number) => (
                  <motion.div 
                     key={i} 
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-50px" }}
                     transition={{ delay: i * 0.2 }}
                     className="relative z-10 flex flex-col items-center text-center"
                  >
                     <div className="w-20 h-20 rounded-2xl flex items-center justify-center heading-font text-3xl font-bold mb-6 shadow-2xl backdrop-blur-xl border-2" style={{ background: 'color-mix(in srgb, var(--bg-elevated) 80%, transparent)', borderColor: 'var(--border-med)', color: 'var(--accent-primary)' }}>
                        {item.step || (i + 1)}
                     </div>
                     <h3 className="text-xl font-bold mb-3 drop-shadow-md">{item.title}</h3>
                     <p className="drop-shadow-sm" style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
                  </motion.div>
                ))
              ) : (
                <div className="md:col-span-3 text-center py-10 text-gray-500 italic">
                   No "How It Works" steps added in CMS
                </div>
              )}
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
              {(initialData.testimonials && initialData.testimonials.filter((t: any) => t.isActive !== false).length > 0) ? (
                initialData.testimonials.filter((t: any) => t.isActive !== false).map((t: any, i: number) => (
                  <motion.div 
                     key={i} 
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     whileHover={{ y: -5, scale: 1.02 }}
                     viewport={{ once: true, margin: "-100px" }}
                     transition={{ delay: i * 0.15 }}
                     className="p-8 rounded-[24px] shadow-xl backdrop-blur-md border card-hover" 
                     style={{ background: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
                  >
                     <div className="flex gap-1 text-amber-400 mb-6 drop-shadow-md">★★★★★</div>
                     <p className="text-lg mb-8 italic drop-shadow-sm" style={{ color: 'var(--text-primary)' }}>"{t.quote}"</p>
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg" style={{ background: 'var(--accent-primary)' }}>{t.name?.[0] || "?"}</div>
                        <div>
                          <div className="font-bold drop-shadow-md">{t.name}</div>
                          <div className="text-sm drop-shadow-sm" style={{ color: 'var(--text-secondary)' }}>{t.role}</div>
                        </div>
                     </div>
                  </motion.div>
                ))
              ) : (
                <div className="md:col-span-3 text-center py-10 text-gray-500 italic border border-dashed rounded-3xl" style={{ borderColor: 'var(--border-soft)' }}>
                   No testimonials provided in CMS
                </div>
              )}
           </div>
        </div>
      </section>

      {/* 7. Final CTA with Parallax Background */}
      <section className="relative overflow-hidden text-center border-t py-40" style={{ borderColor: 'var(--border-soft)' }}>
         {/* Dynamic scrolling background image */}
         <motion.div 
            style={{ y: useTransform(scrollY, [0, 4000], [0, 600]) }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-top opacity-20 dark:opacity-30 mix-blend-luminosity z-0"
         ></motion.div>
         
         <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-base)] via-transparent to-[var(--bg-base)] z-0"></div>
         <div className="absolute inset-0 dot-grid opacity-30 z-0"></div>

         <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-3xl mx-auto px-4 p-12 rounded-[40px] backdrop-blur-xl border shadow-2xl"
            style={{ background: 'color-mix(in srgb, var(--bg-card) 60%, transparent)', borderColor: 'var(--glass-border)' }}
         >
            <h2 className="heading-font text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">Ready to build the future?</h2>
            <p className="text-xl mb-10 drop-shadow-md" style={{ color: 'var(--text-secondary)' }}>Join thousands of developers leveling up their careers.</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
               <Link href="/auth" className="btn-primary px-10 py-5 rounded-2xl text-xl inline-flex items-center gap-3 shadow-[0_0_30px_rgba(124,58,237,0.6)]">
                  Start Your Free Trial
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
               </Link>
            </motion.div>
         </motion.div>
      </section>

    </div>
  );
}
