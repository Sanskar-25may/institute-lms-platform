import FacultyClient from "./FacultyClient";
import { getSiteContent } from "@/lib/cms";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export default async function FacultyPage() {
  const cmsData = await getSiteContent("public-faculty");
  
  const facultyMembers = await prisma.user.findMany({
    where: {
      role: "INSTRUCTOR",
      isBlocked: false,
    },
    include: {
      profile: true,
      courses: {
        where: { status: "PUBLISHED" },
        select: { title: true }
      }
    }
  });

  return <FacultyClient initialData={cmsData} facultyList={facultyMembers} />;
}