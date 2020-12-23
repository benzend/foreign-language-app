import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { ReduxState } from "../interfaces/interfaces";
import { login, notLoggingIn } from "../redux/actions";

export const SignIn = () => {
  const dispatch = useDispatch();
  const loggingIn = useSelector((state: ReduxState) => state.loggingIn);

  const onClickHandler: () => void = () => {
    dispatch(login());
    dispatch(notLoggingIn());
  };

  return (
    <div>
      {loggingIn ? (
        <button onClick={onClickHandler}>Log In</button>
      ) : (
        <Redirect to="/home" />
      )}
    </div>
  );
};
