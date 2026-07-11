import FacultyPortfolioClient from "./FacultyPortfolioClient";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

export default async function FacultyPortfolioPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  const faculty = await prisma.user.findUnique({
    where: { 
      id: resolvedParams.id,
      role: "INSTRUCTOR",
      isBlocked: false,
    },
    include: {
      profile: true,
      courses: {
        where: { status: "PUBLISHED" },
      }
    }
  });

  if (!faculty) {
    notFound();
  }

  return <FacultyPortfolioClient faculty={faculty} />;
}
