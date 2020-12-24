import { useDispatch } from "react-redux";
import { PageHeader } from "../layouts/PageHeader";
import { logout } from "../redux/actions";

interface Props {
  history: any;
}

export const Signout = ({ history }: Props) => {
  const dispatch = useDispatch();

  const yesHandler = () => {
    dispatch(logout());
    history.push("/");
  };
  const noHandler = () => {
    history.push("/settings");
  };
  return (
    <div className="full-page-height flex-center fd-column">
      <PageHeader>
        <h2>Are you sure you want to sign out</h2>
      </PageHeader>
      <div className="flex-center">
        <div className="button" onClick={yesHandler}>
          Yes
        </div>
        <div className="button" onClick={noHandler}>
          No
        </div>
      </div>
    </div>
  );
};
