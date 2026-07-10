"use client";

import { useState } from "react";

export default function LeadsClient({ initialLeads, cmsData }: { initialLeads: any[], cmsData: any }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sourceFilter, setSourceFilter] = useState("ALL");

  const filteredLeads = initialLeads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          lead.phone.includes(searchTerm);
    const matchesSource = sourceFilter === "ALL" || lead.source.includes(sourceFilter);
    return matchesSearch && matchesSource;
  });

  const exportCSV = () => {
    const headers = ["Name", "Email", "Phone", "Source", "Status", "Created At", "Details"];
    const rows = filteredLeads.map(lead => [
      `"${lead.name}"`,
      `"${lead.email}"`,
      `"${lead.phone}"`,
      `"${lead.source}"`,
      `"${lead.status}"`,
      `"${new Date(lead.createdAt).toISOString()}"`,
      `"${lead.details}"`
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `leads_export_${new Date().getTime()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8 pb-20">
       <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
             <h1 className="heading-font text-3xl font-bold mb-2">{cmsData?.heading || "Lead Center"}</h1>
             <p style={{ color: 'var(--text-secondary)' }}>Centralized view of all generated leads.</p>
          </div>
          
          <div className="flex gap-2 w-full md:w-auto">
             <select 
               className="input-premium px-4 py-2 rounded-lg text-sm"
               value={sourceFilter}
               onChange={e => setSourceFilter(e.target.value)}
             >
               <option value="ALL">All Sources</option>
               <option value="Signup">Signups</option>
               <option value="Contact Form">Contact Forms</option>
               <option value="Career Guidance">Career Guidance</option>
             </select>
             <input 
               type="text" 
               placeholder="Search leads..." 
               className="input-premium px-4 py-2 rounded-lg text-sm flex-1 md:w-64"
               value={searchTerm}
               onChange={e => setSearchTerm(e.target.value)}
             />
             <button onClick={exportCSV} className="btn-primary px-4 py-2 rounded-lg text-sm font-bold flex items-center">Export CSV</button>
          </div>
       </div>

       <div className="rounded-[24px] overflow-hidden" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-soft)' }}>
          <div className="overflow-x-auto">
             <table className="data-table w-full text-left">
                <thead>
                   <tr className="border-b" style={{ borderColor: 'var(--border-soft)' }}>
                      <th className="p-4">Lead</th>
                      <th className="p-4">Contact</th>
                      <th className="p-4">Source</th>
                      <th className="p-4">Date</th>
                   </tr>
                </thead>
                <tbody>
                   {filteredLeads.map((lead, i) => (
                      <tr key={i} className="border-b last:border-0" style={{ borderColor: 'var(--border-soft)' }}>
                         <td className="p-4">
                            <div className="font-bold text-sm">{lead.name}</div>
                            <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>{lead.details}</div>
                         </td>
                         <td className="p-4">
                            <div className="text-sm">{lead.email}</div>
                            <div className="text-xs font-medium mt-1">{lead.phone}</div>
                         </td>
                         <td className="p-4">
                            <span className="px-2 py-1 rounded text-xs font-bold badge-neutral">{lead.source}</span>
                         </td>
                         <td className="p-4 text-xs" style={{ color: 'var(--text-secondary)' }}>
                            {new Date(lead.createdAt).toLocaleDateString()}
                         </td>
                      </tr>
                   ))}
                   {filteredLeads.length === 0 && (
                     <tr>
                        <td colSpan={4} className="p-8 text-center text-gray-500">No leads found.</td>
                     </tr>
                   )}
                </tbody>
             </table>
          </div>
       </div>
    </div>
  );
}
