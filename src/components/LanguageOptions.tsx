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
    <>
      <button onClick={germanHandler}>German</button>
      <button onClick={spanishHandler}>Spanish</button>
    </>
  );
};
