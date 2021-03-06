import firebase from "firebase/app";
import "firebase/functions";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

export const initializeFirebase = () => {
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
  if (window.location.hostname === "localhost") {
    firebase.firestore().useEmulator("localhost", 8000);
    firebase.functions().useEmulator("localhost", 5001);
  }
};
