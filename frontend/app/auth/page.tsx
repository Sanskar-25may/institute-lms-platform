"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Suspense } from "react";

function AuthContent() {
  const [step, setStep] = useState<1 | 2>(1);
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState<"student" | "faculty">("student");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || (role === "student" ? "/student" : "/faculty");

  const handleGoogleLogin = () => {
    document.cookie = "oauth_role=" + role + "; path=/; max-age=3600";
    signIn("google", { callbackUrl });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");
    
    if (!isLogin) {
      const signupRes = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password, phoneNumber, role: role === "faculty" ? "INSTRUCTOR" : "STUDENT" }),
      });

      if (!signupRes.ok) {
        const data = await signupRes.json();
        setErrorMsg(data.message || "Failed to create account");
        setIsLoading(false);
        return;
      }
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setIsLoading(false);

    if (res?.error) {
      setErrorMsg(res.error);
    } else {
      router.push(callbackUrl);
      router.refresh();
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
            {step === 1 ? (
              <div className="text-center">
                 <h2 className="heading-font text-3xl font-bold mb-3">Select your role</h2>
                 <p style={{ color: 'var(--text-secondary)' }} className="mb-10">How do you want to use the platform?</p>
                 
                 <div className="space-y-4">
                    <button 
                       onClick={() => { setRole("student"); setStep(2); }}
                       className="w-full p-6 rounded-2xl border-2 text-left group transition-all"
                       style={{ borderColor: 'var(--border-soft)', background: 'var(--bg-surface)' }}
                    >
                       <div className="flex items-center gap-5">
                          <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-colors" style={{ background: 'color-mix(in srgb, var(--accent-cyan) 15%, transparent)' }}>
                             <svg className="w-7 h-7" style={{ color: 'var(--accent-cyan)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/></svg>
                          </div>
                          <div>
                             <h3 className="font-bold text-lg mb-1 group-hover:text-[var(--accent-cyan)] transition-colors">I am a Student</h3>
                             <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>I want to learn, take courses, and build projects.</p>
                          </div>
                       </div>
                    </button>

                    <button 
                       onClick={() => { setRole("faculty"); setStep(2); }}
                       className="w-full p-6 rounded-2xl border-2 text-left group transition-all"
                       style={{ borderColor: 'var(--border-soft)', background: 'var(--bg-surface)' }}
                    >
                       <div className="flex items-center gap-5">
                          <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-colors" style={{ background: 'color-mix(in srgb, var(--accent-primary) 15%, transparent)' }}>
                             <svg className="w-7 h-7" style={{ color: 'var(--accent-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                          </div>
                          <div>
                             <h3 className="font-bold text-lg mb-1 group-hover:text-[var(--accent-primary)] transition-colors">I am an Instructor</h3>
                             <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>I want to create courses, grade students, and teach.</p>
                          </div>
                       </div>
                    </button>
                 </div>
              </div>
            ) : (
              <div>
                 <button onClick={() => setStep(1)} className="mb-6 flex items-center gap-2 text-sm font-semibold hover:underline" style={{ color: 'var(--text-secondary)' }}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Back to roles
                 </button>

                 <div className="text-center mb-8">
                    <h2 className="heading-font text-3xl font-bold mb-2">
                       {isLogin ? "Welcome Back" : `Join as ${role === 'student' ? 'Student' : 'Instructor'}`}
                    </h2>
                    <p style={{ color: 'var(--text-secondary)' }}>{isLogin ? 'Sign in to continue to your dashboard' : 'Create an account to start your journey'}</p>
                 </div>

                 {errorMsg && (
                   <div className="p-4 mb-6 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-semibold text-center">
                     {errorMsg}
                   </div>
                 )}

                 <div className="flex bg-black/5 p-1 rounded-xl mb-6" style={{ background: 'var(--bg-surface)' }}>
                    <button onClick={() => setIsLogin(true)} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${isLogin ? 'bg-white shadow-sm text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`} style={isLogin ? {background: 'var(--bg-card)'} : {}}>Sign In</button>
                    <button onClick={() => setIsLogin(false)} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${!isLogin ? 'bg-white shadow-sm text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`} style={!isLogin ? {background: 'var(--bg-card)'} : {}}>Sign Up</button>
                 </div>

                 <div className="space-y-4 mb-6">
                    <button 
                      onClick={handleGoogleLogin}
                      className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 font-bold hover:bg-gray-50 transition-colors shadow-sm"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                         <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                         <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                         <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                         <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                      Continue with Google
                    </button>
                 </div>

                 <div className="relative mb-6">
                   <div className="absolute inset-0 flex items-center">
                     <div className="w-full border-t border-gray-200" style={{ borderColor: 'var(--border-soft)' }}></div>
                   </div>
                   <div className="relative flex justify-center text-sm">
                     <span className="px-2" style={{ background: 'var(--bg-base)', color: 'var(--text-secondary)' }}>Or continue with email</span>
                   </div>
                 </div>

                 <form onSubmit={handleSubmit} className="space-y-5">
                    {!isLogin && (
                       <div>
                          <label className="block text-sm font-medium mb-2">Full Name</label>
                          <input type="text" required={!isLogin} value={fullName} onChange={e => setFullName(e.target.value)} className="input-premium w-full px-4 py-3 rounded-xl" placeholder="Jane Doe" />
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

                    {!isLogin && (
                       <div>
                          <label className="block text-sm font-medium mb-2">Phone Number</label>
                          <input type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="input-premium w-full px-4 py-3 rounded-xl" placeholder="+1 (555) 000-0000" />
                       </div>
                    )}
                    
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

                    {searchParams.get("admin") === "true" && isLogin && (
                       <div className="p-3 mb-2 rounded-xl border border-[var(--border-strong)] text-xs text-center" style={{ background: 'var(--bg-surface)' }}>
                          <strong>Super Admin Access Enabled</strong>
                       </div>
                    )}

                    <button type="submit" disabled={isLoading} className="btn-primary w-full py-4 rounded-xl text-lg font-bold flex justify-center items-center mt-6">
                       {isLoading ? (
                          <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                       ) : (isLogin ? "Continue to Dashboard" : "Create Account")}
                    </button>
                 </form>
              </div>
            )}
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