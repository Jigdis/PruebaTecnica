import { Action, createAction, props } from '@ngrx/store';
import { Direccion } from 'src/app/direcciones/interfaces/direccion.interface';

/** LOAD DIRECCION */
export const LoadDireccion = createAction(
    '[Direccion] Load direcciones'
);

export const LoadDireccionSucess = createAction(
    '[Direccion] Load direcciones success',
    props<{ direccion: Direccion[] }>()
);

export const LoadDireccionFail = createAction(
  '[Direccion] Load direccion fail',
  props<{ error: any }>()
);

/** UPDATE DIRECCION */
export const UpdateDireccion = createAction(
    '[Direccion] Update direccion',
    props<{ direccion: Direccion[] }>()
);

export const UpdateDireccionSuccess = createAction(
    '[Direccion] Update direccion success',
    props<{ direccion: Direccion[] }>()
);

export const UpdateDireccionFail = createAction(
    '[Direccion] Update direccion fail',
    props<{ direccion: Direccion[] }>()
);

/** ADD DIRECCION */
export const AddDireccion = createAction(
    '[Direccion] Add direccion',
    props<{ direccion: Direccion }>()
);

export const AddDireccionSuccess = createAction(
    '[Direccion] Add direccion success',
    props<{ direccion: Direccion }>()
);

export const AddDireccionFail = createAction(
    '[Direccion] Add direccion fail',
    props<{ direccion: Direccion }>()
);

export const DeleteDireccion = createAction(
    '[Direccion] Delete direccion',
    props<{ direccion: Direccion }>()
);

export const DeleteDireccionSuccess = createAction(
    '[Direccion] Delete direccion success',
    props<{ direccion: Direccion }>()
);

export const DeleteDireccionFail = createAction(
    '[Direccion] Delete direccion fail',
    props<{ direccion: Direccion }>()
);



