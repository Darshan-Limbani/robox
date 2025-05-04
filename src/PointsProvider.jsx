import { createContext, useContext, useState, useEffect } from 'react';
import { getPoints, setPoints } from './utils/PointsUtils.js';

const PointsContext = createContext();

export const PointsProvider = ({ children }) => {
  const [points, setLocalPoints] = useState(getPoints());
  
  const updatePoints = (value) => {
    setPoints(value);
    setLocalPoints(value);
  };
  
  const add = (amount) => updatePoints(points + amount);
  const subtract = (amount) => updatePoints(Math.max(points - amount, 0));
  
  useEffect(() => {
    // Sync across tabs if needed
    const sync = () => setLocalPoints(getPoints());
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);
  
  return (
    <PointsContext.Provider value={{ points, add, subtract, updatePoints }}>
      {children}
    </PointsContext.Provider>
  );
};

export const usePoints = () => useContext(PointsContext);
