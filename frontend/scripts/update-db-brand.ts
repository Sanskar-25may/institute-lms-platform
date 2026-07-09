import { prisma } from "../lib/prisma";

async function main() {
  console.log("Updating CMS content in database...");
  
  const allContent = await prisma.siteContent.findMany();
  let updatedCount = 0;

  for (const item of allContent) {
    if (item.content) {
      let dataStr = JSON.stringify(item.content);
      let changed = false;

      // Replace Aushutosh, Ashutosh, Lumina variants
      const replacements = [
        { from: /Aushutosh/g, to: 'JavaCoders' },
        { from: /aushutosh/g, to: 'javacoders' },
        { from: /Ashutosh/g, to: 'JavaCoders' },
        { from: /ashutosh/g, to: 'javacoders' },
        { from: /Lumina/g, to: 'JavaCoders' },
        { from: /lumina/g, to: 'javacoders' },
        { from: /AUSHUTOSH/g, to: 'JAVACODERS' },
        { from: /ASHUTOSH/g, to: 'JAVACODERS' }
      ];

      for (const { from, to } of replacements) {
        if (from.test(dataStr)) {
          dataStr = dataStr.replace(from, to);
          changed = true;
        }
      }

      if (changed) {
        if (dataStr.includes("pandey.javacoders699")) {
          dataStr = dataStr.replace(/pandey\.javacoders699/g, "pandey.ashutosh699");
        }

        await prisma.siteContent.update({
          where: { id: item.id },
          data: { content: JSON.parse(dataStr) }
        });
        updatedCount++;
        console.log(`Updated CMS content for: ${item.pageId}`);
      }
    }
  }

  console.log(`Successfully updated ${updatedCount} CMS records in the database.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
