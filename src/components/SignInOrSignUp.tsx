import { useDispatch } from "react-redux";
import { PageHeader } from "../layouts/PageHeader";

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
      <PageHeader>
        <h2>Do you have an account? </h2>
      </PageHeader>
      <div className="flex-center">
        <div className="button" onClick={yesHandler}>
          Yes
        </div>
        <div className="button">No</div>
      </div>
    </div>
  );
};
