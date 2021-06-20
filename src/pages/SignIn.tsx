import { PageFlexCenteredLayout } from "../layouts/PageFlexCenteredLayout";
import { PageTitleLayout } from "../layouts/PageTitleLayout";

import { Button } from "../components/Button";
import { FormEvent, useContext, useState } from "react";
import { FirebaseContext } from "../database/firebaseContext";
import Loading from "react-loading";
import { addUser } from "../redux/userSlice";
import { useAppDispatch } from "../redux/hooks";

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { functions } = useContext(FirebaseContext);
  const dispatch = useAppDispatch();

  if (!functions) return <Loading />;

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await functions.httpsCallable("signIn")({
      username,
      password,
    });

    if (!res.data) {
      alert("There is no user with that username, please try again");
      return;
    }

    dispatch(addUser(res.data));

    window.sessionStorage.setItem("userId", res.data.id);
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
