import { createContext, useContext, useEffect, useState } from 'react';

const appContext = createContext();

export default function AppContextProvider({ children }) {
  const [shock, setShock] = useState(false);
  useEffect(() => {
    setShock((prev) => !prev);
  }, []);

  const shockHandler = () => {
    setShock((prev) => !prev);
  };

  return (
    <appContext.Provider value={{
      shock,
      shockHandler,
    }}
    >
      {children}
    </appContext.Provider>
  )
}

export const useShockContent = () => useContext(appContext);
