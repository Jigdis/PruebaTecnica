import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DireccionesRoutingModule } from './direcciones-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ListarDireccionesComponent } from './components/listarDirecciones/listarDirecciones.component';
import { EditarDireccionesComponent } from './components/editarDirecciones/editarDirecciones.component';

@NgModule({
  declarations: [
    ListarDireccionesComponent,
    EditarDireccionesComponent
  ],
  imports: [
    CommonModule,
    DireccionesRoutingModule,
    SharedModule,
  ]
})
export class DireccionesModule { }
