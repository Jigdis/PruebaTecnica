import * as fromDireccionReducer from '../reducers/app.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Direccion } from '../../direcciones/interfaces/direccion.interface';
import { AppState } from '../app.state';
import { DireccionState } from '../reducers/app.reducer';

export const selectDireccionesFeature = (state: AppState) => state.direcciones;

export const getDirecciones = createSelector(
    selectDireccionesFeature,
    (state: DireccionState) => state.response
  );

