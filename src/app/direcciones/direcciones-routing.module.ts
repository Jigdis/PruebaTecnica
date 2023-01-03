import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarDireccionesComponent } from './components/listarDirecciones/listarDirecciones.component';

const routes: Routes = [
  {
    path: '',
    component: ListarDireccionesComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DireccionesRoutingModule { }
