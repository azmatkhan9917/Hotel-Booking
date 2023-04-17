import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAoSJP8TRMxBvwhKZ71hC1wL0-Qx4z7pQg",
  authDomain: "ca3react.firebaseapp.com",
  projectId: "ca3react",
  storageBucket: "ca3react.appspot.com",
  messagingSenderId: "273610395670",
  appId: "1:273610395670:web:e50eb166ba405b6ff32537"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage();

export { auth, provider, db, storage };
