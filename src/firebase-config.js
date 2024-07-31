import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDdPV2aZkugjbyIdbNFyRT1_LId4j4K7w8",
    authDomain: "matchmetrics-2025.firebaseapp.com",
    projectId: "matchmetrics-2025",
    storageBucket: "matchmetrics-2025.firebasestorage.app",
    messagingSenderId: "222533048522",
    appId: "1:222533048522:web:588be840eb8dbba1bdfc33",
    measurementId: "G-94VNRJQJD4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };