import { getSiteContent } from "@/lib/cms";
import InsightsClient from "./InsightsClient";

export default async function InsightsPage() {
  const cmsData = await getSiteContent("public-insights");

  return <InsightsClient cmsData={cmsData} />;
}
