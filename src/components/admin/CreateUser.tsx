import React from "react";
import { Firestore, Functions } from "../../database/firebaseContext";

interface ICreateUserProps {
  db: Firestore;
  firebaseFunctions: Functions;
}

export const CreateUser: React.FC<ICreateUserProps> = ({
  db,
  firebaseFunctions,
}) => {
  return <div></div>;
};
