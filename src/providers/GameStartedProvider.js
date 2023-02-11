import { useContext, createContext, useState } from 'react';

const gameStartedContext = createContext();
const gameStartedToggleContext = createContext();

export const GameStartedProvider = ({ children }) => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <gameStartedContext.Provider value={isGameStarted}>
      <gameStartedToggleContext.Provider value={setIsGameStarted}>
        {children}
      </gameStartedToggleContext.Provider>
    </gameStartedContext.Provider>
  );
};

export const useGameStartedContext = () => {
  return useContext(gameStartedContext);
};

export const useGameStartedToggleContext = () => {
  return useContext(gameStartedToggleContext);
};
