import Link from "next/link";
import Image from "next/image";
import { getSiteContent } from "@/lib/cms";

export default async function CoursesCatalog() {
  const cmsData = await getSiteContent("public-courses");

  const courses = [
    {
      id: "full-stack-react",
      title: "Full-Stack React & TypeScript",
      instructor: "Aisha Verma",
      rating: "4.9",
      level: "Intermediate",
      tags: ["React", "TypeScript", "Next.js"],
      price: "$149",
      badge: "Bestseller",
      badgeClass: "badge-warning",
      color: "from-violet-500 to-fuchsia-500"
    },
    {
      id: "system-design",
      title: "System Design for Scale",
      instructor: "Marcus Chen",
      rating: "4.8",
      level: "Advanced",
      tags: ["Architecture", "Databases", "AWS"],
      price: "$199",
      badge: "Hot",
      badgeClass: "badge-danger",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "applied-ml",
      title: "Applied Machine Learning",
      instructor: "Dr. Sarah Jenkins",
      rating: "4.9",
      level: "Advanced",
      tags: ["Python", "TensorFlow", "MLOps"],
      price: "$249",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: "ui-ux-foundations",
      title: "UI/UX Foundations for Devs",
      instructor: "Priya Nair",
      rating: "4.7",
      level: "Beginner",
      tags: ["Figma", "Design Systems", "CSS"],
      price: "$99",
      badge: "New",
      badgeClass: "badge-success",
      color: "from-amber-500 to-orange-500"
    },
    {
      id: "node-scaling",
      title: "Scaling Node.js Backends",
      instructor: "Diego Alvarez",
      rating: "4.8",
      level: "Intermediate",
      tags: ["Node.js", "Redis", "Docker"],
      price: "$129",
      color: "from-rose-500 to-pink-500"
    },
    {
      id: "figma-react-native",
      title: "React Native Masterclass",
      instructor: "Elena Petrova",
      rating: "4.9",
      level: "Intermediate",
      tags: ["React Native", "Mobile", "Expo"],
      price: "$149",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 animate-fade-in-up">
             <div>
               <h1 className="heading-font text-4xl md:text-5xl font-bold mb-4">{cmsData?.heading || "Course Catalog"}</h1>
               <p className="text-lg max-w-xl" style={{ color: 'var(--text-secondary)' }}>{cmsData?.subtitle || "Master modern engineering skills with project-based courses taught by industry veterans."}</p>
             </div>
             
             <div className="relative w-full md:w-72 shrink-0">
               <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--text-tertiary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
               <input type="text" placeholder="Search courses..." className="input-premium w-full pl-10 py-3 rounded-xl text-sm" />
             </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-12 animate-fade-in-up delay-100">
             <button className="px-5 py-2 rounded-full text-sm font-semibold transition-colors" style={{ background: 'var(--text-primary)', color: 'var(--bg-base)' }}>All Courses</button>
             <button className="px-5 py-2 rounded-full text-sm font-medium transition-colors" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-soft)' }}>Beginner</button>
             <button className="px-5 py-2 rounded-full text-sm font-medium transition-colors" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-soft)' }}>Intermediate</button>
             <button className="px-5 py-2 rounded-full text-sm font-medium transition-colors" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-soft)' }}>Advanced</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up delay-200">
             {courses.map((course, i) => (
                <Link href={`/courses/${course.id}`} key={course.id} className="group rounded-[24px] overflow-hidden flex flex-col card-hover" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-soft)' }}>
                   
                   {/* Thumbnail Area */}
                   <div className="relative h-48 w-full bg-gradient-to-br p-6 flex flex-col justify-between overflow-hidden" style={{ backgroundImage: `linear-gradient(to bottom right, var(--bg-elevated), var(--bg-surface))` }}>
                      <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ background: `linear-gradient(to bottom right, var(--accent-primary), transparent)` }}></div>
                      <div className="relative z-10 flex justify-between items-start">
                         <div className="flex gap-2">
                           <span className="text-xs font-bold px-2 py-1 rounded-md" style={{ background: 'var(--bg-card)', color: 'var(--text-primary)', border: '1px solid var(--border-soft)' }}>{course.level}</span>
                           {course.badge && <span className={`text-xs font-bold px-2 py-1 rounded-md ${course.badgeClass}`}>{course.badge}</span>}
                         </div>
                         <div className="w-10 h-10 rounded-full border-2 shadow-lg flex items-center justify-center font-bold text-txt-primary bg-gradient-to-br" style={{ borderColor: 'var(--bg-card)', backgroundImage: `linear-gradient(to bottom right, var(--accent-primary), var(--accent-cyan))` }}>
                           {course.instructor.split(' ').map(n=>n[0]).join('').substring(0,2)}
                         </div>
                      </div>
                      
                      <div className="relative z-10 mt-auto">
                        <h3 className="heading-font text-xl font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>{course.title}</h3>
                      </div>
                   </div>

                   {/* Card Body */}
                   <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-4 text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                        <span>{course.instructor}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-amber-500">
                           <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                           {course.rating}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                         {course.tags.map(tag => (
                           <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: 'var(--bg-surface)', color: 'var(--text-secondary)', border: '1px solid var(--border-soft)' }}>
                             {tag}
                           </span>
                         ))}
                      </div>
                      
                      <div className="mt-auto pt-4 flex items-center justify-between border-t" style={{ borderColor: 'var(--border-soft)' }}>
                         <span className="font-bold text-lg">{course.price}</span>
                         <div className="text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: 'var(--accent-primary)' }}>
                            Enroll
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                         </div>
                      </div>
                   </div>
                </Link>
             ))}
          </div>

       </div>
    </div>
  );
}