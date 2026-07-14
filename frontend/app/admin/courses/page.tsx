import { prisma } from "@/lib/prisma";
import CoursesClient from "./CoursesClient";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";

export default async function AdminCoursesPage() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || session.user.role !== "ADMIN") {
    redirect("/auth");
  }

  // Load all courses from database
  const dbCourses = await prisma.course.findMany({
    include: {
      faculty: {
        select: {
          id: true,
          fullName: true,
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // Serialize Decimal values for Next.js RSC transition
  const serializedCourses = dbCourses.map((c) => ({
    ...c,
    price: c.price.toString(),
    createdAt: c.createdAt.toISOString(),
  }));

  return (
    <div className="max-w-[1200px] mx-auto space-y-8 animate-fade-in-up pb-24">
      <CoursesClient initialCourses={serializedCourses as any} />
    </div>
  );
}