import Link from "next/link";
import { getSiteContent } from "@/lib/cms";

export default async function AdminUsersPage() {
  const cmsData = await getSiteContent("admin-users");

  return (
    <div className="space-y-8 pb-20">
       <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
             <h1 className="heading-font text-3xl font-bold mb-2">{cmsData?.heading || "User Management"}</h1>
             <p style={{ color: 'var(--text-secondary)' }}>Manage all platform users and roles.</p>
          </div>
          
          <div className="flex gap-2 w-full md:w-auto">
             <input type="text" placeholder="Search email..." className="input-premium px-4 py-2 rounded-lg text-sm flex-1 md:w-64" />
             <Link href="/admin/users/add" className="btn-primary px-4 py-2 rounded-lg text-sm font-bold flex items-center">Add User</Link>
          </div>
       </div>

       <div className="rounded-[24px] overflow-hidden" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-soft)' }}>
          <div className="overflow-x-auto">
             <table className="data-table">
                <thead>
                   <tr>
                      <th>User</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Last Login</th>
                      <th>Actions</th>
                   </tr>
                </thead>
                <tbody>
                   {[
                      { email: "sanskar@example.com", role: "Student", status: "Active", login: "Just now" },
                      { email: "marcus.chen@javacoders.dev", role: "Faculty", status: "Active", login: "2 hours ago" },
                      { email: "banned.user@example.com", role: "Student", status: "Suspended", login: "1 month ago" },
                      { email: "admin.super@javacoders.dev", role: "Admin", status: "Active", login: "5 mins ago" },
                   ].map((u, i) => (
                      <tr key={i}>
                         <td className="font-bold text-sm">{u.email}</td>
                         <td>
                            <span className={`px-2 py-1 rounded text-xs font-bold ${
                               u.role === 'Admin' ? 'badge-danger' :
                               u.role === 'Faculty' ? 'badge-warning' : 'badge-primary'
                            }`}>{u.role}</span>
                         </td>
                         <td>
                            <span className={`px-2 py-1 rounded text-xs font-bold ${
                               u.status === 'Active' ? 'badge-success' : 'badge-danger'
                            }`}>{u.status}</span>
                         </td>
                         <td className="text-xs" style={{ color: 'var(--text-secondary)' }}>{u.login}</td>
                         <td>
                            <div className="flex gap-2">
                               <Link href={`/admin/users/edit/${i}`} className="text-xs font-bold text-[var(--accent-primary)] hover:underline">Edit</Link>
                               <Link href={`/admin/users/suspend/${i}`} className="text-xs font-bold text-rose-500 hover:underline">Suspend</Link>
                            </div>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
       </div>
    </div>
  );
}