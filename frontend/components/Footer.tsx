"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Footer({ cmsData, siteName }: { cmsData?: any, siteName?: string }) {
  const pathname = usePathname();
  const isPublicPage = !pathname?.startsWith("/student") && !pathname?.startsWith("/faculty") && !pathname?.startsWith("/admin") && !pathname?.startsWith("/auth");

  if (!isPublicPage) return null;

  const brandDescription = cmsData?.brandDescription || "Engineering education for the future. Built by engineers, for engineers.";
  const copyright = cmsData?.copyright || "© 2026 CodersSpot Education Inc. All rights reserved.";
  
  const defaultLearnLinks = [
    { label: "Courses", url: "/courses" },
    { label: "Placements", url: "/placements" },
    { label: "Testimonials", url: "/testimonials" },
    { label: "Insights", url: "/insights" },
  ];
  const learnLinks = cmsData?.learnLinks?.length > 0 ? cmsData.learnLinks : defaultLearnLinks;

  const defaultCompanyLinks = [
    { label: "About Us", url: "/about" },
    { label: "Careers", url: "/careers" },
    { label: "Contact", url: "/contact" },
    { label: "Feedback", url: "/feedback" },
  ];
  const companyLinks = cmsData?.companyLinks?.length > 0 ? cmsData.companyLinks : defaultCompanyLinks;

  const defaultLegalLinks = [
    { label: "Privacy Policy", url: "/legal/privacy" },
    { label: "Terms of Service", url: "/legal/terms" },
    { label: "Cookie Policy", url: "/legal/cookies" },
    { label: "Refund Policy", url: "/legal/refund" },
  ];
  const legalLinks = cmsData?.legalLinks?.length > 0 ? cmsData.legalLinks : defaultLegalLinks;

  return (
    <footer className="pt-20 pb-10 border-t relative z-10 backdrop-blur-md" style={{ borderColor: 'var(--border-soft)', background: 'color-mix(in srgb, var(--bg-card) 80%, transparent)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 md:col-span-1">
               <Link href="/" className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#0EA5E9]"></div>
                  <span className="heading-font text-xl font-bold">{siteName || "CodersSpot"}</span>
               </Link>
               <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>{brandDescription}</p>
            </div>
            
            <div>
               <h4 className="font-bold mb-6">Learn</h4>
               <ul className="space-y-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                 {learnLinks.map((link: any, idx: number) => (
                   <li key={idx}>
                     <Link href={link.url} className="hover:text-[var(--accent-primary)] transition-colors">{link.label}</Link>
                   </li>
                 ))}
               </ul>
            </div>
            
            <div>
               <h4 className="font-bold mb-6">Company</h4>
               <ul className="space-y-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                 {companyLinks.map((link: any, idx: number) => (
                   <li key={idx}>
                     <Link href={link.url} className="hover:text-[var(--accent-primary)] transition-colors">{link.label}</Link>
                   </li>
                 ))}
               </ul>
            </div>
            
            <div>
               <h4 className="font-bold mb-6">Legal</h4>
               <ul className="space-y-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                 {legalLinks.map((link: any, idx: number) => (
                   <li key={idx}>
                     <Link href={link.url} className="hover:text-[var(--accent-primary)] transition-colors">{link.label}</Link>
                   </li>
                 ))}
               </ul>
            </div>
         </div>
         
         <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm" style={{ borderColor: 'var(--border-soft)', color: 'var(--text-tertiary)' }}>
            <div>{copyright}</div>
             <div className="flex items-center gap-5">
                <Link href="#" className="hover:text-[var(--text-primary)] transition-colors hover:scale-110 transform duration-200" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </Link>
                <Link href="#" className="hover:text-[var(--text-primary)] transition-colors hover:scale-110 transform duration-200" aria-label="GitHub">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                </Link>
                <Link href="#" className="hover:text-[var(--text-primary)] transition-colors hover:scale-110 transform duration-200" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </Link>
             </div>
         </div>
      </div>
    </footer>
  );
}
