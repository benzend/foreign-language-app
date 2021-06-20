import { PageFlexCenteredLayout } from "../layouts/PageFlexCenteredLayout";
import { PageTitleLayout } from "../layouts/PageTitleLayout";
import { ButtonGroupLayout } from "../layouts/ButtonGroupLayout";
import { Button } from "./Button";
import { useAppSelector } from "../redux/hooks";
import { selectUser } from "../redux/userSlice";
import { useContext } from "react";
import { FirebaseContext } from "../database/firebaseContext";
import Loading from "react-loading";
import { Link } from "react-router-dom";

export const LanguageOptions = () => {
  const user = useAppSelector(selectUser);
  const { functions } = useContext(FirebaseContext);

  if (!functions) return <Loading />;

  const germanHandler = async () => {
    await functions.httpsCallable("updateTargetLanguage")({
      id: user.value?.id,
      language: "german",
    });
  };
  const spanishHandler = async () => {
    await functions.httpsCallable("updateTargetLanguage")({
      id: user.value?.id,
      language: "spanish",
    });
  };
  return (
    <PageFlexCenteredLayout>
      {!user.value?.currentTargetLanguage ? null : (
        <Link to="/settings">
          <Button>Go Back</Button>
        </Link>
      )}
      <PageTitleLayout>Please Select Target Language</PageTitleLayout>
      <ButtonGroupLayout>
        <Button onClick={germanHandler}>German</Button>
        <Button onClick={spanishHandler}>Spanish</Button>
      </ButtonGroupLayout>
    </PageFlexCenteredLayout>
  );
};
