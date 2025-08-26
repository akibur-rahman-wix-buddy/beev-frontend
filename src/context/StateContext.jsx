import { createContext, useEffect, useState } from "react";

const StateContext = createContext(null);

const StateContextProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSmall, setIsSmall] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmall(window.innerWidth < 1024);
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
        email,
        setEmail,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export { StateContextProvider, StateContext };
