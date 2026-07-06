import Link from "next/link";

export default function PublicCoursesPage() {
  const courses = [
    {
      id: 1,
      label: "Web Development",
      title: "Full-Stack MERN Mastery",
      type: "Bootcamp",
      provider: "Mr. Satish Kumar",
      price: "$49.99",
      duration: "12 Weeks",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      label: "Engineering",
      title: "Advanced Aeromodelling & Fixed-Wing Design",
      type: "Certification",
      provider: "Institute Drone Lab",
      price: "$89.99",
      duration: "8 Weeks",
      image: "https://images.unsplash.com/photo-1579820010410-dc90ebf849b3?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      label: "Artificial Intelligence",
      title: "Mastering RAG & Large Language Models",
      type: "Advanced Course",
      provider: "MedAI Tech",
      price: "$129.99",
      duration: "10 Weeks",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      label: "Data Science",
      title: "Python for Machine Learning",
      type: "Fundamentals",
      provider: "Institute CS Dept",
      price: "$59.99",
      duration: "6 Weeks",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      label: "Business",
      title: "Digital Marketing & SEO Strategies",
      type: "Crash Course",
      provider: "Mani Shanti Experts",
      price: "$39.99",
      duration: "4 Weeks",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      label: "Aviation",
      title: "Commercial Drone Pilot License Prep",
      type: "Exam Prep",
      provider: "SkyGlide Training",
      price: "$149.99",
      duration: "6 Weeks",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop",
    }
  ];

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
          <span className="text-[#F1592A] cursor-pointer">Courses</span>
          <Link href="/#blog" className="text-[#1D2159] hover:text-[#F1592A] transition-colors cursor-pointer">Blog</Link>
          <Link href="/#about" className="text-[#1D2159] hover:text-[#F1592A] transition-colors cursor-pointer">About Us</Link>
          <Link href="/#onboarding" className="text-[#1D2159] hover:text-[#F1592A] transition-colors cursor-pointer">Onboarding</Link>
        </div>

        <div>
          <Link href="/" className="px-8 py-3.5 bg-[#3B4CE3] text-white font-bold text-sm rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-300/50 transition-all uppercase tracking-wider inline-block">
            Enroll Now
          </Link>
        </div>
      </nav>

      <header className="max-w-[1500px] mx-auto px-8 lg:px-16 pt-12 pb-16">
        <div className="inline-block px-4 py-2 bg-[#3B4CE3]/10 text-[#3B4CE3] font-bold text-sm rounded-full mb-4">
          Explore Curriculum
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1D2159] mb-6">
          Course Catalog
        </h1>
        <p className="text-lg text-[#1D2159]/70 font-medium max-w-2xl leading-relaxed">
          Browse our complete collection of industry-leading programs. Choose your path and start mastering new skills today.
        </p>
      </header>

      <main className="max-w-[1500px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          
          {courses.map((course) => (
            <Link 
              href={`/courses/${course.id}`} 
              key={course.id} 
              className="relative group cursor-pointer hover:-translate-y-3 transition-all duration-500 block"
            >
              
              <div className="bg-[#3B4CE3] text-white w-max px-6 py-2.5 rounded-t-xl text-xs font-extrabold uppercase tracking-wider relative z-10 shadow-sm ml-8">
                {course.label}
              </div>

              <div className="bg-[#EDF0FA] border border-white/60 rounded-[40px] rounded-tl-none shadow-[0_20px_50px_rgba(29,33,89,0.05)] overflow-hidden flex flex-col h-full relative z-0">
                
                <div className="p-4 pb-0">
                  <div className="h-56 w-full rounded-[28px] overflow-hidden relative shadow-[inset_0_4px_12px_rgba(29,33,89,0.2)] bg-slate-200">
                    <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#1D2159]/30 to-transparent z-10 pointer-events-none"></div>
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                    
                    <div className="absolute bottom-4 left-4 bg-[#F1592A] px-4 py-2 rounded-xl text-xs font-extrabold text-white shadow-lg shadow-orange-500/30">
                      {course.type}
                    </div>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  
                  <p className="text-[11px] font-bold text-[#1D2159]/50 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#3B4CE3]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                    {course.provider}
                  </p>
                  
                  <h3 className="text-2xl font-extrabold text-[#1D2159] mb-6 line-clamp-2 leading-tight group-hover:text-[#F1592A] transition-colors">
                    {course.title}
                  </h3>
                  
                  <div className="mt-auto">
                     <div className="flex items-center justify-between py-4 border-y border-white mb-6 bg-white/40 rounded-2xl px-5">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-[#1D2159]/60 font-bold uppercase tracking-wider mb-1">Investment</span>
                          <span className="text-xl font-extrabold text-[#1D2159]">{course.price}</span>
                        </div>
                        <div className="w-px h-10 bg-white shadow-sm"></div>
                        <div className="flex flex-col text-right">
                          <span className="text-[10px] text-[#1D2159]/60 font-bold uppercase tracking-wider mb-1">Duration</span>
                          <span className="text-xl font-extrabold text-[#1D2159]">{course.duration}</span>
                        </div>
                     </div>
                     <div className="flex items-center justify-end text-[#3B4CE3] font-extrabold text-sm group-hover:text-[#F1592A] transition-colors gap-1">
                       More details 
                       <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                     </div>
                  </div>

                </div>
              </div>
            </Link>
          ))}

        </div>
      </main>
    </div>
  );
}