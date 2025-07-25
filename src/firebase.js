// firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCt7f9qhrnd3EkdWfcUvrhOifBytvnhfYg",
  authDomain: "hospital-management-syatem.firebaseapp.com",
  databaseURL: "https://hospital-management-syatem-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hospital-management-syatem",
  storageBucket: "hospital-management-syatem.firebasestorage.app",
  messagingSenderId: "443220511065",
  appId: "1:443220511065:web:97af66ddbeca2626802448"
};

export const app = initializeApp(firebaseConfig);
