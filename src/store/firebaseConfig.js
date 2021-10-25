// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBsWTpeT7o-SixsmrNKSgKhp3C9FPVLdRE",
  authDomain: "mario-redux-e7935.firebaseapp.com",
  projectId: "mario-redux-e7935",
  storageBucket: "mario-redux-e7935.appspot.com",
  messagingSenderId: "553906939373",
  appId: "1:553906939373:web:a41ebde7ce48534a0ff3e4",
  measurementId: "G-TCJZTNYZF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app; 