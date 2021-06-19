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
import Loading from "react-loading";

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { firebaseFunctions } = useContext(FirebaseContext);
  const dispatch = useDispatch();

  if (!firebaseFunctions) return <Loading />;

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await firebaseFunctions.httpsCallable("getUser")({
      username,
      password,
    });
    dispatch(addUser(res.data));
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
