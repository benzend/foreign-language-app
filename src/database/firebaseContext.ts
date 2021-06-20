import firebase from "firebase";

import { createContext } from "react";

export interface Firestore extends firebase.firestore.Firestore {}
export interface Functions extends firebase.functions.Functions {}

interface IFirebaseContext {
  db: Firestore | null;
  functions: Functions | null;
}

export const FirebaseContext = createContext<IFirebaseContext>({
  db: null,
  functions: null,
});
