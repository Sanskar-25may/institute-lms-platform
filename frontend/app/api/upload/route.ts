import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ message: "No file received" }, { status: 400 });
    }

    // Check size limit (2MB)
    const MAX_SIZE = 2 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ message: "File exceeds 2MB limit" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Create a safe, unique filename
    const ext = path.extname(file.name);
    const uniqueName = `${session.user.id}-${crypto.randomBytes(4).toString("hex")}${ext}`;
    
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (e) {
      // Ignore if dir already exists
    }

    const filePath = path.join(uploadDir, uniqueName);
    await writeFile(filePath, buffer);

    // Return the public URL
    const fileUrl = `/uploads/${uniqueName}`;

    return NextResponse.json({ url: fileUrl }, { status: 200 });

  } catch (error) {
    console.error("[UPLOAD_ERROR]", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
