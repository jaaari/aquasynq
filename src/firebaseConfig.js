import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyASe52-gwo0lABR6GJ48ipsT1YiFC3Sefw",
  authDomain: "aquatalka.firebaseapp.com",
  projectId: "aquatalka",
  storageBucket: "aquatalka.appspot.com",
  messagingSenderId: "266195355265",
  appId: "1:266195355265:web:d2439c852f3b386e706f80",
  measurementId: "G-KF148WSTNK",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const emailProvider = new EmailAuthProvider();

export { auth, db, googleProvider, emailProvider, analytics };
