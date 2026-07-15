import Link from "next/link";
import { getSiteContent } from "@/lib/cms";

const DEFAULT_STATS = [
  { value: '93%', title: 'Job Offer Rate', sub: 'of graduates receive a job offer within 90 days' },
  { value: '62%', title: 'Average Hike', sub: 'average salary increase after completing our programs' },
  { value: '44 LPA', title: 'Top Package', sub: 'highest salary package received by a CodersSpot graduate' },
];

const DEFAULT_COMPANIES = [
  { name: 'Google' },
  { name: 'Microsoft' },
  { name: 'Amazon' },
  { name: 'Razorpay' },
  { name: 'Paytm' },
  { name: 'Cred' },
  { name: 'Flipkart' },
  { name: 'Meta' },
  { name: 'Netflix' },
  { name: 'Zepto' },
];

const DEFAULT_ALUMNI = [
  {
    name: 'Rohan D.',
    prev: 'Junior PHP Dev',
    now: 'Senior React Engineer @ Razorpay',
    quote: 'The curriculum is exactly what the industry needs. I went from tutorial hell to production codebases in 3 months.',
    imgUrl: ''
  },
  {
    name: 'Priya N.',
    prev: 'Data Entry Analyst',
    now: 'Data Engineer @ Google',
    quote: 'The SQL and data pipeline modules were the best I\'ve ever seen. I got promoted twice in 8 months.',
    imgUrl: ''
  },
  {
    name: 'Aman V.',
    prev: 'IT Support',
    now: 'DevOps Engineer @ Amazon',
    quote: 'I learned more in 3 months at CodersSpot than in 3 years of self-study.',
    imgUrl: ''
  },
];

const PARTNER_COLORS: Record<string, string> = {
  Google: '#4285F4',
  Microsoft: '#00BCF2',
  Amazon: '#FF9900',
  Razorpay: '#528FF0',
  Paytm: '#002970',
  Cred: '#1C1C1E',
  Flipkart: '#2874F0',
  Meta: '#0668E1',
  Netflix: '#E50914',
  Zepto: '#8A2BE2',
};

function BrandLogo({ name }: { name: string }) {
  switch (name) {
    case 'Google':
      return (
        <div className="flex items-center gap-0.5 font-bold text-base select-none">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </div>
      );
    case 'Microsoft':
      return (
        <div className="flex items-center gap-1.5 select-none">
          <div className="grid grid-cols-2 gap-[1px] w-[12px] h-[12px]">
            <div className="bg-[#F25022]"></div>
            <div className="bg-[#7FBA00]"></div>
            <div className="bg-[#00A4EF]"></div>
            <div className="bg-[#FFB900]"></div>
          </div>
          <span className="font-semibold text-xs text-[#5E5E5E] dark:text-[#E6EDF3] tracking-tight">Microsoft</span>
        </div>
      );
    case 'Meta':
      return (
        <div className="flex items-center gap-1 select-none">
          <svg className="w-4.5 h-4.5 text-[#0668E1]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.14 8.78c-1.12 0-2.18.57-2.92 1.48a7.8 7.8 0 00-2.93-1.48c-2.31-.38-4.52.88-5.36 3.06a4.7 4.7 0 002.32 5.92c2.09 1.15 4.67.58 6.09-1.34 1.42 1.92 4 2.49 6.09 1.34a4.7 4.7 0 002.32-5.92c-.84-2.18-3.05-3.44-5.36-3.06m-6.49 5.86c-.95 1.16-2.6 1.4-3.83.56a2.82 2.82 0 01-1.33-3.4c.48-1.25 1.76-1.97 3.08-1.74a4.23 4.23 0 012.08 1.17c-.12.98.05 1.98-.56 2.85m8.11 0c-.61-.87-.44-1.87-.56-2.85a4.23 4.23 0 012.08-1.17c1.32-.23 2.6.49 3.08 1.74a2.82 2.82 0 01-1.33 3.4c-1.23.84-2.88.6-3.83-.56"/>
          </svg>
          <span className="font-semibold text-xs tracking-tight text-[#0668E1] dark:text-[#E6EDF3]">Meta</span>
        </div>
      );
    case 'Amazon':
      return (
        <div className="flex flex-col items-center select-none pt-0.5">
          <span className="font-bold text-xs tracking-tight text-black dark:text-white leading-none">amazon</span>
          <svg viewBox="0 0 100 25" className="w-8 h-2 text-[#FF9900]" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinejoin="round">
            <path d="M 10,5 Q 50,22 90,5" />
            <polyline points="80,2 90,5 83,14" strokeLinejoin="round" />
          </svg>
        </div>
      );
    case 'Netflix':
      return (
        <span className="font-black text-xs tracking-widest text-[#E50914] uppercase select-none">
          Netflix
        </span>
      );
    case 'Razorpay':
      return (
        <div className="flex items-center gap-1 font-bold text-xs text-[#0B3E91] dark:text-[#528FF0] select-none">
          <svg className="w-3.5 h-3.5 text-[#00A1E0]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.5 19h19l-7-14h-5z"/>
          </svg>
          Razorpay
        </div>
      );
    case 'Paytm':
      return (
        <div className="font-extrabold text-xs text-[#002970] dark:text-[#00B9F5] select-none">
          pay<span className="text-[#00B9F5]">tm</span>
        </div>
      );
    case 'Cred':
      return (
        <span className="font-mono tracking-widest text-[10px] font-bold text-black dark:text-white uppercase select-none">
          CRED
        </span>
      );
    case 'Flipkart':
      return (
        <div className="flex items-center gap-0.5 font-bold italic text-xs text-[#2874F0] dark:text-[#FFE500] select-none">
          <span className="text-blue-500">Flip</span>
          <span className="text-[#FFE500] dark:text-white">kart</span>
        </div>
      );
    case 'Zepto':
      return (
        <div className="px-2 py-0.5 rounded bg-[#3B0066] text-[#FF4500] font-black text-[10px] tracking-tight italic select-none">
          zepto
        </div>
      );
    default:
      return <span style={{ color: 'var(--text-secondary)' }}>{name}</span>;
  }
}

export default async function PlacementsPage() {
  const cmsData = await getSiteContent("public-placements");

  const statsList = (cmsData?.stats && cmsData.stats.filter((s: any) => s.isActive !== false).length > 0)
    ? cmsData.stats.filter((s: any) => s.isActive !== false)
    : DEFAULT_STATS;

  const companiesList = (cmsData?.companies && cmsData.companies.filter((c: any) => c.isActive !== false).length > 0)
    ? cmsData.companies.filter((c: any) => c.isActive !== false)
    : DEFAULT_COMPANIES;

  const alumniList = (cmsData?.alumni && cmsData.alumni.filter((a: any) => a.isActive !== false).length > 0)
    ? cmsData.alumni.filter((a: any) => a.isActive !== false)
    : DEFAULT_ALUMNI;

  return (
    <div className="min-h-screen pt-32 pb-20 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full mb-6 font-semibold text-sm" style={{ background: 'var(--bg-elevated)', color: 'var(--accent-primary)', border: '1px solid var(--border-soft)' }}>
             Career Outcomes
          </div>
          <h1 className="heading-font text-5xl md:text-6xl font-bold mb-6">{cmsData?.heading || "Where our alumni work"}</h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>{cmsData?.subtitle || "CodersSpot graduates don't just pass interviews; they hit the ground running on day one. Here's where they are building the future."}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
           {statsList.map((stat: any, i: number) => (
             <div key={i} className="p-8 text-center rounded-[24px]" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-soft)' }}>
                <h3 className="text-4xl font-bold mb-2 gradient-text">{stat.value}</h3>
                <h4 className="font-bold text-lg mb-2">{stat.title}</h4>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{stat.sub}</p>
             </div>
           ))}
        </div>

        {/* Logos grid */}
        <div className="mb-24 text-center">
           <h3 className="font-bold mb-10 text-xl" style={{ color: 'var(--text-secondary)' }}>Hiring Partners</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {companiesList.map((company: any, i: number) => {
                 const name = company.name;
                 return (
                   <div key={i} className="group h-20 relative flex items-center justify-center rounded-xl font-bold text-xl cursor-default overflow-hidden transition-all duration-300 hover:scale-105 shadow-sm" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-soft)' }}>
                      <BrandLogo name={name} />
                   </div>
                 );
              })}
           </div>
        </div>

        {/* Alumni Spotlights */}
        <div>
           <h2 className="heading-font text-3xl font-bold text-center mb-12">Alumni Spotlights</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {alumniList.map((alumni: any, i: number) => (
                 <div key={i} className="p-8 rounded-[24px] relative overflow-hidden card-hover" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-soft)' }}>
                      <div className="absolute top-0 right-0 w-32 h-32 blur-[50px] opacity-20" style={{ background: 'var(--accent-primary)' }}></div>
                      <div className="relative z-10">
                         {alumni.imgUrl ? (
                           <img src={alumni.imgUrl} alt={alumni.name} className="w-16 h-16 rounded-full mb-6 object-cover border-2" style={{ borderColor: 'var(--bg-surface)' }} />
                         ) : (
                           <div className="w-16 h-16 rounded-full mb-6 border-2 flex items-center justify-center font-bold text-white shadow-lg" style={{ borderColor: 'var(--bg-surface)', background: 'var(--accent-primary)' }}>
                             {alumni.name?.[0] || "?"}
                           </div>
                         )}
                         <h3 className="font-bold text-xl mb-1">{alumni.name}</h3>
                         
                         <div className="flex flex-col gap-2 mt-4 mb-6 text-sm">
                            <div className="flex items-center gap-2">
                               <span className="px-2 py-1 rounded bg-black/5 font-semibold" style={{ color: 'var(--text-secondary)' }}>Before</span>
                               <span>{alumni.prev || 'Student'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                               <span className="px-2 py-1 rounded font-semibold text-white" style={{ background: 'var(--accent-primary)' }}>After</span>
                               <span className="font-bold" style={{ color: 'var(--text-primary)' }}>{alumni.now}</span>
                            </div>
                         </div>
                         
                         <p className="italic text-sm" style={{ color: 'var(--text-secondary)' }}>"{alumni.quote}"</p>
                      </div>
                   </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}