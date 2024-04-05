import { useContext } from "react";
import { AppContext } from "./AppProvider";

export const useAppState = () => {
  const state = useContext(AppContext);
  return state;
};
