import { useDispatch } from "react-redux";
import { login } from "../redux/loginActions";

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
