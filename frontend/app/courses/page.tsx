import Link from "next/link";
import Image from "next/image";
import { getSiteContent } from "@/lib/cms";

import CoursesCatalogClient from "./CoursesCatalogClient";

export default async function CoursesCatalog() {
  const cmsData = await getSiteContent("public-courses");

  const courses = [
    {
      id: "full-stack-react",
      title: "Full-Stack React & TypeScript",
      instructor: "Aisha Verma",
      rating: "4.9",
      level: "Intermediate",
      tags: ["React", "TypeScript", "Next.js"],
      price: "₹149",
      badge: "Bestseller",
      badgeClass: "badge-warning",
      color: "from-violet-500 to-fuchsia-500"
    },
    {
      id: "system-design",
      title: "System Design for Scale",
      instructor: "Marcus Chen",
      rating: "4.8",
      level: "Advanced",
      tags: ["Architecture", "Databases", "AWS"],
      price: "₹199",
      badge: "Hot",
      badgeClass: "badge-danger",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "applied-ml",
      title: "Applied Machine Learning",
      instructor: "Dr. Sarah Jenkins",
      rating: "4.9",
      level: "Advanced",
      tags: ["Python", "TensorFlow", "MLOps"],
      price: "₹249",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: "ui-ux-foundations",
      title: "UI/UX Foundations for Devs",
      instructor: "Priya Nair",
      rating: "4.7",
      level: "Beginner",
      tags: ["Figma", "Design Systems", "CSS"],
      price: "₹99",
      badge: "New",
      badgeClass: "badge-success",
      color: "from-amber-500 to-orange-500"
    },
    {
      id: "node-scaling",
      title: "Scaling Node.js Backends",
      instructor: "Diego Alvarez",
      rating: "4.8",
      level: "Intermediate",
      tags: ["Node.js", "Redis", "Docker"],
      price: "₹129",
      color: "from-rose-500 to-pink-500"
    },
    {
      id: "figma-react-native",
      title: "React Native Masterclass",
      instructor: "Elena Petrova",
      rating: "4.9",
      level: "Intermediate",
      tags: ["React Native", "Mobile", "Expo"],
      price: "₹149",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return <CoursesCatalogClient cmsData={cmsData} courses={courses} />;
}