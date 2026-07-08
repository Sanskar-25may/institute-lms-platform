import { prisma } from "@/lib/prisma";

export async function getSiteContent(pageId: string, defaultContent: any = {}) {
  try {
    const page = await prisma.siteContent.findUnique({
      where: { pageId },
    });

    if (!page || !page.content) {
      return defaultContent;
    }

    // Merge default content with DB content (shallow merge for top-level keys)
    return { ...defaultContent, ...(page.content as object) };
  } catch (error) {
    console.error(`Failed to load CMS content for ${pageId}:`, error);
    return defaultContent;
  }
}
