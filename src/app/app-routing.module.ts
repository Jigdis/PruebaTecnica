import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'direcciones',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'direcciones',
        loadChildren : () => import('./direcciones/direcciones.module').then(m => m.DireccionesModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
