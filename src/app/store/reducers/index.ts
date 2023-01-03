import * as fromDireccionReducer from './app.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AppState {
    direcciones: fromDireccionReducer.DireccionState;
}

export const getState = (state: AppState) => state;

export const getStateDireccionesState = createFeatureSelector<fromDireccionReducer.DireccionState>('direcciones');
export const getDirecciones = createSelector(getStateDireccionesState, fromDireccionReducer.getDirecciones);

export const getDireccionById = (id:number) => createSelector(getDirecciones, (direcciones) => {
    if (direcciones) {
        const direccionFound = direcciones.find(persona => persona.id === id);
        return direccionFound || {};
    } else {
        return {};
    }
});
