"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function LandingPageClient() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen pt-20">
      {/* 1. Hero Section with Video Background and Parallax */}
      <section className="relative overflow-hidden pt-20 pb-32 min-h-[90vh] flex items-center justify-center">
        
        {/* Specific Hero Video Background */}
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
           <video 
             autoPlay loop muted playsInline 
             className="w-full h-full object-cover mix-blend-screen opacity-20 dark:opacity-40"
           >
              <source src="https://cdn.pixabay.com/video/2021/08/17/85375-589921676_tiny.mp4" type="video/mp4" />
           </video>
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
            Build skills that <br/><span className="shimmer-text">ship real products.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-10 drop-shadow-md" style={{ color: 'var(--text-secondary)' }}>
            Project-based engineering courses taught by the industry's top 1%. Join 10,000+ developers building the future of software.
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
      <section className="py-12 section-divider backdrop-blur-md border-y" style={{ background: 'color-mix(in srgb, var(--bg-surface) 60%, transparent)', borderColor: 'var(--border-soft)' }}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x" style={{ borderColor: 'var(--border-soft)' }}>
              {[
                { label: "Students Worldwide", value: "10,000+" },
                { label: "Course Satisfaction", value: "98%" },
                { label: "Average Rating", value: "4.9/5" },
                { label: "Salary Increase", value: "$34M+" },
              ].map((stat, i) => (
                <motion.div 
                   key={i} 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-50px" }}
                   transition={{ delay: i * 0.1, duration: 0.6 }}
                   className="text-center px-4"
                >
                  <div className="heading-font text-3xl md:text-4xl font-bold mb-2 gradient-text">{stat.value}</div>
                  <div className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>{stat.label}</div>
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
                  <span>GOOGLE</span>
                  <span>META</span>
                  <span>STRIPE</span>
                  <span>VERCEL</span>
                  <span>NETFLIX</span>
                  <span>SHOPIFY</span>
                  <span>ATLASSIAN</span>
                  <span>AMAZON</span>
                  <span>GITHUB</span>
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
             <h2 className="heading-font text-3xl md:text-5xl font-bold mb-6">Why Aushutosh is different.</h2>
             <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>We threw out the traditional video-course model and built a platform optimized for actual skill acquisition.</p>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 (Tall, 2 cols) */}
              <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 whileHover={{ y: -5, scale: 1.01 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.4 }}
                 className="md:col-span-2 rounded-[32px] p-8 md:p-12 relative overflow-hidden backdrop-blur-md card-glow border" 
                 style={{ minHeight: '400px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}
              >
                 <div className="absolute top-0 right-0 w-64 h-64 blur-[80px] opacity-30" style={{ background: 'var(--accent-primary)' }}></div>
                 <div className="relative z-10 flex flex-col justify-between h-full">
                   <div>
                     <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ background: 'color-mix(in srgb, var(--accent-primary) 80%, transparent)', color: '#fff' }}>
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                     </div>
                     <h3 className="heading-font text-2xl font-bold mb-3">Project-Based Learning</h3>
                     <p className="text-lg max-w-md drop-shadow-md" style={{ color: 'var(--text-secondary)' }}>Stop watching toy examples. You will build production-ready applications, implement CI/CD, and deploy to real infrastructure.</p>
                   </div>
                   <div className="mt-8 transition-transform duration-700 hover:scale-105">
                     <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" alt="Code editor" className="rounded-xl border shadow-2xl mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" style={{ borderColor: 'var(--border-soft)' }}/>
                   </div>
                 </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 whileHover={{ y: -5, scale: 1.02 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ delay: 0.1, duration: 0.4 }}
                 className="rounded-[32px] p-8 md:p-12 relative overflow-hidden backdrop-blur-md card-glow flex flex-col border"
                 style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}
              >
                 <div className="absolute bottom-0 right-0 w-32 h-32 blur-[60px] opacity-30" style={{ background: 'var(--accent-cyan)' }}></div>
                 <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ background: 'color-mix(in srgb, var(--accent-cyan) 80%, transparent)', color: '#fff' }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                 </div>
                 <h3 className="heading-font text-xl font-bold mb-3">Live Cohorts</h3>
                 <p className="drop-shadow-md" style={{ color: 'var(--text-secondary)' }}>Weekly office hours, code reviews, and pair programming with senior engineers.</p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 whileHover={{ y: -5, scale: 1.02 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ delay: 0.2, duration: 0.4 }}
                 className="rounded-[32px] p-8 md:p-12 relative overflow-hidden backdrop-blur-md card-glow flex flex-col border"
                 style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}
              >
                 <div className="absolute top-0 left-0 w-32 h-32 blur-[60px] opacity-30" style={{ background: 'var(--accent-success)' }}></div>
                 <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ background: 'color-mix(in srgb, var(--accent-success) 80%, transparent)', color: '#fff' }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                 </div>
                 <h3 className="heading-font text-xl font-bold mb-3">Verified Credentials</h3>
                 <p className="drop-shadow-md" style={{ color: 'var(--text-secondary)' }}>Earn cryptographically verifiable certificates that top hiring managers actually trust.</p>
              </motion.div>

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
              
              {[
                { step: "1", title: "Enroll in a Path", desc: "Choose a career path and get a structured curriculum." },
                { step: "2", title: "Learn & Build", desc: "Watch high-quality lessons and build projects locally." },
                { step: "3", title: "Get Certified", desc: "Submit your final project for review by a senior engineer." }
              ].map((item, i) => (
                <motion.div 
                   key={i} 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-50px" }}
                   transition={{ delay: i * 0.2 }}
                   className="relative z-10 flex flex-col items-center text-center"
                >
                   <div className="w-20 h-20 rounded-2xl flex items-center justify-center heading-font text-3xl font-bold mb-6 shadow-2xl backdrop-blur-xl border-2" style={{ background: 'color-mix(in srgb, var(--bg-elevated) 80%, transparent)', borderColor: 'var(--border-med)', color: 'var(--accent-primary)' }}>
                      {item.step}
                   </div>
                   <h3 className="text-xl font-bold mb-3 drop-shadow-md">{item.title}</h3>
                   <p className="drop-shadow-sm" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                </motion.div>
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
              {[
                { name: "Alex Chen", role: "Frontend Engineer at Stripe", quote: "The Next.js course finally made server components click for me. I rebuilt our company's dashboard using the patterns taught here." },
                { name: "Sarah Jenkins", role: "Software Engineer at Netflix", quote: "Unlike Udemy where you just watch videos, here you actually code. The project reviews from real engineers are invaluable." },
                { name: "David Kim", role: "Full Stack Dev at Vercel", quote: "The UI/UX foundation course changed how I approach frontend. Everything I build now looks 10x better automatically." }
              ].map((t, i) => (
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
                      <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg" style={{ background: 'var(--accent-primary)' }}>{t.name[0]}</div>
                      <div>
                        <div className="font-bold drop-shadow-md">{t.name}</div>
                        <div className="text-sm drop-shadow-sm" style={{ color: 'var(--text-secondary)' }}>{t.role}</div>
                      </div>
                   </div>
                </motion.div>
              ))}
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

      {/* 8. Footer */}
      <footer className="pt-20 pb-10 border-t relative z-10 backdrop-blur-md" style={{ borderColor: 'var(--border-soft)', background: 'color-mix(in srgb, var(--bg-card) 80%, transparent)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-2 md:col-span-1">
                 <Link href="/" className="flex items-center gap-2 mb-6">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#0EA5E9]"></div>
                    <span className="heading-font text-xl font-bold">Aushutosh</span>
                 </Link>
                 <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>Engineering education for the future. Built by engineers, for engineers.</p>
              </div>
              
              <div>
                 <h4 className="font-bold mb-6">Learn</h4>
                 <ul className="space-y-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <li><Link href="/courses" className="hover:text-[var(--accent-primary)] transition-colors">Courses</Link></li>
                    <li><Link href="/placements" className="hover:text-[var(--accent-primary)] transition-colors">Placements</Link></li>
                    <li><Link href="/testimonials" className="hover:text-[var(--accent-primary)] transition-colors">Testimonials</Link></li>
                    <li><Link href="#" className="hover:text-[var(--accent-primary)] transition-colors">Blog</Link></li>
                 </ul>
              </div>
              
              <div>
                 <h4 className="font-bold mb-6">Company</h4>
                 <ul className="space-y-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <li><Link href="/about" className="hover:text-[var(--accent-primary)] transition-colors">About Us</Link></li>
                    <li><Link href="#" className="hover:text-[var(--accent-primary)] transition-colors">Careers</Link></li>
                    <li><Link href="/contact" className="hover:text-[var(--accent-primary)] transition-colors">Contact</Link></li>
                    <li><Link href="/feedback" className="hover:text-[var(--accent-primary)] transition-colors">Feedback</Link></li>
                 </ul>
              </div>
              
              <div>
                 <h4 className="font-bold mb-6">Legal</h4>
                 <ul className="space-y-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <li><Link href="#" className="hover:text-[var(--accent-primary)] transition-colors">Privacy Policy</Link></li>
                    <li><Link href="#" className="hover:text-[var(--accent-primary)] transition-colors">Terms of Service</Link></li>
                    <li><Link href="#" className="hover:text-[var(--accent-primary)] transition-colors">Cookie Policy</Link></li>
                    <li><Link href="#" className="hover:text-[var(--accent-primary)] transition-colors">Refund Policy</Link></li>
                 </ul>
              </div>
           </div>
           
           <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm" style={{ borderColor: 'var(--border-soft)', color: 'var(--text-tertiary)' }}>
              <div>© 2026 Aushutosh Education Inc. All rights reserved.</div>
              <div className="flex gap-4">
                 <Link href="#" className="hover:text-[var(--text-primary)] transition-colors">Twitter</Link>
                 <Link href="#" className="hover:text-[var(--text-primary)] transition-colors">GitHub</Link>
                 <Link href="#" className="hover:text-[var(--text-primary)] transition-colors">LinkedIn</Link>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}
