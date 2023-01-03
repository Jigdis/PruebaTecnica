import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromDireccionesActions from '../actions/direccion.action';


import { of } from 'rxjs';
import { map, catchError, concatMap } from 'rxjs/operators';
import { DireccionService } from 'src/app/direcciones/services/direccion.service';
import { Direccion } from '../../direcciones/interfaces/direccion.interface';
import { UpdateDireccion } from '../actions/direccion.action';

@Injectable()
export class DireccionEffects {

  constructor(
    private action$: Actions,
    private DireccionService: DireccionService
  ) {

  }

  // Load Direccion
  loadDirecciones$ = createEffect(() => {
    return this.action$.pipe(

      ofType(fromDireccionesActions.LoadDireccion),
      concatMap(() => this.DireccionService.getDirecciones()
        .pipe(
          map(response => fromDireccionesActions.LoadDireccionSucess({ response })),
          catchError(error => of(fromDireccionesActions.LoadDireccionFail({ error }))))
      )
    );
  });

  // Update Direccion
  updateDireccion$ = createEffect(() => {
    return this.action$.pipe(
      ofType(fromDireccionesActions.UpdateDireccion),
      concatMap((direccion) => this.DireccionService.putDireccion(direccion)
        .pipe(
          map(response => fromDireccionesActions.UpdateDireccionSuccess({ response })),
          catchError(error => of(fromDireccionesActions.UpdateDireccionFail({ error }))))
      )
    );
  });

  // // Add Direccion
  addDireccion$ = createEffect(() => {
    return this.action$.pipe(
      ofType(fromDireccionesActions.AddDireccion),
      concatMap((direccion) => this.DireccionService.postDireccion(direccion)
        .pipe(
          map(response => fromDireccionesActions.AddDireccionSuccess({ response })),
          catchError(error => of(fromDireccionesActions.AddDireccionFail({ error }))))
      )
    );
  });

  // Delete Direccion
  deleteDireccion$ = createEffect(() => {
    return this.action$.pipe(
      ofType(fromDireccionesActions.DeleteDireccion),
      concatMap((direccion) => this.DireccionService.deleteDireccion(direccion)
        .pipe(
          map(response => fromDireccionesActions.DeleteDireccionSuccess({ response })),
          catchError(error => of(fromDireccionesActions.DeleteDireccionFail({ error }))))
      )
    );
  });
}
