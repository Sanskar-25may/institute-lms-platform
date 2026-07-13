"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    
    try {
      const res = await fetch("/api/auth/send-email-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to send OTP");
      }
      setOtpSent(true);
      setStatus("idle");
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong");
      setStatus("idle");
    }
  };

  const handleVerifyAndSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      // 1. Verify OTP
      const verifyRes = await fetch("/api/auth/verify-email-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: otpCode }),
      });
      if (!verifyRes.ok) {
        const data = await verifyRes.json();
        throw new Error(data.message || "Invalid OTP");
      }

      // 2. Submit Contact Form
      const contactRes = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, phone, subject, message }),
      });
      if (!contactRes.ok) {
        throw new Error("Failed to send message");
      }
      
      setStatus("success");
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong");
      setStatus("idle");
    }
  };

  return (
    <div className="p-8 rounded-[32px]" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-soft)' }}>
      {status === "success" ? (
         <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in-up">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ background: 'var(--accent-success)', color: 'white' }}>
               <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
            </div>
            <h3 className="heading-font text-2xl font-bold mb-2">Message Sent!</h3>
            <p style={{ color: 'var(--text-secondary)' }}>We'll get back to you within 24 hours.</p>
            <button onClick={() => {
              setStatus("idle");
              setOtpSent(false);
              setOtpCode("");
              setMessage("");
            }} className="mt-8 btn-secondary px-6 py-2 rounded-xl">Send another message</button>
         </div>
      ) : otpSent ? (
         <form onSubmit={handleVerifyAndSubmit} className="space-y-6 text-center animate-fade-in-up">
            <h3 className="text-xl font-bold mb-2">Verify Your Email</h3>
            <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
              We sent a 6-digit code to {email}
            </p>
            {errorMsg && (
              <div className="p-3 mb-4 rounded-lg bg-red-500/10 text-red-500 text-sm font-semibold text-center">
                {errorMsg}
              </div>
            )}
            <input
              type="text"
              maxLength={6}
              value={otpCode}
              onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
              placeholder="000000"
              className="input-premium w-full text-center text-3xl tracking-[1em] py-4 rounded-xl font-mono font-bold"
              required
            />
            <button type="submit" disabled={status === "submitting" || otpCode.length < 6} className="btn-primary w-full py-4 rounded-xl text-lg font-bold">
              {status === "submitting" ? "Verifying..." : "Verify & Send Message"}
            </button>
            <button type="button" onClick={() => setOtpSent(false)} className="text-sm mt-4 underline text-gray-500">Back</button>
         </form>
      ) : (
         <form onSubmit={handleSendOtp} className="space-y-6">
            {errorMsg && (
              <div className="p-3 mb-4 rounded-lg bg-red-500/10 text-red-500 text-sm font-semibold text-center">
                {errorMsg}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input type="text" value={firstName} onChange={e=>setFirstName(e.target.value)} required className="input-premium w-full px-4 py-3 rounded-xl" placeholder="Jane" />
               </div>
               <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input type="text" value={lastName} onChange={e=>setLastName(e.target.value)} required className="input-premium w-full px-4 py-3 rounded-xl" placeholder="Doe" />
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required className="input-premium w-full px-4 py-3 rounded-xl" placeholder="jane@example.com" />
               </div>
               <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} className="input-premium w-full px-4 py-3 rounded-xl" placeholder="+1 (555) 000-0000" />
               </div>
            </div>
            
            <div>
               <label className="block text-sm font-medium mb-2">Subject</label>
               <select className="select-premium w-full px-4 py-3 rounded-xl" value={subject} onChange={e=>setSubject(e.target.value)} required>
                  <option value="">Select a topic...</option>
                  <option value="course">Course Question</option>
                  <option value="corporate">Corporate Training</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
               </select>
            </div>
            
            <div>
               <label className="block text-sm font-medium mb-2">Message</label>
               <textarea required value={message} onChange={e=>setMessage(e.target.value)} rows={4} className="input-premium w-full px-4 py-3 rounded-xl" placeholder="How can we help?"></textarea>
            </div>
            
            <button type="submit" disabled={status === "submitting"} className="btn-primary w-full py-4 rounded-xl text-lg font-bold flex justify-center items-center">
               {status === "submitting" ? (
                  <svg className="animate-spin h-6 w-6 text-txt-primary" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
               ) : "Send Message"}
            </button>
         </form>
      )}
    </div>
  );
}
