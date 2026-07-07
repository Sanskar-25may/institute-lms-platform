"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           
           <div>
              <h1 className="heading-font text-4xl md:text-5xl font-bold mb-6">Get in touch</h1>
              <p className="text-lg mb-12" style={{ color: 'var(--text-secondary)' }}>Whether you have a question about our courses, corporate training, or anything else, our team is ready to answer all your questions.</p>
              
              <div className="space-y-8">
                 <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-soft)' }}>
                       <svg className="w-6 h-6 text-[var(--accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </div>
                    <div>
                       <h3 className="font-bold text-lg">Email us</h3>
                       <p style={{ color: 'var(--text-secondary)' }}>Our friendly team is here to help.</p>
                       <p className="font-medium mt-1">hello@aushutosh.dev</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-soft)' }}>
                       <svg className="w-6 h-6 text-[var(--accent-cyan)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </div>
                    <div>
                       <h3 className="font-bold text-lg">Office</h3>
                       <p style={{ color: 'var(--text-secondary)' }}>Come say hello at our HQ.</p>
                       <p className="font-medium mt-1">100 Market St, San Francisco, CA</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="p-8 rounded-[32px]" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-soft)' }}>
              {status === "success" ? (
                 <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in-up">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ background: 'var(--accent-success)', color: 'white' }}>
                       <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <h3 className="heading-font text-2xl font-bold mb-2">Message Sent!</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>We'll get back to you within 24 hours.</p>
                    <button onClick={() => setStatus("idle")} className="mt-8 btn-secondary px-6 py-2 rounded-xl">Send another message</button>
                 </div>
              ) : (
                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                          <label className="block text-sm font-medium mb-2">First Name</label>
                          <input type="text" required className="input-premium w-full px-4 py-3 rounded-xl" placeholder="Jane" />
                       </div>
                       <div>
                          <label className="block text-sm font-medium mb-2">Last Name</label>
                          <input type="text" required className="input-premium w-full px-4 py-3 rounded-xl" placeholder="Doe" />
                       </div>
                    </div>
                    
                    <div>
                       <label className="block text-sm font-medium mb-2">Email</label>
                       <input type="email" required className="input-premium w-full px-4 py-3 rounded-xl" placeholder="jane@example.com" />
                    </div>
                    
                    <div>
                       <label className="block text-sm font-medium mb-2">Subject</label>
                       <select className="select-premium w-full px-4 py-3 rounded-xl" required>
                          <option value="">Select a topic...</option>
                          <option value="course">Course Question</option>
                          <option value="corporate">Corporate Training</option>
                          <option value="support">Technical Support</option>
                          <option value="other">Other</option>
                       </select>
                    </div>
                    
                    <div>
                       <label className="block text-sm font-medium mb-2">Message</label>
                       <textarea required rows={4} className="input-premium w-full px-4 py-3 rounded-xl" placeholder="How can we help?"></textarea>
                    </div>
                    
                    <button type="submit" disabled={status === "submitting"} className="btn-primary w-full py-4 rounded-xl text-lg font-bold flex justify-center items-center">
                       {status === "submitting" ? (
                          <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                       ) : "Send Message"}
                    </button>
                 </form>
              )}
           </div>

        </div>
      </div>
    </div>
  );
}