export type FieldType = "string" | "text" | "number" | "boolean" | "array" | "image";

export interface FieldSchema {
  type: FieldType;
  label: string;
  default?: any;
  itemSchema?: Record<string, FieldSchema>; // For arrays of objects
}

export interface PageSchema {
  id: string;
  name: string;
  category: "global" | "public" | "student" | "faculty" | "admin";
  schema: Record<string, FieldSchema>;
}

export const CMS_SCHEMAS: PageSchema[] = [
  {
    id: "cms-config",
    name: "CMS Configuration",
    category: "admin",
    schema: {
      publicOrder: {
        type: "array",
        label: "Public Pages Order",
        itemSchema: {
          id: { type: "string", label: "Page ID", default: "" },
          isHidden: { type: "boolean", label: "Hidden in CMS?", default: false }
        },
        default: [
          { id: "public-home", isHidden: false },
          { id: "public-about", isHidden: false },
          { id: "public-navbar", isHidden: false }
        ]
      },
      studentOrder: {
        type: "array",
        label: "Student Pages Order",
        itemSchema: {
          id: { type: "string", label: "Page ID", default: "" },
          isHidden: { type: "boolean", label: "Hidden in CMS?", default: false }
        },
        default: []
      },
      facultyOrder: {
        type: "array",
        label: "Faculty Pages Order",
        itemSchema: {
          id: { type: "string", label: "Page ID", default: "" },
          isHidden: { type: "boolean", label: "Hidden in CMS?", default: false }
        },
        default: []
      },
      globalOrder: {
        type: "array",
        label: "Global Pages Order",
        itemSchema: {
          id: { type: "string", label: "Page ID", default: "" },
          isHidden: { type: "boolean", label: "Hidden in CMS?", default: false }
        },
        default: [
          { id: "global-settings", isHidden: false }
        ]
      }
    }
  },
  {
    id: "global-settings",
    name: "Global Site Settings",
    category: "global",
    schema: {
      siteName: { type: "string", label: "Website Name", default: "Aushutosh" },
      logoUrl: { type: "string", label: "Logo URL (Optional)", default: "" },
      primaryColor: { type: "string", label: "Primary Brand Color (Hex)", default: "#7C3AED" },
    }
  },
  {
    id: "public-navbar",
    name: "Main Navigation Bar",
    category: "public",
    schema: {
      links: {
        type: "array",
        label: "Navigation Links",
        itemSchema: {
          name: { type: "string", label: "Link Text", default: "New Link" },
          href: { type: "string", label: "URL Path", default: "/" },
          isActive: { type: "boolean", label: "Is Active?", default: true }
        },
        default: [
          { name: "Courses", href: "/courses", isActive: true },
          { name: "About", href: "/about", isActive: true },
          { name: "Placements", href: "/placements", isActive: true },
          { name: "Testimonials", href: "/testimonials", isActive: true },
          { name: "Contact", href: "/contact", isActive: true },
        ]
      }
    }
  },
  {
    id: "public-home",
    name: "Home Page",
    category: "public",
    schema: {
      heroTitle: { type: "string", label: "Hero Title Prefix", default: "Build skills that" },
      heroHighlight: { type: "string", label: "Hero Title Highlight", default: "ship real products." },
      heroSubtitle: { type: "text", label: "Hero Subtitle", default: "Project-based engineering courses taught by the industry's top 1%." },
      stats: {
        type: "array",
        label: "Key Statistics",
        itemSchema: {
          label: { type: "string", label: "Stat Label", default: "Students Worldwide" },
          value: { type: "string", label: "Stat Value", default: "10,000+" },
          isActive: { type: "boolean", label: "Show this stat?", default: true }
        },
        default: [
          { label: "Students Worldwide", value: "10,000+", isActive: true },
          { label: "Course Satisfaction", value: "98%", isActive: true },
          { label: "Average Rating", value: "4.9/5", isActive: true },
          { label: "Salary Increase", value: "$34M+", isActive: true },
        ]
      }
    }
  },
  {
    id: "public-about",
    name: "About Us Page",
    category: "public",
    schema: {
      heading: { type: "string", label: "Page Heading", default: "About Aushutosh" },
      story: { type: "text", label: "Our Story", default: "We started with a simple idea..." },
      team: {
        type: "array",
        label: "Team Members",
        itemSchema: {
          name: { type: "string", label: "Name", default: "John Doe" },
          role: { type: "string", label: "Role", default: "Instructor" },
          imageUrl: { type: "string", label: "Image URL", default: "" },
          isActive: { type: "boolean", label: "Is Active?", default: true }
        },
        default: []
      }
    }
  }
];

export const DEFAULT_CMS_ORDER = CMS_SCHEMAS.map(s => s.id);

export function getDefaultDataForSchema(schema: Record<string, FieldSchema>) {
  const data: any = {};
  for (const [key, field] of Object.entries(schema)) {
    data[key] = field.default;
  }
  return data;
}
