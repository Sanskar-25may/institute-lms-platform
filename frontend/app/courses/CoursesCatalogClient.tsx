"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CoursesCatalogClient({ cmsData, courses }: { cmsData: any, courses: any[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Courses");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.tags.some((t: string) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFilter = activeFilter === "All Courses" || course.level === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen pt-24 pb-20">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 animate-fade-in-up">
             <div>
               <h1 className="heading-font text-4xl md:text-5xl font-bold mb-4">{cmsData?.heading || "Course Catalog"}</h1>
               <p className="text-lg max-w-xl" style={{ color: 'var(--text-secondary)' }}>{cmsData?.subtitle || "Master modern engineering skills with project-based courses taught by industry veterans."}</p>
             </div>
             
             <div className="relative w-full md:w-72 shrink-0">
               <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" style={{ color: 'var(--text-tertiary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
               <input 
                 type="text" 
                 placeholder="Search courses..." 
                 className="input-premium w-full !pl-12 py-3 rounded-xl text-sm"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
               />
             </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-12 animate-fade-in-up delay-100">
             {["All Courses", "Beginner", "Intermediate", "Advanced"].map(filter => (
                <button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className="px-5 py-2 rounded-full text-sm font-semibold transition-colors" 
                  style={{ 
                    background: activeFilter === filter ? 'var(--text-primary)' : 'var(--bg-surface)', 
                    color: activeFilter === filter ? 'var(--bg-base)' : 'var(--text-primary)',
                    border: activeFilter === filter ? '1px solid transparent' : '1px solid var(--border-soft)' 
                  }}
                >
                  {filter}
                </button>
             ))}
          </div>

          {filteredCourses.length === 0 ? (
            <div className="text-center py-20 animate-fade-in-up delay-200" style={{ color: 'var(--text-secondary)' }}>
              No courses found matching your criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up delay-200">
               {filteredCourses.map((course, i) => (
                 <Link href={`/courses/${course.id}`} key={course.id} className="group block h-full">
                    <div className="h-full rounded-[24px] border overflow-hidden flex flex-col card-hover transition-all duration-300 relative" style={{ borderColor: 'var(--border-soft)', background: 'var(--bg-card)' }}>
                       {/* Colored top banner replacing Image for demo */}
                       <div className={`h-48 w-full bg-gradient-to-br ${course.color} relative`}>
                          <div className="absolute inset-0 bg-black/10"></div>
                          {/* Badges */}
                          <div className="absolute top-4 left-4 flex gap-2">
                             {course.badge && <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${course.badgeClass}`}>{course.badge}</span>}
                             <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-white/20 text-white backdrop-blur-md border border-white/20">{course.level}</span>
                          </div>
                       </div>
                       
                       <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center justify-between mb-3">
                             <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-surf-elevated flex items-center justify-center text-[10px] font-bold border border-bdr-soft">
                                   {course.instructor.split(' ').map((n: string) => n[0]).join('')}
                                </div>
                                <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>{course.instructor}</span>
                             </div>
                             <div className="flex items-center gap-1 text-xs font-bold text-amber-400">
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                {course.rating}
                             </div>
                          </div>
                          
                          <h3 className="heading-font text-xl font-bold mb-2 group-hover:text-[var(--accent-primary)] transition-colors">{course.title}</h3>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                             {course.tags.map((tag: string, j: number) => (
                                <span key={j} className="text-xs px-2 py-1 rounded-md" style={{ background: 'var(--bg-surface)', color: 'var(--text-tertiary)' }}>{tag}</span>
                             ))}
                          </div>
                          
                          <div className="mt-auto pt-4 border-t flex items-center justify-between" style={{ borderColor: 'var(--border-soft)' }}>
                             <span className="font-mono text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{course.price}</span>
                             <span className="text-sm font-semibold flex items-center gap-1 group-hover:text-[var(--accent-primary)] transition-colors" style={{ color: 'var(--text-secondary)' }}>
                                Enroll
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                             </span>
                          </div>
                       </div>
                    </div>
                 </Link>
               ))}
            </div>
          )}
       </div>
    </div>
  );
}
