import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from "@angular/material/input";
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
