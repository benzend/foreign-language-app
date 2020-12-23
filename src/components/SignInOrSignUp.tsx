import { useDispatch } from "react-redux";
import { isLoggingIn } from "../redux/actions";

export const SignInOrSignUp = () => {
  const dispatch = useDispatch();

  const yesHandler: () => void = () => {
    dispatch(isLoggingIn());
  };
  return (
    <div>
      <h1>Do you have an account? </h1>
      <button onClick={yesHandler}>Yes</button>
      <button>No</button>
    </div>
  );
};
