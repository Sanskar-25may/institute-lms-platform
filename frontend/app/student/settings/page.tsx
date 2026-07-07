"use client";
import { useState } from "react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="space-y-8 pb-20 max-w-5xl">
       <div className="mb-8">
          <h1 className="heading-font text-3xl font-bold mb-2">Settings</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Manage your account preferences.</p>
       </div>

       <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Tabs */}
          <div className="w-full md:w-64 shrink-0 flex flex-col gap-2">
             {[
                { id: "profile", label: "Profile Details" },
                { id: "notifications", label: "Notifications" },
                { id: "billing", label: "Billing & Plans" },
                { id: "security", label: "Security" }
             ].map(tab => (
                <button
                   key={tab.id}
                   onClick={() => setActiveTab(tab.id)}
                   className={`px-4 py-3 text-sm font-bold rounded-xl text-left transition-colors ${activeTab === tab.id ? 'bg-[var(--bg-card)] text-[var(--accent-primary)] shadow-sm border' : 'hover:bg-[var(--bg-surface)] text-[var(--text-secondary)]'}`}
                   style={activeTab === tab.id ? { borderColor: 'var(--border-soft)' } : {}}
                >
                   {tab.label}
                </button>
             ))}
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-8 rounded-[24px]" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-soft)' }}>
             
             {activeTab === "profile" && (
                <div className="space-y-8 animate-fade-in-up">
                   <h2 className="heading-font text-2xl font-bold border-b pb-4" style={{ borderColor: 'var(--border-soft)' }}>Profile Details</h2>
                   
                   <div className="flex items-center gap-6">
                      <div className="w-24 h-24 rounded-full flex items-center justify-center font-bold text-3xl" style={{ background: 'var(--bg-surface)' }}>
                         SG
                      </div>
                      <div>
                         <button className="btn-secondary px-4 py-2 rounded-lg text-sm font-bold mb-2">Change Avatar</button>
                         <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>JPG, GIF or PNG. 1MB max.</p>
                      </div>
                   </div>

                   <form className="space-y-6 max-w-lg">
                      <div className="grid grid-cols-2 gap-4">
                         <div>
                            <label className="block text-sm font-medium mb-2">First Name</label>
                            <input type="text" className="input-premium w-full px-4 py-2.5 rounded-lg text-sm" defaultValue="Sanskar" />
                         </div>
                         <div>
                            <label className="block text-sm font-medium mb-2">Last Name</label>
                            <input type="text" className="input-premium w-full px-4 py-2.5 rounded-lg text-sm" defaultValue="G" />
                         </div>
                      </div>
                      
                      <div>
                         <label className="block text-sm font-medium mb-2">Email</label>
                         <input type="email" className="input-premium w-full px-4 py-2.5 rounded-lg text-sm" defaultValue="sanskar@example.com" disabled />
                      </div>

                      <div>
                         <label className="block text-sm font-medium mb-2">Bio</label>
                         <textarea className="input-premium w-full px-4 py-2.5 rounded-lg text-sm" rows={4} placeholder="Tell us about yourself..."></textarea>
                      </div>

                      <button className="btn-primary px-6 py-2.5 rounded-lg font-bold">Save Changes</button>
                   </form>
                </div>
             )}

             {activeTab === "notifications" && (
                <div className="space-y-8 animate-fade-in-up">
                   <h2 className="heading-font text-2xl font-bold border-b pb-4" style={{ borderColor: 'var(--border-soft)' }}>Notification Preferences</h2>
                   
                   <div className="space-y-6">
                      {[
                         { title: "Course Updates", desc: "Get notified when a new lesson is published." },
                         { title: "Assignment Deadlines", desc: "Reminders 24 hours before an assignment is due." },
                         { title: "Live Session Alerts", desc: "Get notified 15 mins before a session starts." },
                         { title: "Direct Messages", desc: "When an instructor or peer messages you." }
                      ].map((item, i) => (
                         <div key={i} className="flex items-center justify-between">
                            <div>
                               <h4 className="font-bold text-sm">{item.title}</h4>
                               <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                            </div>
                            {/* Fake Toggle */}
                            <div className="w-11 h-6 rounded-full relative cursor-pointer" style={{ background: i !== 1 ? 'var(--accent-primary)' : 'var(--bg-surface)', border: '1px solid var(--border-soft)' }}>
                               <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all shadow-sm ${i !== 1 ? 'left-[22px]' : 'left-0.5'}`}></div>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>
             )}

             {activeTab === "billing" && (
                <div className="space-y-8 animate-fade-in-up">
                   <h2 className="heading-font text-2xl font-bold border-b pb-4" style={{ borderColor: 'var(--border-soft)' }}>Billing & Plans</h2>
                   
                   <div className="p-6 rounded-xl border border-[var(--accent-primary)] relative overflow-hidden" style={{ background: 'color-mix(in srgb, var(--accent-primary) 5%, var(--bg-card))' }}>
                      <div className="absolute top-0 right-0 bg-[var(--accent-primary)] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">Active</div>
                      <h3 className="font-bold text-xl mb-1">Pro Cohort Plan</h3>
                      <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>$299/month • Renews on March 14, 2024</p>
                      <button className="btn-secondary px-4 py-2 rounded-lg text-sm font-bold bg-[var(--bg-card)]">Manage Subscription</button>
                   </div>
                </div>
             )}
             
             {activeTab === "security" && (
                <div className="space-y-8 animate-fade-in-up">
                   <h2 className="heading-font text-2xl font-bold border-b pb-4" style={{ borderColor: 'var(--border-soft)' }}>Security</h2>
                   
                   <form className="space-y-6 max-w-sm">
                      <div>
                         <label className="block text-sm font-medium mb-2">Current Password</label>
                         <input type="password" className="input-premium w-full px-4 py-2.5 rounded-lg text-sm" />
                      </div>
                      <div>
                         <label className="block text-sm font-medium mb-2">New Password</label>
                         <input type="password" className="input-premium w-full px-4 py-2.5 rounded-lg text-sm" />
                      </div>
                      <div>
                         <label className="block text-sm font-medium mb-2">Confirm New Password</label>
                         <input type="password" className="input-premium w-full px-4 py-2.5 rounded-lg text-sm" />
                      </div>
                      <button className="btn-primary px-6 py-2.5 rounded-lg font-bold w-full">Update Password</button>
                   </form>
                </div>
             )}
             
          </div>
       </div>
    </div>
  );
}