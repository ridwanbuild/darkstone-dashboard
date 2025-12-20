// 🔹 UPDATED: getApps & getApp import added (Next.js issue fix)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// 🔹 SAME: Firebase configuration (no change here)
const firebaseConfig = {
  apiKey: "AIzaSyA5IwqiPj1oT7yPjajXU5Q9gEC3--5FseA",
  authDomain: "darkstone-dashboard.firebaseapp.com",
  projectId: "darkstone-dashboard",
  storageBucket: "darkstone-dashboard.firebasestorage.app",
  messagingSenderId: "245951636512",
  appId: "1:245951636512:web:832fdd5f74cee6ed6c0845",
};




const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);