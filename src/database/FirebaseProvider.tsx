import React, { useEffect, useState } from "react";
import firebase from "firebase/app";

import { FirebaseContext, Firestore, Functions } from "./firebaseContext";
import { initializeFirebase } from "./initializeFirebase";
import { Loading } from "../pages/Loading";

interface IFirebaseProviderProps {}

export const FirebaseProvider: React.FC<IFirebaseProviderProps> = ({
  children,
}) => {
  const [db, setDb] = useState<Firestore | null>(null);
  const [functions, setFunctions] = useState<Functions | null>(null);
  useEffect(() => {
    initializeFirebase();
    setDb(firebase.firestore());
    setFunctions(firebase.functions());
  }, []);

  if (!db || !functions) return <Loading />;
  return (
    <FirebaseContext.Provider value={{ db, functions }}>
      {children}
    </FirebaseContext.Provider>
  );
};
