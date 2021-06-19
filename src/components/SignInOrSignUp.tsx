import { useState } from "react";
import { PageHeader } from "../layouts/PageHeader";
import { SignIn } from "../pages/SignIn";

interface Props {}

export const SignInOrSignUp = ({}: Props) => {
  const [hasAccount, setHasAccount] = useState(false);
  const [optionChosen, setOptionChosen] = useState(false);
  const yesHandler = () => {
    setHasAccount(true);
    setOptionChosen(true);
  };
  const noHandler = () => {
    setHasAccount(false);
    setOptionChosen(true);
  };
  if (!optionChosen)
    return (
      <div className="flex-center full-page-height fd-column">
        <PageHeader>
          <h2>Do you have an account? </h2>
        </PageHeader>
        <div className="flex-center">
          <button className="button" onClick={yesHandler}>
            Yes
          </button>
          <button className="button" onClick={noHandler}>
            No
          </button>
        </div>
      </div>
    );
  else if (hasAccount) return <SignIn />;
  else return null;
};
