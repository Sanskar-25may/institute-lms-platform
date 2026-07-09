import Link from "next/link";
import { getSiteContent } from "@/lib/cms";

export default async function AboutPage() {
  const cmsData = await getSiteContent("public-about");

  return (
    <div className="min-h-screen pt-32 pb-20 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="heading-font text-5xl md:text-6xl font-bold mb-6">{cmsData.heading || "About JavaCoders"}</h1>
          <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>We're on a mission to bridge the gap between academic theory and production reality.</p>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
          <div>
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team collaborating" className="rounded-2xl shadow-2xl" />
          </div>
          <div className="space-y-6">
            <h2 className="heading-font text-3xl font-bold">The Problem We Saw</h2>
            <div className="pl-6 border-l-4" style={{ borderColor: 'var(--accent-primary)' }}>
              <p className="text-lg leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--text-secondary)' }}>
                {cmsData.story}
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="heading-font text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Ship Over Read", desc: "Theory is useless without practice. We prioritize building over watching." },
              { title: "Radical Candor", desc: "Code reviews shouldn't be nice; they should be honest and constructive." },
              { title: "Skin in the Game", desc: "Our instructors actively work in the industry. No career academics." },
              { title: "Community First", desc: "Your network is your net worth. We foster deep peer relationships." }
            ].map((value, i) => (
              <div key={i} className="p-8 rounded-[24px]" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-soft)' }}>
                 <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 font-bold text-xl" style={{ background: 'var(--accent-primary)', color: 'white' }}>{i + 1}</div>
                 <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                 <p style={{ color: 'var(--text-secondary)' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-24">
          <h2 className="heading-font text-3xl font-bold text-center mb-12">The Team Behind {cmsData.heading ? cmsData.heading.replace('About ', '') : 'JavaCoders'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {cmsData.team && cmsData.team.filter((t: any) => t.isActive !== false).length > 0 ? (
              cmsData.team.filter((t: any) => t.isActive !== false).map((person: any, i: number) => (
                <div key={i} className="text-center group">
                   <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-xs text-center p-4" style={{ borderColor: 'var(--bg-surface)', color: 'var(--text-secondary)' }}>
                     {person.imageUrl ? (
                       <img src={person.imageUrl} alt={person.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                     ) : (
                       <span>No image from CMS</span>
                     )}
                   </div>
                   <h3 className="font-bold text-xl">{person.name || "No name from CMS"}</h3>
                   <p style={{ color: 'var(--text-tertiary)' }}>{person.role || "No role"}</p>
                </div>
              ))
            ) : (
              <div className="text-center group col-span-1 md:col-start-2 lg:col-start-auto">
                 <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-xs text-center p-4" style={{ borderColor: 'var(--bg-surface)', color: 'var(--text-secondary)' }}>
                   <span>No image from CMS</span>
                 </div>
                 <h3 className="font-bold text-xl">No name from CMS</h3>
                 <p style={{ color: 'var(--text-tertiary)' }}>No role from CMS</p>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 rounded-[32px]" style={{ background: 'linear-gradient(135deg, var(--bg-card), var(--bg-surface))', border: '1px solid var(--border-soft)' }}>
           <h2 className="heading-font text-3xl font-bold mb-6">Want to join us?</h2>
           <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>We are always looking for exceptional engineers who want to teach the next generation.</p>
           <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl text-lg inline-flex items-center gap-2">
              View Open Positions
           </Link>
        </div>

      </div>
    </div>
  );
}