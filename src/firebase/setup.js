import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAIkPNVf0AbZOhSLGc4RLnUQy1RpV8_VfQ",
  authDomain: "whatsapp-clone-e31bb.firebaseapp.com",
  projectId: "whatsapp-clone-e31bb",
  storageBucket: "whatsapp-clone-e31bb.appspot.com",
  messagingSenderId: "920175657952",
  appId: "1:920175657952:web:c12d8205cc3da95bfba185"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app)