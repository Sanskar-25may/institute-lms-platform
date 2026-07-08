"use client";
import { useState } from "react";
import Link from "next/link";

export default function ClassroomPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex flex-col lg:flex-row gap-6 pb-20" style={{ height: 'calc(100vh - 120px)' }}>
       
       {/* Left: Video & Content */}
       <div className="flex-1 flex flex-col min-h-0 space-y-6 overflow-y-auto no-scrollbar">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
             <Link href="/student/courses" className="hover:text-[var(--text-primary)]">My Courses</Link>
             <span>/</span>
             <span>Full-Stack React & TypeScript</span>
             <span>/</span>
             <span style={{ color: 'var(--text-primary)' }}>Module 4</span>
          </div>

          {/* Video Player Area */}
          <div className="w-full aspect-video rounded-[24px] bg-black relative flex items-center justify-center overflow-hidden shadow-2xl group border" style={{ borderColor: 'var(--border-soft)' }}>
             {/* Fake Video Controls */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <div className="flex items-center gap-4 text-txt-primary">
                   <button className="hover:text-[var(--accent-primary)]"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg></button>
                   <div className="flex-1 h-1.5 bg-white/30 rounded-full cursor-pointer relative">
                      <div className="absolute top-0 left-0 h-full bg-[var(--accent-primary)] rounded-full w-1/3"></div>
                      <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow" style={{ left: '33%' }}></div>
                   </div>
                   <span className="text-sm font-mono">04:12 / 12:45</span>
                   <button><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg></button>
                </div>
             </div>
             
             {/* Play Button Overlay */}
             <div className="w-20 h-20 rounded-full bg-surf-hover backdrop-blur-md flex items-center justify-center border border-bdr-med text-txt-primary shadow-2xl cursor-pointer hover:scale-110 hover:bg-white/20 transition-all">
                <svg className="w-10 h-10 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
             </div>
          </div>

          {/* Title & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
             <div>
                <h1 className="heading-font text-2xl font-bold mb-1">4.2 Implementing Next.js Middleware for Auth</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Module 4: Authentication & Security</p>
             </div>
             <div className="flex gap-2 shrink-0">
                <button className="btn-secondary px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
                   Prev
                </button>
                <button className="btn-primary px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                   Next
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                </button>
             </div>
          </div>

          {/* Tabs */}
          <div className="border-b flex gap-8 pt-4" style={{ borderColor: 'var(--border-soft)' }}>
             {['overview', 'notes', 'resources', 'q&a'].map(tab => (
                <button 
                   key={tab}
                   onClick={() => setActiveTab(tab)}
                   className={`pb-3 font-semibold text-sm capitalize relative transition-colors ${activeTab === tab ? 'text-[var(--accent-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
                >
                   {tab}
                   {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--accent-primary)]"></div>}
                </button>
             ))}
          </div>

          {/* Tab Content */}
          <div className="py-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
             {activeTab === 'overview' && (
                <div className="space-y-4">
                   <p>In this lesson, we implement route protection using Next.js Middleware. You will learn how to intercept requests, verify JWT tokens on the edge, and redirect unauthenticated users before rendering the page.</p>
                   <h3 className="font-bold text-lg mt-6 text-[var(--text-primary)]">Key Concepts:</h3>
                   <ul className="list-disc pl-5 space-y-2">
                      <li>Edge computing constraints in Next.js Middleware</li>
                      <li>Verifying JWTs using jose (since jsonwebtoken is Node-only)</li>
                      <li>Pattern matching paths with NextRequest</li>
                   </ul>
                </div>
             )}
             {activeTab === 'notes' && (
                <div className="p-4 rounded-xl" style={{ background: 'var(--bg-surface)' }}>
                   <textarea className="w-full bg-transparent resize-none focus:outline-none" rows={10} placeholder="Take your notes here... They will automatically sync to your profile."></textarea>
                </div>
             )}
          </div>
       </div>

       {/* Right: Sidebar Syllabus */}
       <div className="w-full lg:w-96 shrink-0 flex flex-col min-h-0 rounded-[24px] border" style={{ background: 'var(--bg-card)', borderColor: 'var(--border-soft)' }}>
          <div className="p-6 border-b" style={{ borderColor: 'var(--border-soft)' }}>
             <h3 className="font-bold mb-2">Course Progress</h3>
             <div className="flex items-center gap-3">
                <div className="flex-1 h-2 rounded-full bg-black/5 dark:bg-surf-elevated overflow-hidden">
                   <div className="h-full bg-[var(--accent-primary)] rounded-full" style={{ width: '68%' }}></div>
                </div>
                <span className="text-xs font-bold">68%</span>
             </div>
          </div>
          
          <div className="flex-1 overflow-y-auto no-scrollbar p-2">
             {/* Section 1 - Completed */}
             <div className="mb-2">
                <div className="px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-black/5 dark:hover:bg-surf-elevated rounded-lg">
                   <span className="font-bold text-sm text-[var(--text-primary)]">1. Core Fundamentals</span>
                   <span className="text-xs font-semibold text-[var(--text-tertiary)]">8/8</span>
                </div>
             </div>

             {/* Section 4 - Active */}
             <div className="mb-2">
                <div className="px-4 py-3 flex justify-between items-center cursor-pointer rounded-lg bg-black/5 dark:bg-surf-elevated">
                   <span className="font-bold text-sm text-[var(--text-primary)]">4. Auth & Security</span>
                   <span className="text-xs font-semibold text-[var(--text-tertiary)]">1/4</span>
                </div>
                <div className="py-2 pl-2 border-l-2 ml-4 mt-2 space-y-1" style={{ borderColor: 'var(--border-soft)' }}>
                   <div className="flex items-start gap-3 p-2 rounded-lg cursor-pointer text-sm text-[var(--text-secondary)]">
                      <svg className="w-4 h-4 shrink-0 mt-0.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      <span>4.1 Introduction to JWTs</span>
                   </div>
                   <div className="flex items-start gap-3 p-2 rounded-lg cursor-pointer text-sm font-semibold text-[var(--accent-primary)] bg-[var(--accent-primary)]/10">
                      <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      <span>4.2 Implementing Next.js Middleware</span>
                   </div>
                   <div className="flex items-start gap-3 p-2 rounded-lg cursor-pointer text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                      <svg className="w-4 h-4 shrink-0 mt-0.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                      <span>4.3 OAuth with GitHub</span>
                   </div>
                   <div className="flex items-start gap-3 p-2 rounded-lg cursor-pointer text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                      <svg className="w-4 h-4 shrink-0 mt-0.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                      <span>4.4 Role-Based Access Control</span>
                   </div>
                </div>
             </div>

             {/* Section 5 - Locked */}
             <div className="mb-2 opacity-50 pointer-events-none">
                <div className="px-4 py-3 flex justify-between items-center cursor-pointer rounded-lg">
                   <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                      <span className="font-bold text-sm text-[var(--text-primary)]">5. Database Design</span>
                   </div>
                   <span className="text-xs font-semibold">0/12</span>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
}