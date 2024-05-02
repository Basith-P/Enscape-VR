import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2WOMb4Mj4BFwQKzf76sOtILip7oLCRU0",
  authDomain: "enscape-73b13.firebaseapp.com",
  projectId: "enscape-73b13",
  storageBucket: "enscape-73b13.appspot.com",
  messagingSenderId: "618285036496",
  appId: "1:618285036496:web:c3202d26885ce2f0c1bfd5",
  measurementId: "G-L5BPBW2SG7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
