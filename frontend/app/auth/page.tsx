"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [isRedirecting, setIsRedirecting] = useState(false);
  
  // Form State
  const [email, setEmail] = useState("sam1234@gmail.com");
  const [password, setPassword] = useState("••••••••");
  const [role, setRole] = useState("Student");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRedirecting(true);
    
    // Route based exactly on the selected role!
    setTimeout(() => {
      if (role === "Student") {
        router.push("/student"); 
      } else if (role === "Instructor") {
        router.push("/instructor");
      } else if (role === "Admin") {
        router.push("/admin");
      }
    }, 1500);
  };

  if (isRedirecting) {
    return (
      <div className="min-h-screen bg-[#0B0F19] flex flex-col items-center justify-center text-white">
        <div className="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full animate-spin mb-6"></div>
        <p className="text-slate-400 font-medium tracking-wide animate-pulse">Redirecting...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] flex font-sans selection:bg-violet-500/30">
      
      {/* --- LEFT COLUMN: Brand & Social Proof --- */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-violet-600 via-indigo-700 to-slate-900 p-12 flex-col justify-between relative overflow-hidden">
        {/* Abstract Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full mix-blend-overlay pointer-events-none"></div>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 relative z-10 w-max">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <div className="w-3 h-3 bg-violet-600 rounded-full"></div>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">Lumina</span>
        </Link>

        {/* Testimonial */}
        <div className="relative z-10 max-w-lg">
          <h1 className="text-5xl font-extrabold text-white leading-tight tracking-tight mb-8">
            "The best six months I've ever invested in myself."
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold border border-white/30">
              AR
            </div>
            <div>
              <p className="text-white font-bold">Ananya Rao, now Software Engineer at Stripe</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative z-10 grid grid-cols-2 gap-8 border-t border-white/20 pt-8 mt-12">
          <div>
            <p className="text-4xl font-extrabold text-white mb-1">180K+</p>
            <p className="text-sm font-medium text-violet-200">Active learners</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-white mb-1">94%</p>
            <p className="text-sm font-medium text-violet-200">Placement rate</p>
          </div>
        </div>
        
        {/* Footer info */}
        <div className="absolute bottom-12 left-12 text-xs font-medium text-white/50">
          © 2026 Lumina Learning
        </div>
      </div>

      {/* --- RIGHT COLUMN: Auth Form --- */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
        <div className="w-full max-w-md">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-2">Welcome to Lumina</h2>
            <p className="text-slate-400 text-sm">Sign in to continue learning</p>
          </div>

          {/* Toggle Log In / Sign Up */}
          <div className="flex p-1 bg-[#131B2F] rounded-xl mb-8 border border-white/5">
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-colors ${isLogin ? 'bg-white/10 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
            >
              Log In
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-colors ${!isLogin ? 'bg-white/10 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
            >
              Sign up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {!isLogin && (
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-[#131B2F] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500 transition-colors"
                  placeholder="e.g. Sanskar Gupta"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#131B2F] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#131B2F] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">Sign in as</label>
              <div className="relative">
                <select 
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-[#131B2F] border border-white/10 rounded-xl px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-violet-500 transition-colors cursor-pointer"
                >
                  <option value="Student">Student</option>
                  <option value="Instructor">Instructor</option>
                  <option value="Admin">Admin</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 mt-2 font-medium">
                Demo: pick any role to preview that dashboard.
              </p>
            </div>

            <button 
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-3.5 rounded-xl mt-6 transition-all shadow-lg shadow-violet-900/50 flex items-center justify-center gap-2"
            >
              Sign in <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </form>

          <p className="text-[10px] text-slate-500 text-center mt-8 leading-relaxed">
            By continuing, you agree to Lumina's Terms and Privacy Policy.
          </p>

        </div>
      </div>
    </div>
  );
}