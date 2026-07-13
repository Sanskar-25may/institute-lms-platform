import { initializeApp, getApps, cert } from "firebase-admin/app";

if (!getApps().length) {
  try {
    initializeApp({
      credential: cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // Replace literal \n with actual newlines if necessary
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
    });
  } catch (error) {
    console.error("Firebase admin initialization error", error);
  }
}

// We don't need to export admin anymore, we just import getAuth() where needed.
export {};
