"use client";

import { useState } from "react";

export default function CurriculumAccordion({ initialSections }: { initialSections: any[] }) {
  const [sections, setSections] = useState(initialSections);

  const toggleSection = (index: number) => {
    setSections(sections.map((s, i) => i === index ? { ...s, expanded: !s.expanded } : s));
  };

  return (
    <div className="border rounded-2xl overflow-hidden" style={{ borderColor: 'var(--border-soft)', background: 'var(--bg-surface)' }}>
       {sections.map((section, i) => (
          <div key={i} className="border-b last:border-b-0" style={{ borderColor: 'var(--border-soft)' }}>
             <div 
               className="px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-black/5 transition-colors"
               onClick={() => toggleSection(i)}
             >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                   <h3 className="font-bold text-lg">{section.title}</h3>
                   <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
                      <span className="flex items-center gap-1">
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                         {section.lessons} lessons
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                         {section.time}
                      </span>
                   </div>
                </div>
                <div className={`transform transition-transform ${section.expanded ? 'rotate-180' : ''}`}>
                   <svg className="w-6 h-6 text-[var(--text-tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
             </div>
             
             {section.expanded && (
                <div className="px-6 py-4 border-t bg-black/5" style={{ borderColor: 'var(--border-soft)' }}>
                   <ul className="space-y-3">
                      {[1, 2, 3].map((lesson) => (
                         <li key={lesson} className="flex items-start justify-between p-3 rounded-lg hover:bg-black/5 cursor-pointer transition-colors" style={{ background: 'var(--bg-card)' }}>
                            <div className="flex items-start gap-3">
                               <div className="mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: 'color-mix(in srgb, var(--accent-primary) 15%, transparent)', color: 'var(--accent-primary)' }}>
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                               </div>
                               <div>
                                  <h4 className="font-semibold text-sm leading-tight">Lesson {lesson}: Understanding the basics</h4>
                                  <p className="text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>Video • 12:45</p>
                               </div>
                            </div>
                            <button className="text-xs font-bold text-[var(--accent-primary)] hover:underline opacity-0 group-hover:opacity-100">Preview</button>
                         </li>
                      ))}
                   </ul>
                </div>
             )}
          </div>
       ))}
    </div>
  );
}
