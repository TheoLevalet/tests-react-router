import { useNavigate } from "react-router";
import { useSessionContext } from "../contexts/SessionContext";


export default function Charte() {
  const { toggleCharte, redirectPath } = useSessionContext();
  const navigate = useNavigate();

  const handleSigning = () => {
    toggleCharte();
    navigate(redirectPath);
  };

  return <button onClick={handleSigning}>Sign Charte</button>;
}
