import { getSiteContent } from "@/lib/cms";
import { getCourses } from "@/app/actions";
import CoursesCatalogClient from "./CoursesCatalogClient";

export default async function CoursesCatalog() {
  const cmsData = await getSiteContent("public-courses");
  
  let dbCourses: any[] = [];
  try {
    dbCourses = await getCourses();
  } catch (e) {
    console.error("Failed to fetch courses from DB:", e);
  }

  // Format database courses to match cards layout
  const formattedDbCourses = dbCourses.map((c: any) => ({
    id: c.id,
    title: c.title,
    instructor: c.faculty?.fullName || "Aisha Verma",
    rating: "4.9",
    level: c.difficulty || "Intermediate",
    tags: c.tags || ["Web Development"],
    price: `₹${c.price || 149}`,
    badge: c.badge || "",
    badgeClass: "badge-primary",
    color: "from-violet-500 to-indigo-500"
  }));

  const fallbackCourses = [
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

  // Merge database courses with fallbacks to always show 6 courses
  const coursesList: any[] = [...formattedDbCourses];
  if (coursesList.length < 6) {
    const existingTitles = new Set(coursesList.map(c => c.title.toLowerCase()));
    for (const fb of fallbackCourses) {
      if (coursesList.length >= 6) break;
      if (!existingTitles.has(fb.title.toLowerCase())) {
        coursesList.push(fb);
      }
    }
  }

  return <CoursesCatalogClient cmsData={cmsData} courses={coursesList} />;
}