import { IDb } from "../context/DbContext";
import { App } from "./App";
import { MccPage } from "./MccPage";

export interface ReviewRequest {
  type: MccPage;
  name: string;
  id: number;
  payload: App;
  previousState: IDb;
}
