import { IDb } from "../context/DbContext";
import { AppInfo } from "./App";
import { MccEventTypes } from "../MccEvent/MccEvent";

export interface ReviewRequestInfo {
  type: MccEventTypes;
  name: string;
  id: number;
  payload: AppInfo;
  previousState?: IDb;
}

export interface ReviewRequest {
  [key: string] : ReviewRequestInfo
}
