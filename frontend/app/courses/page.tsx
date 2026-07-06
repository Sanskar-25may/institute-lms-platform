import Link from "next/link";
import Image from "next/image"; // ADD THIS

export default function CourseCatalogPage() {
  const courses = [
    {
      id: "full-stack-react",
      title: "Full-Stack React & TypeScript",
      instructor: "Aisha Verma",
      rating: 4.9,
      students: "12,480",
      level: "Intermediate",
      price: "$149",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "system-design",
      title: "System Design Deep Dive",
      instructor: "Rahul Iyer",
      rating: 4.8,
      students: "8,210",
      level: "Advanced",
      price: "$199",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "applied-ml",
      title: "Applied Machine Learning",
      instructor: "Marcus Chen",
      rating: 4.9,
      students: "5,102",
      level: "Advanced",
      price: "$179",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "ui-ux-foundations",
      title: "UI/UX Design Foundations",
      instructor: "Priya Nair",
      rating: 4.7,
      students: "18,300",
      level: "Beginner",
      price: "$99",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "node-scaling",
      title: "Advanced Node.js Scaling",
      instructor: "David Chen",
      rating: 4.8,
      students: "3,420",
      level: "Advanced",
      price: "$129",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "figma-react-native",
      title: "Figma to React Native",
      instructor: "Sarah Jenkins",
      rating: 4.9,
      students: "6,800",
      level: "Intermediate",
      price: "$149",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] font-sans text-slate-300 selection:bg-violet-500/30 overflow-x-hidden pb-24 animate-in fade-in duration-500">
      
      {/* --- UNIFIED NAVBAR --- */}
      <nav className="w-full border-b border-white/5 bg-[#0B0F19]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Lumina</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/courses" className="text-white font-bold">Courses</Link>
            <Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/auth" className="text-sm font-bold text-white bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-lg border border-white/10 transition-colors">Sign In</Link>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          Master the skills of <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">tomorrow.</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
          Browse our world-class curriculum taught by industry leaders. From beginner foundations to advanced engineering.
        </p>
        
        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <div className="relative w-full md:w-auto flex-1">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input type="text" placeholder="Search for courses, skills, or instructors..." className="w-full pl-12 pr-4 py-3.5 bg-[#131B2F] border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors shadow-lg" />
          </div>
          <button className="w-full md:w-auto px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
            Filters
          </button>
        </div>
      </header>

      {/* --- COURSE GRID --- */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link href={`/courses/${course.id}`} key={course.id} className="bg-[#131B2F] rounded-[24px] border border-white/5 overflow-hidden hover:border-violet-500/30 transition-all duration-300 group flex flex-col shadow-lg">
              
             {/* Thumbnail */}
              <div className="h-48 relative overflow-hidden bg-slate-800">
                <Image 
                  src={course.image} 
                  alt={`Cover image for the course: ${course.title}`} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                />
                <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
                  {course.level}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[11px] font-bold text-violet-400 uppercase tracking-wider">
                    {course.instructor}
                  </p>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-400">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    {course.rating} <span className="text-slate-500 ml-1">({course.students})</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-violet-400 transition-colors line-clamp-2">
                  {course.title}
                </h3>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-2xl font-extrabold text-white">{course.price}</span>
                  <span className="text-sm font-bold text-slate-300 group-hover:text-violet-400 transition-colors flex items-center gap-1">
                    View Course
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}