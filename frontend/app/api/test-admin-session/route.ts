import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    console.log("Testing admin session retrieval...");
    const session = await getServerSession(authOptions);
    return NextResponse.json({ 
      success: true, 
      hasSession: !!session,
      user: session?.user || null 
    });
  } catch (error: any) {
    console.error("Test admin session error:", error);
    return NextResponse.json({ 
      success: false, 
      error: error.message || String(error), 
      stack: error.stack 
    }, { status: 500 });
  }
}
