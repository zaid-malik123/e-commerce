import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "e-commerce-b3e87.firebaseapp.com",
  projectId: "e-commerce-b3e87",
  storageBucket: "e-commerce-b3e87.firebasestorage.app",
  messagingSenderId: "1096559892499",
  appId: "1:1096559892499:web:19fc64e02bee1bf1de47e6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
