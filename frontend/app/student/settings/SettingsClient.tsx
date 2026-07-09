"use client";
import { useState, useEffect } from "react";

export default function SettingsClient({ cmsData }: { cmsData: any }) {
  const [activeTab, setActiveTab] = useState("profile");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await fetch("/api/user/profile");
      if (res.ok) {
        const data = await res.json();
        
        let firstName = "";
        let lastName = "";
        if (data.name) {
          const parts = data.name.split(" ");
          firstName = parts[0] || "";
          lastName = parts.slice(1).join(" ") || "";
        }

        setFormData({
          firstName,
          lastName,
          email: data.email || "",
          bio: data.profile?.bio || "",
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      const res = await fetch("/api/user/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage("Profile updated successfully!");
      } else {
        setMessage("Failed to update profile.");
      }
    } catch (err) {
      setMessage("An unexpected error occurred.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8 pb-20 max-w-5xl">
       <div className="mb-8">
          <h1 className="heading-font text-3xl font-bold mb-2">{cmsData?.heading || "Settings"}</h1>
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
                         {formData.firstName?.[0] || ""}{formData.lastName?.[0] || ""}
                      </div>
                      <div>
                         {cmsData?.allowProfileEdit !== false ? (
                            <>
                               <button className="btn-secondary px-4 py-2 rounded-lg text-sm font-bold mb-2">Change Avatar</button>
                               <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>JPG, GIF or PNG. 1MB max.</p>
                            </>
                         ) : (
                            <p className="text-sm font-semibold" style={{ color: 'var(--accent-warning)' }}>Profile editing is disabled by administrator.</p>
                         )}
                      </div>
                   </div>

                   {loading ? (
                     <div className="animate-pulse space-y-4">
                       <div className="h-10 bg-[var(--bg-surface)] rounded-xl w-full"></div>
                       <div className="h-24 bg-[var(--bg-surface)] rounded-xl w-full"></div>
                     </div>
                   ) : (
                     <form className="space-y-6 max-w-lg" onSubmit={handleSubmit}>
                        {message && (
                          <div className={`p-4 rounded-xl font-bold ${message.includes("success") ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                            {message}
                          </div>
                        )}
                        <div className="grid grid-cols-2 gap-4">
                           <div>
                              <label className="block text-sm font-medium mb-2">First Name</label>
                              <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="input-premium w-full px-4 py-2.5 rounded-lg text-sm" disabled={cmsData?.allowProfileEdit === false} />
                           </div>
                           <div>
                              <label className="block text-sm font-medium mb-2">Last Name</label>
                              <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="input-premium w-full px-4 py-2.5 rounded-lg text-sm" disabled={cmsData?.allowProfileEdit === false} />
                           </div>
                        </div>
                        
                        <div>
                           <label className="block text-sm font-medium mb-2">Email</label>
                           <input type="email" value={formData.email} className="input-premium w-full px-4 py-2.5 rounded-lg text-sm" disabled />
                        </div>

                        <div>
                           <label className="block text-sm font-medium mb-2">Bio</label>
                           <textarea name="bio" value={formData.bio} onChange={handleChange} className="input-premium w-full px-4 py-2.5 rounded-lg text-sm" rows={4} placeholder="Tell us about yourself..." disabled={cmsData?.allowProfileEdit === false}></textarea>
                        </div>

                        {cmsData?.allowProfileEdit !== false && (
                           <button type="submit" disabled={saving} className="btn-primary px-6 py-2.5 rounded-lg font-bold">
                             {saving ? "Saving..." : "Save Changes"}
                           </button>
                        )}
                     </form>
                   )}
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
                      <div className="absolute top-0 right-0 bg-[var(--accent-primary)] text-txt-primary text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">Active</div>
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