import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function login(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    // Use absolute path and replace to prevent password in URL history
    window.location.replace("/dashboard/dashboard.html");
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}
