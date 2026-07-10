import Link from "next/link";
import Image from "next/image";
import { getSiteContent } from "@/lib/cms";
import { prisma } from "@/lib/prisma";

export default async function AdminUsersPage() {
  const cmsData = await getSiteContent("admin-users");
  
  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
  });

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
             <table className="data-table w-full text-left">
                <thead>
                   <tr className="border-b" style={{ borderColor: 'var(--border-soft)' }}>
                      <th className="p-4">User</th>
                      <th className="p-4">Role</th>
                      <th className="p-4">Joined</th>
                      <th className="p-4">Actions</th>
                   </tr>
                </thead>
                <tbody>
                   {users.map((u) => (
                      <tr key={u.id} className="border-b last:border-0" style={{ borderColor: 'var(--border-soft)' }}>
                         <td className="p-4">
                            <div className="flex items-center gap-3">
                               <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0">
                                  {u.image ? (
                                    <Image src={u.image} alt="Profile" fill className="object-cover" />
                                  ) : (
                                    <div className="w-full h-full flex items-center justify-center font-bold text-gray-500">
                                      {u.email.charAt(0).toUpperCase()}
                                    </div>
                                  )}
                               </div>
                               <div>
                                  <div className="font-bold text-sm">{u.fullName || u.name || "N/A"}</div>
                                  <div className="text-xs text-gray-500">{u.email}</div>
                               </div>
                            </div>
                         </td>
                         <td className="p-4">
                            <span className={`px-2 py-1 rounded text-xs font-bold ${
                               u.role === 'ADMIN' ? 'badge-danger' :
                               u.role === 'INSTRUCTOR' ? 'badge-warning' : 'badge-primary'
                            }`}>{u.role}</span>
                         </td>
                         <td className="p-4 text-xs" style={{ color: 'var(--text-secondary)' }}>
                            {new Date(u.createdAt).toLocaleDateString()}
                         </td>
                         <td className="p-4">
                            <div className="flex gap-2">
                               <Link href={`/admin/users/edit/${u.id}`} className="text-xs font-bold text-[var(--accent-primary)] hover:underline">Edit</Link>
                               <button className="text-xs font-bold text-rose-500 hover:underline">Suspend</button>
                            </div>
                         </td>
                      </tr>
                   ))}
                   {users.length === 0 && (
                     <tr>
                        <td colSpan={4} className="p-8 text-center text-gray-500">No users found.</td>
                     </tr>
                   )}
                </tbody>
             </table>
          </div>
       </div>
    </div>
  );
}