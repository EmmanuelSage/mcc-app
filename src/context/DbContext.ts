import { createContext, useState,  } from "react";

export interface IDb {
  title?: string,
}

export const useValue = () => {
  const [db, setDb] = useState<IDb>({title: "Context"})
  return {
    db,
    setDb
  }
}

export const DbContext = createContext({} as ReturnType<typeof useValue>)