import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { PageFlexCenteredLayout } from "../layouts/PageFlexCenteredLayout";
import { PageTitleLayout } from "../layouts/PageTitleLayout";
import { changeLanguage } from "../redux/languageActions";
import { ButtonGroupLayout } from "../layouts/ButtonGroupLayout";
import { Button } from "./Button";

export const LanugageOptions = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const germanHandler = () => {
    dispatch(changeLanguage("TO_GERMAN"));
    history.push("/");
  };
  const spanishHandler = () => {
    dispatch(changeLanguage("TO_SPANISH"));
    history.push("/");
  };
  return (
    <PageFlexCenteredLayout>
      <PageTitleLayout>Please Select Target Language</PageTitleLayout>
      <ButtonGroupLayout>
        <Button onClick={germanHandler}>German</Button>
        <Button onClick={spanishHandler}>Spanish</Button>
      </ButtonGroupLayout>
    </PageFlexCenteredLayout>
  );
};
