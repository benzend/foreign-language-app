import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../redux/actions";

export const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClickHandler: () => void = () => {
    dispatch(login());
    history.push("/home");
  };

  return (
    <div>
      <div className="flex-center full-page-height">
        <div className="button" onClick={onClickHandler}>
          Log In
        </div>
      </div>
    </div>
  );
};
