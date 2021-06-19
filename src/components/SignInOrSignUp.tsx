import { PageHeader } from "../layouts/PageHeader";

interface Props {
  history: any;
}

export const SignInOrSignUp = ({ history }: Props) => {
  const yesHandler = () => {
    history.push("/signin");
  };
  return (
    <div className="flex-center full-page-height fd-column">
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
