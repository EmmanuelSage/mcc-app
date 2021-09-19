import { createContext, useState,  } from "react";
import { App } from "../types/App";
import { ReviewRequest } from "../types/ReviewRequest";

export interface IDb {
  currentApp: string;
  apps: App | {};
  reviewRequestsIdCount: number;
  reviewRequests: ReviewRequest | {};
}

export const useValue = () => {
  const [db, setDb] = useState<IDb>({
    currentApp: '',
    apps: {},
    reviewRequestsIdCount: 0,
    reviewRequests: {}
  })
  return {
    db,
    setDb
  }
}

export const DbContext = createContext({} as ReturnType<typeof useValue>)