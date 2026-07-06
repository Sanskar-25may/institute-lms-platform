"use client";

import Link from "next/link";
import { useState } from "react";

export default function CourseBuilderCMS() {
  const [modules, setModules] = useState([
    { id: 1, title: "Introduction & Setup", lessons: ["Welcome to the course", "Environment Setup"] }
  ]);

  const addModule = () => {
    setModules([...modules, { id: Date.now(), title: "New Module", lessons: [] }]);
  };

  return (
    <div className="max-w-[1200px] mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      
      {/* --- CMS HEADER & ACTIONS --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#131B2F] border border-white/5 p-6 rounded-2xl shadow-lg">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-1">
            <Link href="/instructor" className="hover:text-violet-400 transition-colors">Instructor</Link>
            <span>/</span>
            <span className="text-violet-400">Create Course</span>
          </div>
          <h1 className="text-2xl font-extrabold text-white">Course Builder</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-lg transition-colors border border-white/10 text-sm">
            Save Draft
          </button>
          <button className="px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-violet-900/50 text-sm flex items-center gap-2">
            Publish Course
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </button>
        </div>
      </div>

      {/* --- TWO COLUMN EDITOR LAYOUT --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: Main Content Editor */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Basic Info Card */}
          <div className="bg-[#131B2F] border border-white/5 rounded-[24px] p-8 shadow-lg">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-xs">1</span>
              Basic Information
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Course Title</label>
                <input 
                  type="text" 
                  placeholder="e.g. Advanced System Design" 
                  className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Short Subtitle</label>
                <input 
                  type="text" 
                  placeholder="A quick summary of what students will learn" 
                  className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Detailed Description</label>
                <textarea 
                  rows={6}
                  placeholder="What does this course cover? Who is it for?" 
                  className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Curriculum Builder Card */}
          <div className="bg-[#131B2F] border border-white/5 rounded-[24px] p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-xs">2</span>
                Curriculum Builder
              </h2>
            </div>

            <div className="space-y-6">
              {modules.map((mod, index) => (
                <div key={mod.id} className="border border-white/10 rounded-xl bg-[#0B0F19] overflow-hidden">
                  {/* Module Header */}
                  <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                    <div className="flex items-center gap-3 flex-1">
                      <svg className="w-5 h-5 text-slate-500 cursor-move" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path></svg>
                      <span className="text-sm font-bold text-slate-500">Module {index + 1}:</span>
                      <input 
                        type="text" 
                        defaultValue={mod.title}
                        className="bg-transparent border-none text-white font-bold text-sm focus:outline-none focus:ring-1 focus:ring-violet-500 rounded px-2 py-1 flex-1"
                      />
                    </div>
                    <button className="text-slate-500 hover:text-rose-400 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                  </div>
                  
                  {/* Lessons List */}
                  <div className="p-4 space-y-2">
                    {mod.lessons.map((lesson, lIndex) => (
                      <div key={lIndex} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5 group">
                        <svg className="w-4 h-4 text-slate-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                        <span className="text-sm text-slate-300 flex-1">{lesson}</span>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                          <button className="text-slate-400 hover:text-white"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg></button>
                        </div>
                      </div>
                    ))}
                    
                    {/* Add Lesson Button */}
                    <button className="flex items-center gap-2 text-xs font-bold text-violet-400 hover:text-violet-300 transition-colors p-2 mt-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                      Add Lesson
                    </button>
                  </div>
                </div>
              ))}

              <button 
                onClick={addModule}
                className="w-full py-4 border-2 border-dashed border-white/10 hover:border-violet-500/50 rounded-xl text-sm font-bold text-slate-400 hover:text-violet-400 transition-colors flex items-center justify-center gap-2 bg-[#0B0F19]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                Create New Module
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Settings & Media */}
        <div className="lg:col-span-1 space-y-8">
          
          {/* Media Upload Card */}
          <div className="bg-[#131B2F] border border-white/5 rounded-[24px] p-6 shadow-lg">
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-xs text-slate-400">Course Thumbnail</h3>
            
            <div className="aspect-video bg-[#0B0F19] border-2 border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center text-center p-6 hover:border-violet-500/50 transition-colors cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
              </div>
              <p className="text-sm font-bold text-white">Click to upload</p>
              <p className="text-xs text-slate-500 mt-1">1920x1080 (16:9) recommended</p>
            </div>
          </div>

          {/* Configuration Card */}
          <div className="bg-[#131B2F] border border-white/5 rounded-[24px] p-6 shadow-lg space-y-6">
            
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Category</label>
              <div className="relative">
                <select className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-violet-500 transition-colors cursor-pointer">
                  <option value="">Select a category</option>
                  <option value="web">Web Development</option>
                  <option value="data">Data Science</option>
                  <option value="ai">Artificial Intelligence</option>
                  <option value="design">Design</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Difficulty Level</label>
              <div className="grid grid-cols-3 gap-2">
                <button className="py-2 text-xs font-bold bg-white/5 border border-white/10 rounded-lg text-white hover:border-violet-500 transition-colors">Beginner</button>
                <button className="py-2 text-xs font-bold bg-violet-600 border border-violet-500 rounded-lg text-white">Intermediate</button>
                <button className="py-2 text-xs font-bold bg-white/5 border border-white/10 rounded-lg text-white hover:border-violet-500 transition-colors">Advanced</button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Pricing (USD)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-slate-400 font-bold">$</span>
                </div>
                <input 
                  type="number" 
                  placeholder="0.00" 
                  className="w-full bg-[#0B0F19] border border-white/10 rounded-xl pl-8 pr-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
            </div>

          </div>

          {/* Danger Zone */}
          <div className="bg-[#131B2F] border border-white/5 rounded-[24px] p-6 shadow-lg">
            <h3 className="font-bold text-rose-400 mb-2 text-sm">Danger Zone</h3>
            <p className="text-xs text-slate-500 mb-4">Deleting this course will permanently remove all associated curriculum and student data.</p>
            <button className="w-full py-3 rounded-xl border border-rose-500/30 text-rose-400 text-sm font-bold hover:bg-rose-500/10 transition-colors">
              Delete Course
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}