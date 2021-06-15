import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { changeLanguage } from "../redux/actions";

export const LanugageOptions = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const germanHandler = () => {
    dispatch(changeLanguage("TO_GERMAN"));
    history.push("/home");
  };
  const spanishHandler = () => {
    dispatch(changeLanguage("TO_SPANISH"));
    history.push("/home");
  };
  return (
    <div className="flex-center full-page-height">
      <div className="button" onClick={germanHandler}>
        German
      </div>
      <div className="button" onClick={spanishHandler}>
        Spanish
      </div>
    </div>
  );
};
