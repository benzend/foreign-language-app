import { useDispatch } from "react-redux";
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
    <div>
      <h2>Are you sure you want to sign out</h2>
      <button onClick={yesHandler}>Yes</button>
      <button onClick={noHandler}>No</button>
    </div>
  );
};
