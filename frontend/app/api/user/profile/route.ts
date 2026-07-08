import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const {
      role,
      lifeStage,
      organization,
      degree,
      experienceYears,
      techStack,
      bio,
      linkedinUrl,
      githubUrl,
      portfolioUrl,
    } = body;

    const userId = session.user.id;

    // 1. Update the User role
    // Don't downgrade ADMINs
    if (session.user.role !== "ADMIN" && (role === "STUDENT" || role === "INSTRUCTOR")) {
      await prisma.user.update({
        where: { id: userId },
        data: { role },
      });
    }

    // 2. Upsert the UserProfile
    await prisma.userProfile.upsert({
      where: { userId },
      update: {
        lifeStage,
        organization,
        degree,
        experienceYears: experienceYears ? parseInt(experienceYears, 10) : null,
        techStack: techStack || [],
        bio,
        linkedinUrl,
        githubUrl,
        portfolioUrl,
      },
      create: {
        userId,
        lifeStage,
        organization,
        degree,
        experienceYears: experienceYears ? parseInt(experienceYears, 10) : null,
        techStack: techStack || [],
        bio,
        linkedinUrl,
        githubUrl,
        portfolioUrl,
      },
    });

    return NextResponse.json({ message: "Profile saved successfully" }, { status: 200 });
  } catch (error) {
    console.error("[PROFILE_SAVE_ERROR]", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
