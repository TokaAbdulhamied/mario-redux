import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfmbFKA0RtHV14xuBCrb1DyUXs2eM08t0",
  authDomain: "mario-redux-c1c5f.firebaseapp.com",
  projectId: "mario-redux-c1c5f",
  storageBucket: "mario-redux-c1c5f.appspot.com",
  messagingSenderId: "260466907423",
  appId: "1:260466907423:web:ff1b6dc68f71b2ccadb82a",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

app.firestore().settings({ timestampsInSnapshots: true });
export default app;

// collections {projects , users, notifications}
