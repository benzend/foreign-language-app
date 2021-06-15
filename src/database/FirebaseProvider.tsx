import React, { useEffect, useState } from "react";
import firebase from "firebase/app";

import { FirebaseContext, Firestore, Functions } from "./firebaseContext";
import { initializeFirebase } from "./initializeFirebase";
import { Loading } from "../pages/Loading";

interface Props {}

export const FirebaseProvider: React.FC<Props> = ({ children }) => {
  const [db, setDb] = useState<Firestore | null>(null);
  const [firebaseFunctions, setFirebaseFunctions] =
    useState<Functions | null>(null);
  useEffect(() => {
    initializeFirebase();
    setDb(firebase.firestore());
    setFirebaseFunctions(firebase.functions());
  }, []);

  if (!db || !firebaseFunctions) return <Loading />;
  return (
    <FirebaseContext.Provider value={{ db, firebaseFunctions }}>
      {children}
    </FirebaseContext.Provider>
  );
};
