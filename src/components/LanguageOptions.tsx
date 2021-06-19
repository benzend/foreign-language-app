import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { changeLanguage } from "../redux/actions";

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
    <div className="flex-center full-page-height">
      <button className="button" onClick={germanHandler}>
        German
      </button>
      <button className="button" onClick={spanishHandler}>
        Spanish
      </button>
    </div>
  );
};
