"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Shared shell for /student, /instructor, and /admin dashboards.
 * Replaces the three near-identical layout.tsx files with one
 * component that just takes role-specific config as props.
 *
 * Usage in e.g. app/student/layout.tsx:
 *
 *   import DashboardShell from "@/components/DashboardShell";
 *   import { LayoutGrid, BookOpen, Video, ClipboardList, Calendar, MessageSquare, Settings } from "lucide-react";
 *
 *   const studentNav = [
 *     { href: "/student", label: "Overview", icon: LayoutGrid },
 *     { href: "/student/courses", label: "My Courses", icon: BookOpen },
 *     { href: "/student/live", label: "Live Classes", icon: Video, showDot: true },
 *     { href: "/student/assignments", label: "Assignments", icon: ClipboardList, badge: 2 },
 *     { href: "/student/calendar", label: "Calendar", icon: Calendar },
 *     { href: "/student/messages", label: "Messages", icon: MessageSquare },
 *   ];
 *
 *   export default function StudentLayout({ children }: { children: React.ReactNode }) {
 *     return (
 *       <DashboardShell role="Student" navItems={studentNav} settingsHref="/student/settings" userInitials="SG">
 *         {children}
 *       </DashboardShell>
 *     );
 *   }
 *
 * Note: this uses simple inline SVGs instead of lucide-react so it has
 * zero new dependencies — swap in an icon library if you prefer.
 */

export type NavItem = {
  href: string;
  label: string;
  icon: ReactNode;
  badge?: number;
  showDot?: boolean;
};

type DashboardShellProps = {
  role: string;
  navItems: NavItem[];
  settingsHref?: string;
  userInitials?: string;
  welcomeName?: string;
  children: ReactNode;
};

export default function DashboardShell({
  role,
  navItems,
  settingsHref,
  userInitials = "??",
  welcomeName,
  children,
}: DashboardShellProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-[#0B0F19] font-sans text-slate-300 selection:bg-violet-500/30 overflow-hidden">
      {/* --- SIDEBAR NAVIGATION --- */}
      <aside className="w-[260px] bg-[#0B0F19] border-r border-white/5 h-full flex flex-col hidden lg:flex relative z-20 shrink-0">
        <div className="pt-8 pb-6 px-6 border-b border-white/5">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-600/20">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Lumina</span>
          </Link>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{role}</p>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1 [&::-webkit-scrollbar]:hidden">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all group ${
                  isActive
                    ? "text-white bg-white/[0.06]"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5">{item.icon}</span>
                  {item.label}
                </div>
                {item.showDot && (
                  <span className="w-2 h-2 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
                {typeof item.badge === "number" && (
                  <span className="bg-violet-500/20 text-violet-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}

          {settingsHref && (
            <div className="pt-4 mt-4 border-t border-white/5">
              <Link
                href={settingsHref}
                className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/[0.02] rounded-xl font-medium transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Settings
              </Link>
            </div>
          )}
        </nav>
      </aside>

      {/* --- MAIN CONTENT WRAPPER --- */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none z-0" />

        <header className="h-20 bg-[#0B0F19]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-8 z-10 sticky top-0">
          <div className="flex items-center gap-4">
            {welcomeName && (
              <h2 className="text-xl font-bold text-white tracking-tight hidden md:block">
                Welcome back, {welcomeName} 👋
              </h2>
            )}
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <label htmlFor="dashboard-search" className="sr-only">
                Search
              </label>
              <input
                id="dashboard-search"
                type="text"
                placeholder="Search courses, students..."
                className="w-64 pl-10 pr-4 py-2 bg-[#131B2F] border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors shadow-inner"
              />
            </div>

            <button aria-label="Notifications" className="relative text-slate-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-[#0B0F19] rounded-full" />
            </button>

            <div className="flex items-center gap-3 cursor-pointer pl-4 border-l border-white/5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                {userInitials}
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8 relative z-10 [&::-webkit-scrollbar]:hidden">{children}</main>
      </div>
    </div>
  );
}
