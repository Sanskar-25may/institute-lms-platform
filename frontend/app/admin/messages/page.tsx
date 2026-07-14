import { prisma } from "@/lib/prisma";
import MessagesClient from "./MessagesClient";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";

export default async function AdminMessagesPage() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || session.user.role !== "ADMIN") {
    redirect("/auth");
  }

  const instructors = await prisma.user.findMany({
    where: { role: "INSTRUCTOR" },
    select: {
      id: true,
      fullName: true,
      name: true,
      email: true,
    },
  });

  return <MessagesClient instructors={instructors} />;
}
