import { useDispatch } from "react-redux";
import { login } from "../redux/actions";

export const SignIn = () => {
  const dispatch = useDispatch();

  const onClickHandler: () => void = () => {
    dispatch(login());
  };

  return (
    <div>
      <div className="flex-center full-page-height">
        <button onClick={onClickHandler} className="button">
          Log In
        </button>
      </div>
    </div>
  );
};
