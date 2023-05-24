import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNJCKG62Q8MqS7J_03FQGF0ULSScuMcUQ",
  authDomain: "ema-jhon-515419.firebaseapp.com",
  projectId: "ema-jhon-515419",
  storageBucket: "ema-jhon-515419.appspot.com",
  messagingSenderId: "23696272317",
  appId: "1:23696272317:web:1f0b812511267c6fdb00d4",
  measurementId: "G-23FSBYJLCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;