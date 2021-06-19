import { useState } from "react";
import { PageFlexCenteredLayout } from "../layouts/PageFlexCenteredLayout";
import { PageTitleLayout } from "../layouts/PageTitleLayout";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

import { Button } from "../components/Button";
import { ButtonGroupLayout } from "../layouts/ButtonGroupLayout";

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
        <ButtonGroupLayout>
          <Button onClick={yesHandler}>Yes</Button>
          <Button onClick={noHandler}>No</Button>
        </ButtonGroupLayout>
      </PageFlexCenteredLayout>
    );
  else if (hasAccount) return <SignIn />;
  else return <SignUp />;
};
