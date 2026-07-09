import { getSiteContent } from "@/lib/cms";
import CareersClient from "./CareersClient";

export default async function CareersPage() {
  const cmsData = await getSiteContent("public-careers");

  return <CareersClient cmsData={cmsData} />;
}
