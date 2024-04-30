"use client";
import { DictionaryType } from "@/models/translate";
import { createContext, useContext, useState, type Dispatch, type SetStateAction } from "react";

type GlobalContextType = {
  dictionary: DictionaryType | any;
  setDictionary: Dispatch<SetStateAction<DictionaryType>>;
};

const initialValue: GlobalContextType = {
  setDictionary: () => {},
  dictionary: {}
};

const GlobalContext = createContext<GlobalContextType>(initialValue);
export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [dictionary, setDictionary] = useState<DictionaryType | any>();

  return (
    <GlobalContext.Provider
      value={{
        dictionary,
        setDictionary
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
