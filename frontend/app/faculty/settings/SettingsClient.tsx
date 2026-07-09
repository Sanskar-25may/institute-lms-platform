"use client";
import { useState, useEffect } from "react";

export default function SettingsClient() {
  const [activeTab, setActiveTab] = useState("profile");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    organization: ""
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
          bio: data.profile?.bio || "",
          organization: data.profile?.organization || ""
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
        // We do not reload here, dashboard will fetch fresh data on navigation
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
    <div className="max-w-[1000px] mx-auto space-y-8 animate-in fade-in duration-500 pb-24">
      <h1 className="text-3xl font-extrabold text-txt-primary mb-8">Faculty Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-2">
          <button 
            onClick={() => setActiveTab("profile")}
            className={`w-full text-left px-4 py-3 font-bold rounded-xl border transition-colors ${activeTab === 'profile' ? 'bg-violet-600/10 text-violet-400 border-violet-500/20' : 'text-txt-secondary hover:bg-white/[0.02] border-transparent'}`}
          >
            Faculty Profile
          </button>
          <button className="w-full text-left px-4 py-3 text-txt-secondary hover:bg-white/[0.02] hover:text-txt-primary font-medium rounded-xl transition-colors">Payout Details & Tax</button>
          <button className="w-full text-left px-4 py-3 text-txt-secondary hover:bg-white/[0.02] hover:text-txt-primary font-medium rounded-xl transition-colors">Team Access</button>
        </div>

        <div className="md:col-span-2 bg-[#131B2F] border border-bdr-soft rounded-[24px] shadow-lg p-8">
          
          {activeTab === "profile" && (
            <>
              <h2 className="text-xl font-bold text-txt-primary mb-6 border-b border-bdr-soft pb-4">Public Faculty Profile</h2>
              
              {loading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-10 bg-white/5 rounded-xl w-full"></div>
                  <div className="h-10 bg-white/5 rounded-xl w-full"></div>
                  <div className="h-24 bg-white/5 rounded-xl w-full"></div>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {message && (
                    <div className={`p-4 rounded-xl font-bold ${message.includes("success") ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                      {message}
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-txt-secondary mb-2 uppercase">First Name</label>
                      <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-[#0B0F19] border border-bdr-soft rounded-xl px-4 py-3 text-txt-primary focus:outline-none focus:border-violet-500 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-txt-secondary mb-2 uppercase">Last Name</label>
                      <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-[#0B0F19] border border-bdr-soft rounded-xl px-4 py-3 text-txt-primary focus:outline-none focus:border-violet-500 transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-txt-secondary mb-2 uppercase">Professional Title / Organization</label>
                    <input type="text" name="organization" value={formData.organization} onChange={handleChange} className="w-full bg-[#0B0F19] border border-bdr-soft rounded-xl px-4 py-3 text-txt-primary focus:outline-none focus:border-violet-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-txt-secondary mb-2 uppercase">Faculty Bio</label>
                    <textarea name="bio" value={formData.bio} onChange={handleChange} rows={5} className="w-full bg-[#0B0F19] border border-bdr-soft rounded-xl px-4 py-3 text-txt-primary focus:outline-none focus:border-violet-500 transition-colors resize-none"></textarea>
                  </div>
                  <div className="pt-6 border-t border-bdr-soft flex justify-end gap-3">
                    <button type="submit" disabled={saving} className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-txt-primary text-sm font-bold rounded-xl shadow-lg shadow-violet-900/50 transition-all">
                      {saving ? "Saving..." : "Save Profile"}
                    </button>
                  </div>
                </form>
              )}
            </>
          )}

        </div>
      </div>
    </div>
  );
}
