import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromDireccionesActions from '../actions/direccion.action';


import { of } from 'rxjs';
import { map, catchError, concatMap } from 'rxjs/operators';
import { DireccionService } from 'src/app/direcciones/services/direccion.service';
import { Direccion } from '../../direcciones/interfaces/direccion.interface';

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
          map(direccion => fromDireccionesActions.LoadDireccionSucess({ direccion })),
          catchError(error => of(fromDireccionesActions.LoadDireccionFail({ error }))))
      )
    );
  });

  // // Update Direccion
  // updateDireccion$: Observable<Action> = this.action$.pipe(
  //   ofType(fromDireccionesActions.UPDATE_CUSTOMER),
  //   map((action: fromDireccionesActions.UpdateDireccion) => action.payLoad),
  //   switchMap((payLoad) => this.DireccionService.updateDireccion(payLoad)
  //     .pipe(
  //       map(response => new fromDireccionesActions.UpdateDireccionSuccess(response)),
  //       catchError(error => of(new fromDireccionesActions.UpdateDireccionFail(error)))
  //     )
  //   )
  // );

  // // Add Direccion
  // addDireccion$: Observable<Action> = this.action$.pipe(
  //   ofType(fromDireccionesActions.ADD_CUSTOMER),
  //   map((action: fromDireccionesActions.AddDireccion) => action.payLoad),
  //   switchMap((payLoad) => this.DireccionService.addDireccion(payLoad)
  //     .pipe(
  //       map(response => new fromDireccionesActions.AddDireccionSuccess(response)),
  //       catchError(error => of(new fromDireccionesActions.AddDireccionFail(error)))
  //     )
  //   )
  // );

  // // Delete Direccion
  // deleteDireccion$: Observable<Action> = this.action$.pipe(
  //   ofType(fromDireccionesActions.DELETE_CUSTOMER),
  //   map((action: fromDireccionesActions.DeleteDireccion) => action.payLoad),
  //   switchMap((payLoad: number) => this.DireccionService.deleteDireccion(payLoad)
  //     .pipe(
  //       map(() => new fromDireccionesActions.DeleteDireccionSuccess(payLoad)),
  //       catchError(error => of(new fromDireccionesActions.DeleteustomerFail(error)))
  //     )
  //   )
  // );
}
