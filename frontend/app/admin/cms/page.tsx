"use client";

import { useState, useEffect } from "react";

type Tab = "public" | "student" | "faculty";

const PAGES = {
  public: [
    { id: "public-home", name: "Home Page" },
    { id: "public-about", name: "About Us" },
    { id: "public-contact", name: "Contact Page" },
    { id: "public-navbar", name: "Navigation Bar" },
    { id: "public-footer", name: "Footer" },
  ],
  student: [
    { id: "student-dashboard", name: "Student Dashboard" },
    { id: "student-classroom", name: "Classroom Layout" },
    { id: "student-assignments", name: "Assignments Page" },
  ],
  faculty: [
    { id: "faculty-dashboard", name: "Faculty Dashboard" },
    { id: "faculty-course-builder", name: "Course Builder Guide" },
    { id: "faculty-submissions", name: "Submissions View" },
  ],
};

export default function CMSAdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>("public");
  const [activePageId, setActivePageId] = useState<string>(PAGES.public[0].id);
  const [content, setContent] = useState<string>("{}");
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // When tab changes, default to the first page in that tab
    const firstPageId = PAGES[activeTab][0].id;
    setActivePageId(firstPageId);
  }, [activeTab]);

  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true);
      setMessage("");
      try {
        const res = await fetch(`/api/admin/cms?pageId=${activePageId}`);
        const data = await res.json();
        setContent(JSON.stringify(data.content || {}, null, 2));
      } catch (error) {
        console.error(error);
        setMessage("Failed to load content.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchContent();
  }, [activePageId]);

  const handleSave = async () => {
    setIsSaving(true);
    setMessage("");
    try {
      let parsedContent = {};
      try {
        parsedContent = JSON.parse(content);
      } catch (e) {
        setMessage("Invalid JSON format.");
        setIsSaving(false);
        return;
      }

      const res = await fetch("/api/admin/cms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pageId: activePageId,
          category: activeTab,
          content: parsedContent,
        }),
      });

      if (res.ok) {
        setMessage("Saved successfully!");
      } else {
        setMessage("Failed to save.");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while saving.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)]" style={{ background: 'var(--bg-base)' }}>
      {/* CMS Header / Tabs */}
      <div className="border-b px-6 py-4 flex items-center justify-between" style={{ borderColor: 'var(--border-soft)', background: 'var(--bg-card)' }}>
        <div>
          <h1 className="heading-font text-2xl font-bold">Content Management System</h1>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Manage all content and layouts dynamically.</p>
        </div>
        <div className="flex bg-black/5 p-1 rounded-xl" style={{ background: 'var(--bg-surface)' }}>
          {(["public", "student", "faculty"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-bold rounded-lg transition-all capitalize ${activeTab === tab ? 'bg-white shadow-sm text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
              style={activeTab === tab ? {background: 'var(--bg-card)'} : {}}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 border-r overflow-y-auto p-4" style={{ borderColor: 'var(--border-soft)', background: 'var(--bg-surface)' }}>
          <h2 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-secondary)' }}>
            {activeTab} Pages
          </h2>
          <div className="space-y-1">
            {PAGES[activeTab].map((page) => (
              <button
                key={page.id}
                onClick={() => setActivePageId(page.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activePageId === page.id ? 'bg-[var(--accent-primary)] text-white' : 'hover:bg-black/5 dark:hover:bg-white/5'}`}
                style={activePageId !== page.id ? { color: 'var(--text-secondary)' } : {}}
              >
                {page.name}
              </button>
            ))}
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col p-6 bg-[var(--bg-base)] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">
              Editing: {PAGES[activeTab].find(p => p.id === activePageId)?.name}
            </h2>
            <button
              onClick={handleSave}
              disabled={isSaving || isLoading}
              className="btn-primary px-6 py-2 rounded-lg text-sm font-bold"
            >
              {isSaving ? "Saving..." : "Save Content"}
            </button>
          </div>

          {message && (
            <div className={`p-3 rounded-lg mb-4 text-sm font-bold ${message.includes('success') ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-500 border border-rose-500/20'}`}>
              {message}
            </div>
          )}

          <div className="flex-1 flex flex-col rounded-xl border overflow-hidden" style={{ borderColor: 'var(--border-soft)', background: 'var(--bg-card)' }}>
            <div className="px-4 py-2 border-b text-xs font-mono" style={{ borderColor: 'var(--border-soft)', background: 'var(--bg-surface)', color: 'var(--text-secondary)' }}>
              JSON Payload
            </div>
            {isLoading ? (
              <div className="flex-1 flex items-center justify-center" style={{ color: 'var(--text-secondary)' }}>Loading...</div>
            ) : (
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="flex-1 w-full p-4 bg-transparent outline-none font-mono text-sm resize-none"
                style={{ color: 'var(--text-primary)' }}
                spellCheck={false}
              />
            )}
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--text-secondary)' }}>
            Note: For V1, the CMS uses an advanced JSON payload editor allowing infinite layout configurations without breaking the UI.
          </p>
        </div>
      </div>
    </div>
  );
}
