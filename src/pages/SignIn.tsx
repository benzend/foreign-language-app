import { useDispatch } from "react-redux";
import { login } from "../redux/loginActions";

import { PageFlexCenteredLayout } from "../layouts/PageFlexCenteredLayout";
import { PageTitleLayout } from "../layouts/PageTitleLayout";

import { Button } from "../components/Button";
import React, { FormEvent, useContext, useState } from "react";
import axios from "axios";
import { FirebaseContext, Firestore } from "../database/firebaseContext";
import { addUser } from "../redux/userActions";
import { IUser } from "../interfaces/IUser";

async function getUser(username: string, password: string, db: Firestore) {
  try {
    return await db
      .collection("users")
      .where("username", "==", username)
      .get()
      .then(
        (snap) =>
          snap.docs.map((doc) => ({ id: doc.id, ...doc.data() } as IUser))[0]
      );
  } catch (err) {
    console.error(err);
    return null;
  }
}

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { db } = useContext(FirebaseContext);
  const dispatch = useDispatch();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!db) return;
    const user: IUser | null = await getUser(username, password, db);
    dispatch(addUser(user));
  };

  return (
    <PageFlexCenteredLayout>
      <PageTitleLayout>Please Log In To Your Account</PageTitleLayout>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Log In</Button>
      </form>
    </PageFlexCenteredLayout>
  );
};
