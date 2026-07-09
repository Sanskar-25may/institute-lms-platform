import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { postId, action, comment } = data; // action: 'like' | 'comment'

    if (!postId || !action) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Fetch the public-insights page content
    const siteContent = await prisma.siteContent.findUnique({
      where: { pageId: "public-insights" },
    });

    if (!siteContent) {
      return NextResponse.json({ error: "Insights not found." }, { status: 404 });
    }

    const contentObj = siteContent.content as any;
    if (!contentObj || !Array.isArray(contentObj.posts)) {
      return NextResponse.json({ error: "No posts available." }, { status: 404 });
    }

    let updated = false;
    const newPosts = contentObj.posts.map((post: any) => {
      if (post.id === postId) {
        updated = true;
        if (action === "like") {
          post.likes = (post.likes || 0) + 1;
        } else if (action === "comment" && comment) {
          if (!post.comments) post.comments = [];
          post.comments.push({ text: comment, date: new Date().toISOString() });
        }
      }
      return post;
    });

    if (!updated) {
      return NextResponse.json({ error: "Post not found." }, { status: 404 });
    }

    contentObj.posts = newPosts;

    await prisma.siteContent.update({
      where: { pageId: "public-insights" },
      data: { content: contentObj },
    });

    return NextResponse.json({ success: true, message: "Interaction saved" });
  } catch (error) {
    console.error("Error interacting with post:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
