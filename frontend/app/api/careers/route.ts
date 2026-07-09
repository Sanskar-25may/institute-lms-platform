import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const {
      personalInfo,
      educationalInfo,
      shortTermGoal,
      longTermGoal,
      weaknesses,
      strengths,
      hobbies,
      remarkableAchievements,
    } = data;

    if (!personalInfo || !educationalInfo) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const form = await prisma.careerGuidanceForm.create({
      data: {
        personalInfo,
        educationalInfo,
        shortTermGoal: shortTermGoal || "",
        longTermGoal: longTermGoal || "",
        weaknesses: weaknesses || "",
        strengths: strengths || "",
        hobbies: hobbies || "",
        remarkableAchievements: remarkableAchievements || "",
      },
    });

    return NextResponse.json({ success: true, form });
  } catch (error) {
    console.error("Error submitting career form:", error);
    return NextResponse.json({ error: "Failed to submit form." }, { status: 500 });
  }
}
