// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernblog-b6ea5.firebaseapp.com",
  projectId: "mernblog-b6ea5",
  storageBucket: "mernblog-b6ea5.appspot.com",
  messagingSenderId: "17002016235",
  appId: "1:17002016235:web:88eecd5554acb9cdd27dae",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
