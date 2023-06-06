import { Navigate, useLocation } from 'react-router';

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  redirectPath: string;
  setRedirectPath: (path: string) => void;
  outlet: JSX.Element;
};

export default function ProtectedRoute({isAuthenticated, authenticationPath, redirectPath, setRedirectPath, outlet}: ProtectedRouteProps) {
  if(isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: isAuthenticated ? redirectPath : authenticationPath }} />;
  }
};