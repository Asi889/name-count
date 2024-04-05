"use client";

import { AllNames } from "@/types/types";
import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useReducer,
} from "react";
import { data, names } from "./data";
type AppStore = {
  currentName: string;
  allData: AllNames;
  names: string[];
};
type InitialState = {
  currentName: string;
};
export const AppContext = createContext<AppStore>({
  currentName: "",
  allData: {} as AllNames,
  names: [],
});

export const AppProvider: FC<PropsWithChildren<InitialState>> = async ({
  children,
  ...props
}) => {
  return (
    <AppContext.Provider
      value={{
        currentName: props.currentName,
        allData: data,
        names: names,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
