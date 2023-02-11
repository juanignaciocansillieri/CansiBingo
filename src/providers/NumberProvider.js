import { useContext, createContext, useState } from 'react';

const numberContext = createContext();
const numberToggleContext = createContext();

export const CurrentNumberProvider = ({ children }) => {
  const [currentNumber, setCurrentNumber] = useState();

  return (
    <numberContext.Provider value={currentNumber}>
      <numberToggleContext.Provider value={setCurrentNumber}>
        {children}
      </numberToggleContext.Provider>
    </numberContext.Provider>
  );
};

export const useCurrentNumberContext = () => {
  return useContext(numberContext);
};

export const useCurrentNumberToggleContext = () => {
  return useContext(numberToggleContext);
};
