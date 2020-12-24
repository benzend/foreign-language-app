import { useDispatch } from "react-redux";
import { login } from "../redux/actions";

interface Props {
  history: any;
}

export const SignIn = ({ history }: Props) => {
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
