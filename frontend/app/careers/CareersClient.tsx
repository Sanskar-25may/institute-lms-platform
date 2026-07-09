"use client";

import React, { useState } from "react";

export default function CareersClient({ cmsData }: { cmsData?: any }) {
  const [formData, setFormData] = useState({
    personalInfo: "",
    educationalInfo: "",
    shortTermGoal: "",
    longTermGoal: "",
    weaknesses: "",
    strengths: "",
    hobbies: "",
    remarkableAchievements: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        setMessage("Thank you! Your career guidance form has been submitted.");
        setFormData({
          personalInfo: "",
          educationalInfo: "",
          shortTermGoal: "",
          longTermGoal: "",
          weaknesses: "",
          strengths: "",
          hobbies: "",
          remarkableAchievements: "",
        });
      } else {
        setMessage(data.error || "Failed to submit form.");
      }
    } catch (err) {
      setMessage("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="heading-font text-4xl font-bold mb-4">{cmsData?.heading || "Join Our Team"}</h1>
        <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
          {cmsData?.subheading || "Fill out the career guidance form below to explore opportunities with us."}
        </p>
      </div>

      <div className="glass-md p-8 md:p-12 rounded-[32px] border" style={{ borderColor: 'var(--border-soft)' }}>
        {message && (
          <div className={`p-4 rounded-xl mb-8 font-bold ${message.includes("Thank you") ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2">Personal Information *</label>
            <textarea required name="personalInfo" value={formData.personalInfo} onChange={handleChange} rows={3} className="input-premium" placeholder="Name, Email, Location, Contact..." />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Educational Information *</label>
            <textarea required name="educationalInfo" value={formData.educationalInfo} onChange={handleChange} rows={3} className="input-premium" placeholder="Degrees, Universities, Graduation Year..." />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2">Short-Term Goal</label>
              <textarea name="shortTermGoal" value={formData.shortTermGoal} onChange={handleChange} rows={3} className="input-premium" placeholder="What are you aiming for in the next 1-2 years?" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Long-Term Goal</label>
              <textarea name="longTermGoal" value={formData.longTermGoal} onChange={handleChange} rows={3} className="input-premium" placeholder="Where do you see yourself in 5+ years?" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2">Strengths (CSV)</label>
              <input type="text" name="strengths" value={formData.strengths} onChange={handleChange} className="input-premium" placeholder="E.g. React, Problem Solving, Leadership" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Weaknesses (CSV)</label>
              <input type="text" name="weaknesses" value={formData.weaknesses} onChange={handleChange} className="input-premium" placeholder="E.g. Public Speaking, CSS Animations" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Hobbies</label>
            <input type="text" name="hobbies" value={formData.hobbies} onChange={handleChange} className="input-premium" placeholder="What do you do for fun?" />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Remarkable Achievements</label>
            <textarea name="remarkableAchievements" value={formData.remarkableAchievements} onChange={handleChange} rows={3} className="input-premium" placeholder="Awards, Open Source contributions, large projects..." />
          </div>

          <button type="submit" disabled={isSubmitting} className="btn-primary w-full py-4 text-lg mt-8 rounded-xl">
            {isSubmitting ? "Submitting..." : "Submit Form"}
          </button>
        </form>
      </div>
    </div>
  );
}
