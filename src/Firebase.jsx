import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBoFJM-WCxr1xtrid_rcPGlRxYnuj47adw",
    authDomain: "quiz-auth-581f1.firebaseapp.com",
    projectId: "quiz-auth-581f1",
    storageBucket: "quiz-auth-581f1.appspot.com",
    messagingSenderId: "558780673298",
    appId: "1:558780673298:web:e26b9bcfb64b092fb197cb"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;