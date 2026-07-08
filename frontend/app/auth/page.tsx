"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Suspense } from "react";

function AuthContent() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState<"student" | "faculty" | "admin">("student");
  const [email, setEmail] = useState("demo@aushutosh.dev");
  const [password, setPassword] = useState("password123");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/student";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");
    
    // Instead of a fake timeout, we call NextAuth's signIn
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setIsLoading(false);

    if (res?.error) {
      setErrorMsg(res.error);
    } else {
      // Upon successful login, the middleware will automatically redirect
      // to the correct role dashboard if we hit a generic protected route,
      // but we can manually route based on role for a faster UX if needed.
      // Since `signIn` doesn't return the user's role here, we'll just go to the callbackUrl
      // and let the middleware sort out if they shouldn't be there.
      router.push(callbackUrl);
      router.refresh(); // Refresh to update server components with session
    }
  };

  return (
    <div className="min-h-screen flex">
       {/* Left side (Visual) */}
       <div className="hidden lg:flex lg:w-1/2 relative bg-[#0B0F19] overflow-hidden flex-col justify-between p-12 border-r" style={{ borderColor: 'var(--border-soft)' }}>
          <div className="absolute inset-0 dot-grid opacity-30"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-40 mix-blend-screen" style={{ background: 'var(--accent-primary)' }}></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-40 mix-blend-screen" style={{ background: 'var(--accent-cyan)' }}></div>
          
          <Link href="/" className="relative z-10 flex items-center gap-2 group w-max">
             <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#0EA5E9] p-0.5">
                <div className="w-full h-full bg-[#0B0F19] rounded-full flex items-center justify-center">
                   <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                </div>
             </div>
             <span className="heading-font text-2xl font-bold text-white tracking-tight">Aushutosh</span>
          </Link>

          <div className="relative z-10 max-w-lg mt-20">
             <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Your journey to <br/> <span className="shimmer-text">mastery starts here.</span>
             </h1>
             
             <div className="space-y-6 mt-12">
                {[
                   "Build production-ready applications.",
                   "Learn from senior engineers at top tech companies.",
                   "Earn verifiable credentials employers trust."
                ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 text-white/80">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                         <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <span className="text-lg">{item}</span>
                   </div>
                ))}
             </div>
          </div>

          <div className="relative z-10 mt-auto pt-20">
             <div className="glass-md p-6 rounded-2xl border border-white/10 text-white/90 shadow-2xl">
                <div className="flex gap-1 text-amber-400 mb-3 text-sm">★★★★★</div>
                <p className="italic mb-4">"The best investment I've made in my career. The curriculum is exactly what you need to pass senior engineering loops."</p>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">DK</div>
                   <div>
                      <div className="font-bold text-sm">David Kim</div>
                      <div className="text-xs text-white/60">Software Engineer at Vercel</div>
                   </div>
                </div>
             </div>
          </div>
       </div>

       {/* Right side (Form) */}
       <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative" style={{ background: 'var(--bg-base)' }}>
          {/* Mobile Logo */}
          <Link href="/" className="lg:hidden absolute top-8 left-8 flex items-center gap-2">
             <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#0EA5E9] p-0.5">
                <div className="w-full h-full rounded-full" style={{ background: 'var(--bg-base)' }}></div>
             </div>
          </Link>

          <div className="max-w-md w-full animate-fade-in-up">
             <div className="text-center mb-8">
                <h2 className="heading-font text-3xl font-bold mb-2">Welcome Back</h2>
                <p style={{ color: 'var(--text-secondary)' }}>Sign in to continue to your dashboard</p>
             </div>

             <div className="p-4 mb-8 rounded-xl flex gap-3 bg-amber-500/10 border border-amber-500/20 text-amber-600 text-sm">
                <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span><strong>Demo Mode:</strong> Click a role below to auto-fill the correct email, then hit Continue.</span>
             </div>

             {errorMsg && (
               <div className="p-4 mb-6 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-semibold text-center">
                 {errorMsg}
               </div>
             )}

             <div className="flex bg-black/5 p-1 rounded-xl mb-8" style={{ background: 'var(--bg-surface)' }}>
                <button onClick={() => setIsLogin(true)} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${isLogin ? 'bg-white shadow-sm text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`} style={isLogin ? {background: 'var(--bg-card)'} : {}}>Sign In</button>
                <button onClick={() => setIsLogin(false)} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${!isLogin ? 'bg-white shadow-sm text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`} style={!isLogin ? {background: 'var(--bg-card)'} : {}}>Sign Up</button>
             </div>

             <form onSubmit={handleSubmit} className="space-y-5">
                {!isLogin && (
                   <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input type="text" required={!isLogin} className="input-premium w-full px-4 py-3 rounded-xl" placeholder="Jane Doe" />
                   </div>
                )}
                
                <div>
                   <label className="block text-sm font-medium mb-2">Email</label>
                   <input 
                     type="email" 
                     required 
                     className="input-premium w-full px-4 py-3 rounded-xl" 
                     placeholder="jane@example.com" 
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                   />
                </div>
                
                <div>
                   <div className="flex justify-between items-center mb-2">
                      <label className="block text-sm font-medium">Password</label>
                      {isLogin && <Link href="#" className="text-xs font-semibold hover:underline" style={{ color: 'var(--accent-primary)' }}>Forgot?</Link>}
                   </div>
                   <input 
                     type="password" 
                     required 
                     className="input-premium w-full px-4 py-3 rounded-xl" 
                     placeholder="••••••••" 
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                   />
                </div>

                <div className="pt-2">
                   <label className="block text-sm font-medium mb-3">Login as (Demo)</label>
                   <div className="grid grid-cols-3 gap-3">
                      {[
                         { id: "student", label: "Student" },
                         { id: "faculty", label: "Instructor" },
                         { id: "admin", label: "Admin" }
                      ].map((r) => (
                         <button
                            key={r.id}
                            type="button"
                            onClick={() => {
                               setRole(r.id as any);
                               if (r.id === "student") setEmail("demo@aushutosh.dev");
                               if (r.id === "faculty") setEmail("sarah@aushutosh.dev");
                               if (r.id === "admin") setEmail("admin@aushutosh.dev");
                            }}
                            className={`py-3 rounded-xl text-sm font-bold border transition-all ${role === r.id ? 'border-[var(--accent-primary)] text-[var(--accent-primary)]' : 'border-[var(--border-soft)] text-[var(--text-secondary)] hover:border-[var(--text-tertiary)]'}`}
                            style={{ 
                               background: role === r.id ? 'color-mix(in srgb, var(--accent-primary) 10%, transparent)' : 'var(--bg-surface)' 
                            }}
                         >
                            {r.label}
                         </button>
                      ))}
                   </div>
                </div>

                <button type="submit" disabled={isLoading} className="btn-primary w-full py-4 rounded-xl text-lg font-bold flex justify-center items-center mt-6">
                   {isLoading ? (
                      <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                   ) : (isLogin ? "Continue to Dashboard" : "Create Account")}
                </button>
             </form>
             
          </div>
       </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <AuthContent />
    </Suspense>
  );
}