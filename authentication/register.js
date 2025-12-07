import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";

export async function registerUser(email, password, fullName, role = "user") {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save extra info to Firestore
    await setDoc(doc(db, "users", user.uid), {
      fullName: fullName,
      email: email,
      role: role,
      createdAt: serverTimestamp()
    });

    return user;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
}

