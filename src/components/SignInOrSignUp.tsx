import { useDispatch } from "react-redux";

interface Props {
  history: any;
}

export const SignInOrSignUp = ({ history }: Props) => {
  const dispatch = useDispatch();

  const yesHandler: () => void = () => {
    history.push("/signin");
  };
  return (
    <div>
      <h1>Do you have an account? </h1>
      <button onClick={yesHandler}>Yes</button>
      <button>No</button>
    </div>
  );
};
