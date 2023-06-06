import { useNavigate } from "react-router";
import { useSessionContext } from "../contexts/SessionContext";

export default function Login() {
  const { toggleAuthentication, redirectPath } = useSessionContext();

  const navigate = useNavigate();

  const handleLogin = () => {
    toggleAuthentication();
    navigate(redirectPath);
  };

  return <button onClick={handleLogin}>Login</button>;
}
