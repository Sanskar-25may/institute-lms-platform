import { prisma } from "../lib/prisma";

async function main() {
  const updatedAdmin = await prisma.user.updateMany({
    where: { role: "ADMIN" },
    data: { onboardingCompleted: true }
  });
  console.log("Admin onboarding status updated:", updatedAdmin.count);
}

main().catch(console.error).finally(() => process.exit(0));
