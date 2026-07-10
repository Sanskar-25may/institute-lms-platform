import { getSiteContent } from "@/lib/cms";
import { prisma } from "@/lib/prisma";
import InsightsClient from "./InsightsClient";

export default async function InsightsPage() {
  const cmsData = await getSiteContent("public-insights");
  
  // Fetch from the new schema
  const dbPosts = await prisma.insightPost.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      author: true,
      likes: true,
      comments: {
        include: { author: true },
        orderBy: { createdAt: "asc" }
      }
    }
  });

  // Map to the format InsightsClient expects
  const mappedPosts = dbPosts.map(post => ({
    id: post.id,
    title: post.title,
    content: post.content,
    imageUrl: post.imageUrl,
    videoUrl: post.videoUrl,
    codeSnippet: post.codeSnippet,
    date: post.createdAt.toISOString(),
    author: post.author.fullName || post.author.name || "User",
    likes: post.likes.length,
    comments: post.comments.map(c => ({
      text: c.content,
      date: c.createdAt.toISOString(),
      author: c.author.fullName || c.author.name || "User"
    }))
  }));

  return <InsightsClient cmsData={cmsData} initialPosts={mappedPosts} />;
}
