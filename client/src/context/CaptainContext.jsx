import { createContext,useState } from "react";

export const captainDataContex = createContext();

export const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const updateCaptain = (captain) => {
    setCaptain(captain);
  };

  const value = {
    captain,
    setCaptain,
    isLoading,
    setIsLoading,
    error,
    setError,
    updateCaptain,
  };
  return (
    <captainDataContex.Provider value={value}>
      {children}
    </captainDataContex.Provider>
  );
};


