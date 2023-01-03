import { createReducer, on } from '@ngrx/store';
import { Response } from 'src/app/direcciones/interfaces/response.interface';
import * as fromDireccionActions from '../actions/direccion.action';


export interface DireccionState {
  response: Response;
    loaded: boolean;
    loading: boolean;
    error: string;
}

export const initialState: DireccionState = {
  response: {
      errors: "",
      message: '',
      pageNumber: 0,
      pageSize: 0,
      succeded: false,
      data : []
    },
    loaded: false,
    loading: false,
    error: ''
};

export const direccionesReducer = createReducer(
  initialState,

  on(fromDireccionActions.LoadDireccion, (state) => {
    return {...state, loading: true}
  }),
  on(fromDireccionActions.LoadDireccionSucess, (state, {response}) => {
    return {...state, loading: false, loaded: true, response}
  }),
  on(fromDireccionActions.LoadDireccionFail, (state, {error}) => {
    return {...state, loading: false, loaded: false, error}
  }),
);

