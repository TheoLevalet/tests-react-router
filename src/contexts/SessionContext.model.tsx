export type Session = {
    isAuthenticated?: boolean;
    hasSignedCharte?: boolean;
    redirectPath: string;
  }
  
  export const initialSession: Session = {
    redirectPath: ''
  };