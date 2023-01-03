import { ActionReducerMap } from "@ngrx/store";
import { direccionesReducer, DireccionState } from "./reducers/app.reducer";

export interface AppState {
    direcciones: DireccionState,
  }
  
  export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    direcciones: direccionesReducer,
  }