"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MyCoursesPage() {
  const [activeTab, setActiveTab] = useState("active");

  const activeCourses = [
    {
      id: 1,
      title: "Full-Stack React & TypeScript",
      instructor: "Aisha Verma",
      progress: 68,
      nextLesson: "Lesson 14: Server functions",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop",
      color: "bg-violet-500"
    },
    {
      id: 2,
      title: "System Design Deep Dive",
      instructor: "Rahul Iyer",
      progress: 32,
      nextLesson: "Lesson 8: Caching strategies",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
      color: "bg-fuchsia-500"
    },
    {
      id: 3,
      title: "Applied Machine Learning",
      instructor: "Marcus Chen",
      progress: 12,
      nextLesson: "Lesson 3: Regression basics",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
      color: "bg-emerald-500"
    }
  ];

  const completedCourses = [
    {
      id: 4,
      title: "UI/UX Design Foundations",
      instructor: "Priya Nair",
      progress: 100,
      completedDate: "June 12, 2026",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop",
      color: "bg-emerald-500"
    },
    {
      id: 5,
      title: "Introduction to HTML & CSS",
      instructor: "Aisha Verma",
      progress: 100,
      completedDate: "May 4, 2026",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=600&auto=format&fit=crop",
      color: "bg-emerald-500"
    }
  ];

  const displayCourses = activeTab === "active" ? activeCourses : completedCourses;

  return (
    <div className="max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      
      {/* --- HEADER & FILTERS --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2">My Learning</h1>
          <p className="text-slate-400 font-medium">Track your progress and pick up where you left off.</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-[#131B2F] p-1 rounded-xl border border-white/5 flex">
            <button 
              onClick={() => setActiveTab("active")}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                activeTab === "active" ? "bg-white/10 text-white shadow-sm" : "text-slate-500 hover:text-slate-300"
              }`}
            >
              In Progress ({activeCourses.length})
            </button>
            <button 
              onClick={() => setActiveTab("completed")}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                activeTab === "completed" ? "bg-white/10 text-white shadow-sm" : "text-slate-500 hover:text-slate-300"
              }`}
            >
              Completed ({completedCourses.length})
            </button>
          </div>
        </div>
      </div>

      {/* --- COURSE GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayCourses.map((course) => (
          <div key={course.id} className="bg-[#131B2F] rounded-2xl border border-white/5 overflow-hidden hover:border-violet-500/30 transition-all duration-300 group flex flex-col h-full shadow-lg shadow-black/20">
            
            {/* Thumbnail */}
            <div className="h-48 relative overflow-hidden bg-slate-800">
  <Image 
    src={course.image} 
    alt={course.title} 
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
  />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131B2F] to-transparent opacity-80"></div>
              
              {/* Play Button Overlay (Only for active courses) */}
              {activeTab === "active" && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-16 h-16 bg-violet-600/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-lg">
                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                Instructor: {course.instructor}
              </p>
              <h3 className="text-xl font-bold text-white mb-6 line-clamp-2 group-hover:text-violet-400 transition-colors">
                {course.title}
              </h3>

              <div className="mt-auto">
                {activeTab === "active" ? (
                  <>
                    <div className="flex items-center justify-between text-xs font-bold mb-2">
                      <span className="text-slate-400 truncate pr-4">{course.nextLesson}</span>
                      <span className="text-white">{course.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-6">
                      <div className={`h-full ${course.color} rounded-full relative`} style={{ width: `${course.progress}%` }}>
                         <div className="absolute top-0 right-0 w-2 h-full bg-white/30"></div>
                      </div>
                    </div>
                    <Link href="/student/classroom" className="w-full py-3 bg-white/5 hover:bg-violet-600 text-white font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 border border-white/5 hover:border-violet-500">
  Resume Course
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</Link>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-2 text-sm font-bold text-emerald-400 mb-6 bg-emerald-500/10 w-max px-3 py-1.5 rounded-lg">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      Completed on {course.completedDate}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl text-sm transition-colors border border-white/5">
                        Review
                      </button>
                      <button className="py-3 bg-violet-600/20 hover:bg-violet-600 text-violet-400 hover:text-white font-bold rounded-xl text-sm transition-colors border border-violet-500/30">
                        Certificate
                      </button>
                    </div>
                  </>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}