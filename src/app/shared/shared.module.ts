import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Angular Material
import { MaterialModule } from './material/material.module';
import { ConfirmDialogComponent } from './components/confirmDialog/confirmDialog.component';


@NgModule({
  declarations: [
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,

  ]
})
export class SharedModule { }
