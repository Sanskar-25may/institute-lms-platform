"use client";

import Link from "next/link";
import { useState } from "react";

export default function CourseDetailsPage() {
  // In a real app, you would fetch this data from your PostgreSQL backend 
  // using the [course_id] from the URL parameters.
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-[#DDE3F9] font-sans text-[#1D2159] selection:bg-[#3B4CE3] selection:text-white pb-24">
      
      {/* Unified Navigation Bar */}
      <nav className="w-full flex items-center justify-between px-8 lg:px-16 py-6 max-w-[1600px] mx-auto">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <div className="flex flex-col leading-none">
            <span className="text-[10px] font-bold text-[#3B4CE3] tracking-widest uppercase">Unlimited Powerfull</span>
            <span className="text-3xl font-extrabold text-[#3B4CE3] tracking-tight flex items-center gap-1">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>
              LEARNING
            </span>
          </div>
        </Link>
        
        <div className="hidden lg:flex items-center gap-10 font-bold text-[15px]">
          <Link href="/" className="text-[#1D2159] hover:text-[#F1592A] transition-colors">Home</Link>
          <Link href="/courses" className="text-[#F1592A] cursor-pointer">Courses</Link>
          <Link href="/#blog" className="text-[#1D2159] hover:text-[#F1592A] transition-colors">Blog</Link>
          <Link href="/#about" className="text-[#1D2159] hover:text-[#F1592A] transition-colors">About Us</Link>
        </div>

        <div>
          <Link href="/" className="px-8 py-3.5 bg-[#3B4CE3] text-white font-bold text-sm rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-300/50 transition-all uppercase tracking-wider inline-block">
            Sign In
          </Link>
        </div>
      </nav>

      {/* Dark Hero Section */}
      <div className="bg-[#1D2159] text-white pt-16 pb-32">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-[#F1592A] px-3 py-1 rounded-md text-xs font-extrabold uppercase tracking-wider">Web Development</span>
              <span className="flex items-center gap-1 text-yellow-400 text-sm font-bold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                4.8 (2,451 reviews)
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Full-Stack MERN Mastery: From Zero to Deployment
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl">
              Master MongoDB, Express, React, and Node.js by building real-world enterprise applications. The ultimate bootcamp for modern web developers.
            </p>
            <div className="flex items-center gap-4 text-sm font-medium text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold">SK</div>
                Created by <span className="text-white font-bold underline decoration-[#3B4CE3] decoration-2">Mr. Satish Kumar</span>
              </div>
              <span>•</span>
              <span>Last updated June 2026</span>
            </div>
          </div>

          {/* Video Preview Placeholder */}
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-black/50 border border-white/10 group cursor-pointer aspect-video bg-slate-800">
            <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop" alt="Course Preview" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#3B4CE3] shadow-lg">
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-0 w-full text-center font-bold text-white tracking-widest uppercase text-sm">Preview Course</div>
          </div>
        </div>
      </div>

      {/* Main Content & Sticky Sidebar Layout */}
      <div className="max-w-[1200px] mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-12 -mt-16">
        
        {/* Left Column: Course Details */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* What you'll learn */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl shadow-[#1D2159]/5 border border-white/50">
            <h2 className="text-2xl font-extrabold mb-6">What you'll learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Build full-stack React applications from scratch",
                "Design RESTful APIs with Node.js and Express",
                "Manage complex databases with MongoDB",
                "Implement JWT authentication and security routing",
                "Deploy applications to AWS and Vercel",
                "Master React Hooks, Context API, and state management"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#20C997] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  <span className="text-sm font-medium text-[#1D2159]/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum / Syllabus */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl shadow-[#1D2159]/5 border border-white/50">
            <h2 className="text-2xl font-extrabold mb-2">Course Curriculum</h2>
            <p className="text-sm font-medium text-slate-500 mb-8">12 sections • 142 lectures • 32h 15m total length</p>
            
            <div className="space-y-4">
              {[
                { title: "Module 1: Introduction to Web Development & HTML/CSS", lectures: "12 lectures", time: "2h 15m" },
                { title: "Module 2: Advanced JavaScript (ES6+)", lectures: "18 lectures", time: "4h 30m" },
                { title: "Module 3: React 18 Core Concepts", lectures: "24 lectures", time: "6h 45m" },
                { title: "Module 4: Node.js & Express Fundamentals", lectures: "15 lectures", time: "3h 20m" },
                { title: "Module 5: MongoDB & Mongoose Architecture", lectures: "20 lectures", time: "5h 10m" },
              ].map((module, i) => (
                <div key={i} className="border border-slate-200 rounded-2xl p-5 hover:border-[#3B4CE3] transition-colors cursor-pointer group flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#EDF0FA] rounded-xl flex items-center justify-center text-[#3B4CE3] font-bold group-hover:bg-[#3B4CE3] group-hover:text-white transition-colors">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1D2159] text-base group-hover:text-[#3B4CE3] transition-colors">{module.title}</h3>
                      <p className="text-xs font-medium text-slate-500 mt-0.5">{module.lectures}</p>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-slate-400">{module.time}</div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-4 border-2 border-[#EDF0FA] rounded-xl font-bold text-[#3B4CE3] hover:bg-[#EDF0FA] transition-colors">
              View all 12 modules
            </button>
          </div>

        </div>

        {/* Right Column: Sticky Pricing Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-[32px] p-8 shadow-2xl shadow-[#1D2159]/10 border border-white/50 sticky top-32">
            
            <div className="text-center pb-8 border-b border-slate-100 mb-8">
              <span className="text-5xl font-extrabold text-[#1D2159] tracking-tight">$49.99</span>
              <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wider">One-time payment</p>
            </div>

            <div className="space-y-4 mb-8">
              <button className="w-full bg-[#F1592A] text-white font-extrabold py-4 rounded-xl hover:bg-[#d84b20] transition-colors shadow-lg shadow-orange-500/30 text-lg">
                Enroll Now
              </button>
              <p className="text-center text-xs font-bold text-slate-400">30-Day Money-Back Guarantee</p>
            </div>

            <div className="space-y-4 text-sm font-medium text-[#1D2159]/80">
              <h4 className="font-extrabold text-[#1D2159] mb-4 uppercase tracking-wider text-xs">This course includes:</h4>
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-[#3B4CE3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                32 hours on-demand video
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-[#3B4CE3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                14 Articles & 8 Resources
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-[#3B4CE3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                Access on mobile and TV
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-[#3B4CE3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                Certificate of completion
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-[#3B4CE3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                Direct Mentor Q&A
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}