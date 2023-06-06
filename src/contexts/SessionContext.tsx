import { ReactNode, createContext, useContext, useState } from "react";
import { Session, initialSession } from "./SessionContext.model";

export const SessionContext = createContext<
  [Session, React.Dispatch<React.SetStateAction<Session>>]
>([initialSession, () => {}]);

export const useSessionContext = () => {
  const [session, setSession] = useContext(SessionContext);

  function toggleAuthentication() {
    setSession((session) => ({
      ...session,
      isAuthenticated: !session.isAuthenticated,
    }));
  }

  function toggleCharte() {
    setSession((session) => ({
      ...session,
      hasSignedCharte: !session.hasSignedCharte,
    }));
  }

  function setRedirectPath(path: string) {
    setSession((session) => ({
      ...session,
      redirectPath: path,
    }));
  }

  return {
    toggleAuthentication,
    toggleCharte,
    setRedirectPath,
    authenticationFlag: session.isAuthenticated,
    charteFlag: session.hasSignedCharte,
    redirectPath: session.redirectPath,
  };
};

export const SessionContextProvider: React.FC<{
  children: ReactNode;
}> = (props: { children: ReactNode }) => {
  const [sessionState, setSessionState] = useState(initialSession);

  return (
    <SessionContext.Provider value={[sessionState, setSessionState]}>
      {props.children}
    </SessionContext.Provider>
  );
};
