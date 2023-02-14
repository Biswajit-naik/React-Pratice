
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQdS5QQUYYUZghlz4k3KofM14RF5IxFcE",
  authDomain: "automation-application.firebaseapp.com",
  projectId: "automation-application",
  storageBucket: "automation-application.appspot.com",
  messagingSenderId: "151825413568",
  appId: "1:151825413568:web:6bd90a3b20d61aaa728425",
  measurementId: "G-T3V4ZFV9W1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);

