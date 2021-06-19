import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions";
import { selectIsLoggedIn } from "../redux/selectors";

import { PageFlexCenteredLayout } from "../layouts/PageFlexCenteredLayout";
import { PageTitleLayout } from "../layouts/PageTitleLayout";

interface ISignUpProps {}

export const SignUp = ({}: ISignUpProps) => {
  const dispatch = useDispatch();
  const signUpHandler = () => {
    dispatch(login());
  };
  return (
    <PageFlexCenteredLayout>
      <PageTitleLayout>Create An Accout</PageTitleLayout>
      <button onClick={signUpHandler}>Sign Up</button>
    </PageFlexCenteredLayout>
  );
};
