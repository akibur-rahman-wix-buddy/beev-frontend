import { createContext, useEffect, useState } from "react";

const StateContext = createContext(null);

const StateContextProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmall(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <StateContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        isSmall,
        setIsSmall,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export { StateContextProvider, StateContext };
