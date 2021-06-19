import { useState } from "react";
import { PageFlexCenteredLayout } from "../layouts/PageFlexCenteredLayout";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageTitleLayout } from "../layouts/PageTitleLayout";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

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
      <PageFlexCenteredLayout>
        <PageTitleLayout>Do you have an account?</PageTitleLayout>
        <div className="flex-center">
          <button className="button" onClick={yesHandler}>
            Yes
          </button>
          <button className="button" onClick={noHandler}>
            No
          </button>
        </div>
      </PageFlexCenteredLayout>
    );
  else if (hasAccount) return <SignIn />;
  else return <SignUp />;
};
