import { useDispatch } from "react-redux";
import { login } from "../redux/loginActions";

import { PageFlexCenteredLayout } from "../layouts/PageFlexCenteredLayout";
import { PageTitleLayout } from "../layouts/PageTitleLayout";

export const SignIn = () => {
  const dispatch = useDispatch();

  const onClickHandler: () => void = () => {
    dispatch(login());
  };

  return (
    <PageFlexCenteredLayout>
      <PageTitleLayout>Please Log In To Your Account</PageTitleLayout>
      <button onClick={onClickHandler} className="button">
        Log In
      </button>
    </PageFlexCenteredLayout>
  );
};
