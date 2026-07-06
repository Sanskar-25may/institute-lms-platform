"use client";

import Link from "next/link";
import { useState } from "react";

export default function FeedbackPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [type, setType] = useState("idea");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

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
            <Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link>
            <Link href="/placements" className="hover:text-white transition-colors">Placements</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/feedback" className="text-white">Feedback</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/auth" className="hidden md:block text-sm font-medium text-slate-300 hover:text-white transition-colors">Sign In</Link>
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-white cursor-pointer hover:bg-slate-700 transition-colors">SG</div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="max-w-3xl mx-auto px-6 pt-24 pb-12 text-center">
        <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold tracking-wider text-violet-400 uppercase mb-6">
          Help us improve
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Got feedback? We&apos;re listening.
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          Whether you found a bug, have a feature idea, or just want to tell us what you love, your feedback shapes Lumina.
        </p>
      </header>

      {/* --- FEEDBACK FORM --- */}
      <main className="max-w-2xl mx-auto px-6">
        <div className="bg-[#131B2F] border border-white/5 rounded-[32px] p-8 md:p-10 shadow-xl relative overflow-hidden">
          
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-violet-600/10 blur-[80px] rounded-full pointer-events-none"></div>

          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 relative z-10">
              <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">Feedback Received!</h3>
              <p className="text-slate-400 max-w-md">Thank you for taking the time to help us build a better platform. Our product team reads every single submission.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-colors"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              
              {/* Type Selector */}
              <div>
                <label className="block text-sm font-bold text-white mb-4">What kind of feedback do you have?</label>
                <div className="grid grid-cols-3 gap-3">
                  <button 
                    type="button"
                    onClick={() => setType('idea')}
                    className={`py-3 px-4 rounded-xl border font-bold text-sm transition-all flex flex-col items-center gap-2 ${type === 'idea' ? 'bg-violet-600/20 border-violet-500 text-violet-300' : 'bg-[#0B0F19] border-white/10 text-slate-400 hover:border-white/20'}`}
                  >
                    💡 Idea
                  </button>
                  <button 
                    type="button"
                    onClick={() => setType('bug')}
                    className={`py-3 px-4 rounded-xl border font-bold text-sm transition-all flex flex-col items-center gap-2 ${type === 'bug' ? 'bg-rose-500/20 border-rose-500 text-rose-300' : 'bg-[#0B0F19] border-white/10 text-slate-400 hover:border-white/20'}`}
                  >
                    🐛 Bug Report
                  </button>
                  <button 
                    type="button"
                    onClick={() => setType('other')}
                    className={`py-3 px-4 rounded-xl border font-bold text-sm transition-all flex flex-col items-center gap-2 ${type === 'other' ? 'bg-white/10 border-white/30 text-white' : 'bg-[#0B0F19] border-white/10 text-slate-400 hover:border-white/20'}`}
                  >
                    💭 Other
                  </button>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-bold text-white mb-2">Subject</label>
                <input 
                  type="text" 
                  required
                  placeholder={type === 'bug' ? "e.g. Video player won't load on Safari" : "e.g. Dark mode for coding exercises"} 
                  className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-bold text-white mb-2">Description</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="Please be as detailed as possible..." 
                  className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Optional Screenshot */}
              <div>
                <label className="block text-sm font-bold text-white mb-2">Attachment (Optional)</label>
                <div className="w-full border-2 border-dashed border-white/10 rounded-xl bg-[#0B0F19] p-6 text-center hover:border-violet-500/50 transition-colors cursor-pointer group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-3 group-hover:bg-violet-500/20 group-hover:text-violet-400 transition-colors">
                    <svg className="w-5 h-5 text-slate-400 group-hover:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                  </div>
                  <p className="text-sm font-bold text-white">Upload a screenshot</p>
                  <p className="text-xs text-slate-500 mt-1">PNG, JPG, or GIF up to 5MB</p>
                </div>
              </div>

              {/* Submit */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-violet-600 hover:bg-violet-700 text-white text-sm font-bold py-4 rounded-xl transition-all shadow-lg shadow-violet-900/50 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
                {!isSubmitting && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>}
              </button>

            </form>
          )}
        </div>
      </main>

    </div>
  );
}