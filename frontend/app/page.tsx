import LandingPageClient from "@/components/LandingPageClient";
import { getSiteContent } from "@/lib/cms";

export default async function Home() {
  const cmsData = await getSiteContent("public-home", {
    heroTitle: "Build skills that",
    heroHighlight: "ship real products.",
    heroSubtitle: "Project-based engineering courses taught by the industry's top 1%. Join 10,000+ developers building the future of software.",
    stats: [
      { label: "Students Worldwide", value: "10,000+" },
      { label: "Course Satisfaction", value: "98%" },
      { label: "Industry Projects", value: "500+" },
      { label: "Hiring Partners", value: "150+" }
    ]
  });

  return <LandingPageClient initialData={cmsData} />;
}