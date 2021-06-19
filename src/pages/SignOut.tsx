import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { PageFlexCenteredLayout } from "../layouts/PageFlexCenteredLayout";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageTitleLayout } from "../layouts/PageTitleLayout";
import { logout } from "../redux/loginActions";

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
      <div>
        <button className="button" onClick={yesHandler}>
          Yes
        </button>
        <button className="button" onClick={noHandler}>
          No
        </button>
      </div>
    </PageFlexCenteredLayout>
  );
};
