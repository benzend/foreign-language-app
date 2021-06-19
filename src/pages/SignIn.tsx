import { useDispatch } from "react-redux";
import { login } from "../redux/loginActions";

import { PageFlexCenteredLayout } from "../layouts/PageFlexCenteredLayout";
import { PageTitleLayout } from "../layouts/PageTitleLayout";

import { Button } from "../components/Button";

export const SignIn = () => {
  const dispatch = useDispatch();

  const onClickHandler: () => void = () => {
    dispatch(login());
  };

  return (
    <PageFlexCenteredLayout>
      <PageTitleLayout>Please Log In To Your Account</PageTitleLayout>
      <Button onClick={onClickHandler}>Log In</Button>
    </PageFlexCenteredLayout>
  );
};
