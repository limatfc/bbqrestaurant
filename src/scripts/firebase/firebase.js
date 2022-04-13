import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGf0X2VdopgTfFpvWrU5p7Cy62jx6WDFw",
  authDomain: "bbqrestaurant-7374e.firebaseapp.com",
  projectId: "bbqrestaurant-7374e",
  storageBucket: "bbqrestaurant-7374e.appspot.com",
  messagingSenderId: "316130839135",
  appId: "1:316130839135:web:26072f04032389d7afa9ea",
};

const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app);
