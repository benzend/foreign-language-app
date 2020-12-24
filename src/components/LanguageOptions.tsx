import { useDispatch } from "react-redux";
import { changeLanguage } from "../redux/actions";

interface Props {
  history: any;
}

export const LanugageOptions = ({ history }: Props) => {
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
    <div className="flex-center">
      <div className="button" onClick={germanHandler}>
        German
      </div>
      <div className="button" onClick={spanishHandler}>
        Spanish
      </div>
    </div>
  );
};
