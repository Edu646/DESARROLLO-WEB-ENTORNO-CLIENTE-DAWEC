import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyCqcBkJDOtSMhmn2bigZEgmKr6qhloVDhc",
    authDomain: "ejercicio2fire-802e5.firebaseapp.com",
    projectId: "ejercicio2fire-802e5",
    storageBucket: "ejercicio2fire-802e5.firebasestorage.app",
    messagingSenderId: "577376775166",
    appId: "1:577376775166:web:64f8a1bb85093ef07b6eaf",
    measurementId: "G-FYVJ7H346G"
})

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const Recordatorios= collection(db, 'Recordatorios')