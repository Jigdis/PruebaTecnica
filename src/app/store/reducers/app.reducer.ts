import { createReducer, on } from '@ngrx/store';
import { Direccion } from 'src/app/direcciones/interfaces/direccion.interface';
import * as fromDireccionActions from '../actions/direccion.action';


export interface DireccionState {
    data: Direccion[];
    loaded: boolean;
    loading: boolean;
    error: string;
}

export const initialState: DireccionState = {
    data: [],
    loaded: false,
    loading: false,
    error: ''
};

export const direccionesReducer = createReducer(
  initialState,

  on(fromDireccionActions.LoadDireccion, (state) => {
    return {...state, loading: true}
  }),
  on(fromDireccionActions.LoadDireccionSucess, (state, {direccion}) => {
    return {...state, loading: false, loaded: true, direccion}
  }),
  on(fromDireccionActions.LoadDireccionFail, (state, {error}) => {
    return {...state, loading: false, loaded: false, error}
  }),

);

// export function reducer(state = initialState, action: fromDireccionActions.DireccionActions) {
//     switch (action.type) {
//       case fromDireccionActions.LOAD_DIRECCIONES: {
//           return {
//               ...state,
//               loading: true,
//           };
//       }

//       case fromDireccionActions.LOAD_DIRECCIONES_SUCCESS: {
//         const data = action.payLoad;
//         return {
//           ...state,
//           loading: false,
//           loaded: true,
//           data
//         };
//       }

//       case fromDireccionActions.LOAD_DIRECCIONES_FAIL: {
//         return {
//           ...state,
//           loading: false,
//           loaded: false,
//           error: action.payLoad
//         };
//       }

//       case fromDireccionActions.UPDATE_DIRECCION_SUCCESS: {
//         const data = state.data.map( customer => {
//           if (customer.id === action.payLoad.id) {
//             return action.payLoad;
//           } else {
//             return customer;
//           }
//         });

//         return {
//           ...state,
//           data,
//           loaded: true,
//           loading: false
//         };
//       }

//       case fromDireccionActions.LOAD_DIRECCIONES_FAIL: {
//         return {
//           ...state,
//           error: action.payLoad
//         };
//       }

//       case fromDireccionActions.ADD_DIRECCION_SUCCESS: {
//         return {
//           ...state,
//           data: [...state.data, action.payLoad]
//         };
//       }

//       case fromDireccionActions.ADD_DIRECCION_FAIL: {
//         return {
//           ...state,
//           error: action.payLoad
//         };
//       }

//       case fromDireccionActions.DELETE_DIRECCION_SUCCESS: {
//         const userId = action.payLoad;
//         return {
//           ...state,
//           data: [...state.data.filter(user => user.id !== userId)]
//         };
//       }

//       case fromDireccionActions.DELETE_DIRECCION_FAIL: {
//         return {
//           ...state,
//           error: action.payLoad
//         };
//       }

//       default: {
//           return state;
//       }
//     }
// }

export const getDirecciones = (state: DireccionState) => state.data;
export const getDireccionesLoaded = (state: DireccionState) => state.loaded;
export const getDireccionesLoading = (state: DireccionState) => state.loading;
export const getDireccionesError = (state: DireccionState) => state.error;
