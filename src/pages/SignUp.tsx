import { useDispatch } from "react-redux";
import { login } from "../redux/loginActions";

import { PageFlexCenteredLayout } from "../layouts/PageFlexCenteredLayout";
import { PageTitleLayout } from "../layouts/PageTitleLayout";
import { useAppDispatch } from "../redux/hooks";
import React, { useContext, useState } from "react";
import { FirebaseContext } from "../database/firebaseContext";
import Loading from "react-loading";
import { Button } from "../components/Button";
import { addUser } from "../redux/userSlice";

interface ISignUpProps {}

export const SignUp = ({}: ISignUpProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAlreadyUsernameError, setIsAlreadyUsernameError] = useState(false);

  const { functions } = useContext(FirebaseContext);
  const dispatch = useAppDispatch();

  if (!functions) return <Loading />;
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await functions.httpsCallable("addUser")({
      username,
      password,
    });

    if (!res.data) {
      setIsAlreadyUsernameError(true);
      return;
    }

    const user = await functions.httpsCallable("getUser")({
      username,
      password,
    });
    dispatch(addUser);
  };

  if (isAlreadyUsernameError)
    alert("Username is already taken, please try again");
  return (
    <PageFlexCenteredLayout>
      <PageTitleLayout>Create An Account</PageTitleLayout>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <Button type="submit">Sign Up</Button>
      </form>
    </PageFlexCenteredLayout>
  );
};
