import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { PageFlexCenteredLayout } from "../layouts/PageFlexCenteredLayout";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageTitleLayout } from "../layouts/PageTitleLayout";
import { logout } from "../redux/loginActions";

import { ButtonGroupLayout } from "../layouts/ButtonGroupLayout";
import { Button } from "../components/Button";

export const SignOut = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const yesHandler = () => {
    dispatch(logout());
    history.push("/");
  };
  const noHandler = () => {
    history.push("/settings");
  };
  return (
    <PageFlexCenteredLayout>
      <PageTitleLayout>Are you sure you want to sign out</PageTitleLayout>
      <ButtonGroupLayout>
        <Button onClick={yesHandler}>Yes</Button>
        <Button onClick={noHandler}>No</Button>
      </ButtonGroupLayout>
    </PageFlexCenteredLayout>
  );
};
