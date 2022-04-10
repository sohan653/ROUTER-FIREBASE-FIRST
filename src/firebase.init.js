
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAPSHDaULAop9kZuq4gpaMAuYgYfqIxggA",
    authDomain: "concept-session.firebaseapp.com",
    projectId: "concept-session",
    storageBucket: "concept-session.appspot.com",
    messagingSenderId: "230351571562",
    appId: "1:230351571562:web:1905cbb5c55975e3299813"
  };

  const app= initializeApp(firebaseConfig)

  export default app;