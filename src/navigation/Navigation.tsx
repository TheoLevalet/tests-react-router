import { useSessionContext } from "../contexts/SessionContext";
import { Route, Routes } from "react-router";
import ProtectedRoute, { ProtectedRouteProps } from "./ProtectedRoute";
import Home from "../pages/Home.page";
import Charte from "../pages/Charte.page";
import Login from "../pages/Login.page";

export default function App() {
  const { charteFlag, authenticationFlag, redirectPath, setRedirectPath } =
    useSessionContext();

  if (!redirectPath) {
    setRedirectPath("/");
  }

  const AuthenticationProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> =
    {
      isAuthenticated: authenticationFlag || false,
      authenticationPath: "/login",
      redirectPath: redirectPath,
      setRedirectPath: setRedirectPath,
    };

  const CharteProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    isAuthenticated: (authenticationFlag && charteFlag) || false,
    authenticationPath: "/charte",
    redirectPath: redirectPath,
    setRedirectPath: setRedirectPath,
  };

  return (
    <div>
      <p>authentication - {String(authenticationFlag)}</p>
      <p>charte - {String(charteFlag)}</p>
      <p>redirect - {String(redirectPath)}</p>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute {...CharteProtectedRouteProps} outlet={<Home />} />
          }
        />
        <Route
          path="charte"
          element={
            <ProtectedRoute
              {...AuthenticationProtectedRouteProps}
              outlet={<Charte />}
            />
          }
        />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}
