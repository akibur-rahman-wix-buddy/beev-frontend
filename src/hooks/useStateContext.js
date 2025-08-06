import { StateContext } from "@/context/StateContext";
import { useContext } from "react";

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (context === null) {
    throw new Error(
      "useStateContext must be used within a StateContext.Provider"
    );
  }
  return context;
};
