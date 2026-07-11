"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CODE_SNIPPET = `"use server";
import { db } from "@/lib/db";
import { courses, enrollments } from "@/lib/schema";
import { eq, and } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function enrollInCourse(userId: string, courseId: string) {
  // 1. Verify course exists & is published
  const course = await db.query.courses.findFirst({
    where: and(eq(courses.id, courseId), eq(courses.status, "PUBLISHED")),
  });

  if (!course) throw new Error("Course not found or inactive.");

  // 2. Process enrollment securely on the edge
  await db.insert(enrollments).values({
    userId,
    courseId,
    enrolledAt: new Date(),
  });

  // 3. Revalidate dashboard cache instantly
  revalidatePath("/student/dashboard");
  
  return { success: true, message: "Welcome to the course!" };
}`;

export default function LiveCodeEditor() {
  const [displayedCode, setDisplayedCode] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedCode(CODE_SNIPPET.substring(0, i));
      i++;
      if (i > CODE_SNIPPET.length) {
        clearInterval(intervalId);
        setIsTyping(false);
        // Reset after 8 seconds to loop the animation
        setTimeout(() => {
          i = 0;
          setIsTyping(true);
        }, 8000);
      }
    }, 40); // 40ms per character

    return () => clearInterval(intervalId);
  }, []);

  const highlightCode = (code: string) => {
    let html = code
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      // Keywords
      .replace(/\b(import|from|const|let|var|await|async|if|return|new|export|function|throw)\b/g, '<span style="color: #c678dd">$1</span>')
      // Strings (handle quotes safely)
      .replace(/("[^"]*")/g, '<span style="color: #98c379">$1</span>')
      // Comments
      .replace(/(\/\/.*)/g, '<span style="color: #5c6370; font-style: italic">$1</span>')
      // Functions/Methods
      .replace(/\b(query|findFirst|insert|values|revalidatePath|Error)\b/g, '<span style="color: #61afef">$1</span>')
      // Booleans and primitive classes
      .replace(/\b(true|false|Date)\b/g, '<span style="color: #d19a66">$1</span>');
      
    return { __html: html + (isTyping ? '<span class="animate-pulse" style="color: #528bff">|</span>' : '') };
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-32 px-4 sm:px-6 relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-10"
      >
        <h2 className="heading-font text-3xl font-bold mb-4">Learn by building real systems.</h2>
        <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
          Write production-grade code using the modern stack. No more toy examples.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="rounded-xl overflow-hidden shadow-2xl border"
        style={{ background: '#1e1e1e', borderColor: 'var(--border-strong)' }}
      >
        {/* Mac OS Window Controls */}
        <div className="flex items-center px-4 py-3 bg-[#252526] border-b border-[#333]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="mx-auto text-xs text-[#858585] font-mono tracking-wider">actions.ts — CodersSpot</div>
        </div>
        
        {/* Code Area */}
        <div className="p-6 md:p-8 overflow-x-auto text-sm md:text-base font-mono leading-relaxed text-[#abb2bf] whitespace-pre text-left">
          <div dangerouslySetInnerHTML={highlightCode(displayedCode)} />
        </div>
      </motion.div>
    </div>
  );
}
