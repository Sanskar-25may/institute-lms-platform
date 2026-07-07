import Link from "next/link";

export async function generateStaticParams() {
  return [
    { course_id: 'full-stack-react' },
    { course_id: 'system-design' },
    { course_id: 'applied-ml' },
    { course_id: 'ui-ux-foundations' },
    { course_id: 'node-scaling' },
    { course_id: 'figma-react-native' }
  ];
}

export default async function CourseDetailPage({ params }: { params: Promise<{ course_id: string }> }) {
  const { course_id } = await params;
  
  // Format title from id
  const title = course_id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="min-h-screen pb-32 animate-fade-in-up">
       {/* Breadcrumb */}
       <div className="pt-24 pb-6 border-b" style={{ borderColor: 'var(--border-soft)', background: 'var(--bg-base)' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-sm font-medium flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
             <Link href="/" className="hover:opacity-80">Home</Link>
             <span>/</span>
             <Link href="/courses" className="hover:opacity-80">Courses</Link>
             <span>/</span>
             <span style={{ color: 'var(--text-primary)' }}>{title}</span>
          </div>
       </div>

       {/* Hero Section */}
       <section className="py-16 relative overflow-hidden" style={{ background: 'var(--bg-surface)' }}>
          <div className="absolute inset-0 dot-grid opacity-30"></div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
             
             <div className="col-span-2">
                <div className="flex gap-2 mb-6">
                   <span className="badge-warning text-xs font-bold px-2.5 py-1 rounded-md">Bestseller</span>
                   <span className="text-xs font-bold px-2.5 py-1 rounded-md" style={{ background: 'var(--bg-elevated)', color: 'var(--text-primary)', border: '1px solid var(--border-soft)' }}>Intermediate</span>
                </div>
                <h1 className="heading-font text-4xl md:text-5xl font-bold mb-6">{title}</h1>
                <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>Master the modern tech stack by building production-ready applications from scratch. Stop watching tutorials and start shipping real code.</p>
                
                <div className="flex flex-wrap items-center gap-6 text-sm font-medium mb-10" style={{ color: 'var(--text-secondary)' }}>
                   <div className="flex items-center gap-2">
                      <div className="flex text-amber-500">★★★★★</div>
                      <span className="font-bold" style={{ color: 'var(--text-primary)' }}>4.9</span>
                      <span>(2,401 ratings)</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                      12,480 students
                   </div>
                   <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Last updated Jan 2026
                   </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                   <Link href="/auth" className="btn-primary px-8 py-4 rounded-xl text-lg flex items-center gap-2">
                      Enroll Now — $149
                   </Link>
                   <button className="btn-secondary px-8 py-4 rounded-xl text-lg flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                      Preview Course
                   </button>
                </div>
             </div>

             {/* Video Preview Card */}
             <div className="col-span-1">
                <div className="w-full aspect-video rounded-2xl overflow-hidden relative shadow-2xl group cursor-pointer border" style={{ borderColor: 'var(--border-soft)', background: 'var(--bg-card)' }}>
                   <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md bg-white/20 border border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform">
                         <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                      </div>
                   </div>
                   <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white font-medium text-sm drop-shadow-md">
                      <span>Preview this course</span>
                      <span>04:12</span>
                   </div>
                </div>
             </div>

          </div>
       </section>

       {/* Main Content */}
       <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-16">
             
             <div className="col-span-2 space-y-16">
                
                {/* What you'll learn */}
                <div className="p-8 rounded-[24px]" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-soft)' }}>
                   <h2 className="heading-font text-2xl font-bold mb-6">What you'll learn</h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                         "Build production-ready applications from scratch",
                         "Implement robust CI/CD pipelines",
                         "Design scalable database schemas",
                         "Master state management and data fetching",
                         "Write comprehensive test suites",
                         "Deploy applications to serverless infrastructure",
                         "Implement authentication and authorization",
                         "Optimize performance and SEO"
                      ].map((item, i) => (
                         <div key={i} className="flex gap-3 items-start">
                            <div className="mt-1 shrink-0">
                               <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                         </div>
                      ))}
                   </div>
                </div>

                {/* Course Content */}
                <div>
                   <h2 className="heading-font text-2xl font-bold mb-2">Course Content</h2>
                   <div className="flex items-center gap-4 text-sm font-medium mb-6" style={{ color: 'var(--text-secondary)' }}>
                      <span>4 sections</span>
                      <span>•</span>
                      <span>42 lessons</span>
                      <span>•</span>
                      <span>18h 30m total length</span>
                   </div>
                   
                   <div className="border rounded-2xl overflow-hidden" style={{ borderColor: 'var(--border-soft)', background: 'var(--bg-surface)' }}>
                      {[
                         { title: "Getting Started with the Fundamentals", lessons: 8, time: "2h 15m", expanded: true },
                         { title: "Building the Core Infrastructure", lessons: 12, time: "5h 40m", expanded: false },
                         { title: "Advanced Patterns and Architecture", lessons: 14, time: "6h 20m", expanded: false },
                         { title: "Deployment and CI/CD Pipeline", lessons: 8, time: "4h 15m", expanded: false }
                      ].map((section, i) => (
                         <div key={i} className="border-b last:border-b-0" style={{ borderColor: 'var(--border-soft)' }}>
                            <div className="px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-black/5 transition-colors">
                               <div className="flex items-center gap-3">
                                  <svg className={`w-5 h-5 transition-transform ${section.expanded ? 'rotate-180' : ''}`} style={{ color: 'var(--text-tertiary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                  <h3 className="font-bold">{section.title}</h3>
                               </div>
                               <span className="text-xs font-semibold" style={{ color: 'var(--text-tertiary)' }}>{section.lessons} lessons • {section.time}</span>
                            </div>
                            
                            {section.expanded && (
                               <div className="px-6 py-2 border-t bg-black/5" style={{ borderColor: 'var(--border-soft)' }}>
                                  {[
                                     { name: "Introduction to the Course", time: "04:12", preview: true },
                                     { name: "Setting up the Development Environment", time: "12:45", preview: true },
                                     { name: "Architecture Overview", time: "18:20", preview: false },
                                     { name: "First Code Challenge", time: "05:00", preview: false }
                                  ].map((lesson, j) => (
                                     <div key={j} className="py-3 flex items-center justify-between group">
                                        <div className="flex items-center gap-3">
                                           {lesson.preview ? (
                                              <svg className="w-4 h-4 text-[var(--accent-primary)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                                           ) : (
                                              <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                           )}
                                           <span className={`text-sm ${lesson.preview ? 'text-[var(--accent-primary)] group-hover:underline cursor-pointer' : ''}`} style={{ color: lesson.preview ? 'var(--accent-primary)' : 'var(--text-secondary)' }}>
                                              {lesson.name}
                                           </span>
                                        </div>
                                        <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{lesson.time}</span>
                                     </div>
                                  ))}
                               </div>
                            )}
                         </div>
                      ))}
                   </div>
                </div>

             </div>
             
             {/* Right Sidebar */}
             <div className="col-span-1 space-y-8">
                
                {/* Instructor Card */}
                <div className="p-6 rounded-[24px]" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-soft)' }}>
                   <h3 className="font-bold mb-6 uppercase tracking-wider text-xs" style={{ color: 'var(--text-tertiary)' }}>Your Instructor</h3>
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center font-bold text-xl text-white shadow-lg">
                         AV
                      </div>
                      <div>
                         <div className="font-bold text-lg">Aisha Verma</div>
                         <div className="text-sm font-medium" style={{ color: 'var(--accent-primary)' }}>Senior Staff Engineer</div>
                      </div>
                   </div>
                   <div className="flex gap-4 text-sm font-medium mb-4 pb-4 border-b" style={{ borderColor: 'var(--border-soft)', color: 'var(--text-secondary)' }}>
                      <div className="flex items-center gap-1"><svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg> 4.9 Instructor Rating</div>
                      <div className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg> 32k Students</div>
                   </div>
                   <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      Former Principal Engineer at Vercel. I specialize in teaching complex architecture concepts by breaking them down into digestible, project-based steps.
                   </p>
                </div>

                {/* Requirements */}
                <div className="p-6 rounded-[24px]" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-soft)' }}>
                   <h3 className="font-bold mb-4 uppercase tracking-wider text-xs" style={{ color: 'var(--text-tertiary)' }}>Requirements</h3>
                   <ul className="space-y-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <li className="flex gap-3"><span className="text-[var(--text-tertiary)]">•</span> Basic understanding of JavaScript and React</li>
                      <li className="flex gap-3"><span className="text-[var(--text-tertiary)]">•</span> Node.js installed on your machine</li>
                      <li className="flex gap-3"><span className="text-[var(--text-tertiary)]">•</span> A passion for building real products</li>
                   </ul>
                </div>
                
             </div>

          </div>
       </section>

       {/* Mobile Sticky CTA */}
       <div className="fixed bottom-0 left-0 right-0 p-4 border-t lg:hidden z-50 glass-strong" style={{ borderColor: 'var(--border-soft)' }}>
          <Link href="/auth" className="btn-primary w-full py-4 rounded-xl text-center font-bold text-lg block">
             Enroll Now — $149
          </Link>
       </div>
    </div>
  );
}