import { IDb } from "../context/DbContext";
import { AppInfo } from "./App";
import { MccEvent } from "./MccEvent";

export interface ReviewRequestInfo {
  type: MccEvent;
  name: string;
  id: number;
  payload: AppInfo;
  previousState?: IDb;
}

export interface ReviewRequest {
  [key: string] : ReviewRequestInfo
}
