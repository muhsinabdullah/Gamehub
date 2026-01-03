import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5SsdvfSKbx0pf6TN2H-Eo02iq2FDW6SU",
  authDomain: "gamehub-2c530.firebaseapp.com",
  projectId: "gamehub-2c530",
  storageBucket: "gamehub-2c530.firebasestorage.app",
  messagingSenderId: "84064538412",
  appId: "1:84064538412:web:e0f6880d653a67180ba689"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;