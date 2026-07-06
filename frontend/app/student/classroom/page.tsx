"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ClassroomPage() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock Curriculum Data
  const curriculum = [
    {
      title: "Module 1: Introduction",
      duration: "45m",
      lessons: [
        { title: "Welcome to the course", time: "5:20", completed: true, type: "video" },
        { title: "Setting up your environment", time: "15:45", completed: true, type: "video" },
        { title: "Course Resources & Slides", time: "2:00", completed: true, type: "doc" }
      ]
    },
    {
      title: "Module 2: React Core Concepts",
      duration: "2h 15m",
      lessons: [
        { title: "Understanding the Virtual DOM", time: "12:30", completed: true, type: "video", active: true },
        { title: "State vs Props", time: "18:20", completed: false, type: "video" },
        { title: "Component Lifecycle", time: "22:15", completed: false, type: "video" },
        { title: "Module 2 Quiz", time: "10:00", completed: false, type: "quiz" }
      ]
    },
    {
      title: "Module 3: Advanced Hooks",
      duration: "3h 40m",
      lessons: [
        { title: "Deep dive into useEffect", time: "25:00", completed: false, type: "video", locked: true },
        { title: "Custom Hooks architecture", time: "31:15", completed: false, type: "video", locked: true },
        { title: "Context API & State Management", time: "45:00", completed: false, type: "video", locked: true }
      ]
    }
  ];

  return (
    <div className="h-screen bg-[#0B0F19] font-sans text-slate-300 selection:bg-violet-500/30 overflow-hidden flex flex-col animate-in fade-in duration-500">
      
      {/* --- THEATER MODE HEADER --- */}
      <header className="h-16 bg-[#0B0F19] border-b border-white/5 flex items-center justify-between px-6 shrink-0 z-20">
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            Dashboard
          </Link>
          <div className="w-px h-6 bg-white/10 hidden md:block"></div>
          <h1 className="text-sm md:text-base font-bold text-white line-clamp-1">
            Full-Stack React & TypeScript <span className="text-slate-500 font-medium ml-2">Lesson 4: Understanding the Virtual DOM</span>
          </h1>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-3">
            <div className="w-32 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: '25%' }}></div>
            </div>
            <span className="text-xs font-bold text-slate-400">25% Complete</span>
          </div>
          <button className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white font-bold text-sm shadow-md">
            SG
          </button>
        </div>
      </header>

      {/* --- MAIN WORKSPACE --- */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Column: Video & Info */}
        <div className="flex-1 flex flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden relative">
          
          {/* Video Player Area */}
          <div className="w-full bg-black aspect-video relative group">
            {/* Video Placeholder Image */}
<Image 
  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop" 
  alt="Video placeholder" 
  fill 
  className="object-cover opacity-50" 
/>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Big Play Button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 bg-violet-600/90 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(139,92,246,0.5)] cursor-pointer pointer-events-auto hover:scale-110 transition-transform">
                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
              </div>
            </div>

            {/* Custom Controls Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-white/20 rounded-full mb-4 cursor-pointer relative">
                <div className="absolute top-0 left-0 h-full bg-violet-500 rounded-full" style={{ width: '35%' }}></div>
                <div className="absolute top-1/2 left-[35%] -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md transform scale-0 group-hover:scale-100 transition-transform"></div>
              </div>
              
              {/* Control Buttons */}
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-6">
                  <button className="hover:text-violet-400 transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg></button>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <span>04:22</span><span className="text-white/50">/</span><span className="text-white/50">12:30</span>
                  </div>
                  <button className="hover:text-violet-400 transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg></button>
                </div>
                <div className="flex items-center gap-6">
                  <button className="text-sm font-bold hover:text-violet-400 transition-colors">1x</button>
                  <button className="hover:text-violet-400 transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></button>
                  <button className="hover:text-violet-400 transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg></button>
                </div>
              </div>
            </div>
          </div>

          {/* Content & Tabs Area */}
          <div className="max-w-4xl mx-auto w-full p-8 pb-32">
            
            {/* Title & Actions */}
            <div className="flex items-start justify-between border-b border-white/5 pb-8 mb-8">
              <div>
                <h2 className="text-3xl font-extrabold text-white mb-2">Understanding the Virtual DOM</h2>
                <p className="text-slate-400 font-medium">React Core Concepts • Lesson 4</p>
              </div>
              <button className="px-6 py-3 bg-white/5 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/50 text-white font-bold rounded-xl border border-white/10 transition-all flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Mark Complete
              </button>
            </div>

            {/* Custom Tabs */}
            <div className="flex items-center gap-8 border-b border-white/5 mb-8">
              {['overview', 'qna', 'notes', 'resources'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm font-bold uppercase tracking-wider transition-colors relative ${activeTab === tab ? 'text-violet-400' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  {tab === 'qna' ? 'Q&A' : tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-500 rounded-t-full shadow-[0_-2px_10px_rgba(139,92,246,0.5)]"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="text-slate-400 leading-relaxed space-y-4">
              {activeTab === 'overview' && (
                <>
                  <p>In this lesson, we dive deep into one of React's most powerful features: The Virtual DOM. Understanding how React compares the virtual representation of your UI to the actual browser DOM is crucial for writing highly performant applications.</p>
                  <h3 className="text-white font-bold text-lg mt-6 mb-2">Key Takeaways:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>The diffing algorithm (Reconciliation).</li>
                    <li>Why manipulating the real DOM is expensive.</li>
                    <li>How React batches updates for maximum efficiency.</li>
                  </ul>
                </>
              )}
              {activeTab === 'qna' && (
                <div className="bg-[#131B2F] border border-white/5 rounded-2xl p-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">JD</div>
                    <div>
                      <h4 className="font-bold text-white">John Doe <span className="text-xs font-normal text-slate-500 ml-2">2 days ago</span></h4>
                      <p className="mt-1 mb-3">If the virtual DOM is just an object, how does it know when a state variable changes?</p>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/5 border-l-2 border-l-violet-500">
                        <h4 className="font-bold text-white text-sm">Instructor Aisha <span className="text-xs font-normal text-slate-500 ml-2">1 day ago</span></h4>
                        <p className="text-sm mt-1">Great question! React's `useState` hook specifically triggers a re-render function inside the core library whenever you call the setter function.</p>
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-6 py-3 border border-white/10 rounded-xl text-sm font-bold text-white hover:bg-white/5 transition-colors">Ask a new question</button>
                </div>
              )}
              {activeTab === 'notes' && (
                <textarea 
                  className="w-full h-64 bg-[#131B2F] border border-white/5 rounded-2xl p-6 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                  placeholder="Type your personal notes here. They save automatically and are locked to this timestamp..."
                ></textarea>
              )}
            </div>
          </div>

        </div>

        {/* Right Column: Curriculum Sidebar */}
        <div className="w-[350px] bg-[#0B0F19] border-l border-white/5 flex flex-col shrink-0 hidden lg:flex">
          <div className="p-6 border-b border-white/5">
            <h2 className="text-lg font-bold text-white">Course Content</h2>
          </div>
          
          <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full">
            {curriculum.map((module, i) => (
              <div key={i} className="border-b border-white/5">
                
                {/* Module Header */}
                <div className="p-4 bg-[#131B2F]/50 flex items-center justify-between cursor-pointer hover:bg-[#131B2F] transition-colors">
                  <div className="flex-1 pr-4">
                    <h3 className="font-bold text-slate-200 text-sm">{module.title}</h3>
                    <p className="text-xs font-medium text-slate-500 mt-1">{module.lessons.length} lessons • {module.duration}</p>
                  </div>
                  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>

                {/* Lesson List */}
                <div className="bg-[#0B0F19]">
                  {module.lessons.map((lesson, j) => (
                    <div 
                      key={j} 
                      className={`flex items-start gap-3 p-4 cursor-pointer transition-colors border-l-2 ${
                        lesson.active 
                          ? 'bg-violet-500/10 border-violet-500' 
                          : 'border-transparent hover:bg-white/[0.02]'
                      }`}
                    >
                      {/* Icon Logic */}
                      <div className="mt-0.5">
                        {lesson.completed ? (
                          <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        ) : lesson.locked ? (
                          <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                        ) : lesson.type === 'video' ? (
                          <svg className={`w-4 h-4 ${lesson.active ? 'text-violet-400' : 'text-slate-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        ) : lesson.type === 'doc' ? (
                          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        ) : (
                          <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        )}
                      </div>
                      <div>
                        <p className={`text-sm ${lesson.active ? 'font-bold text-white' : lesson.locked ? 'font-medium text-slate-600' : 'font-medium text-slate-300'}`}>
                          {lesson.title}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">{lesson.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}