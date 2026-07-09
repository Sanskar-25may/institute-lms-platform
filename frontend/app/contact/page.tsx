import ContactForm from "./ContactForm";
import { getSiteContent } from "@/lib/cms";

export default async function ContactPage() {
  const cmsData = await getSiteContent("public-contact");

  return (
    <div className="min-h-screen pt-32 pb-20 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           
           <div>
              <h1 className="heading-font text-4xl md:text-5xl font-bold mb-6">{cmsData?.heading || "Get in touch"}</h1>
              <p className="text-lg mb-12" style={{ color: 'var(--text-secondary)' }}>{cmsData?.subtitle || "Whether you have a question about our courses, corporate training, or anything else, our team is ready to answer all your questions."}</p>
              
              <div className="space-y-8">
                 <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-soft)' }}>
                       <svg className="w-6 h-6 text-[var(--accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </div>
                    <div>
                       <h3 className="font-bold text-lg">Email us</h3>
                       <p style={{ color: 'var(--text-secondary)' }}>Our friendly team is here to help.</p>
                       <p className="font-medium mt-1">{cmsData?.email || "hello@javacoders.dev"}</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-soft)' }}>
                       <svg className="w-6 h-6 text-[var(--accent-cyan)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </div>
                    <div>
                       <h3 className="font-bold text-lg">Office</h3>
                       <p style={{ color: 'var(--text-secondary)' }}>Come say hello at our HQ.</p>
                       <p className="font-medium mt-1">{cmsData?.address || "100 Market St, San Francisco, CA"}</p>
                    </div>
                 </div>
              </div>
           </div>

           <ContactForm />

        </div>
      </div>
    </div>
  );
}