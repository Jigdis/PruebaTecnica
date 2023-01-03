import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Direccion } from '../../interfaces/direccion.interface';

@Component({
  selector: 'app-editarDirecciones',
  templateUrl: './editarDirecciones.component.html',
  styleUrls: ['./editarDirecciones.component.css']
})
export class EditarDireccionesComponent implements OnInit {

  formulario: FormGroup;
  textoBoton: string = '';
  tituloDialog: string = '';
  
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditarDireccionesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Direccion
  ) {
    if(data){ //Actualizar
      this.textoBoton = 'Actualizar';
      this.tituloDialog = 'Editar Dirección';
    }
    else{ // Agregar
      this.textoBoton = 'Crear';
      this.tituloDialog = 'Agregar Dirección';
    }
    this.formulario = fb.group({
      id: new FormControl(data.id),
      alias: new FormControl(data.alias,[Validators.required, Validators.maxLength(25)]),
      calleNumero: new FormControl(data.calleNumero, [Validators.required, Validators.maxLength(250)]),
      colonia: new FormControl(data.colonia, [Validators.required, Validators.maxLength(100)]),
      codigoPostal: new FormControl(data.codigoPostal, [Validators.required, Validators.min(5), Validators.maxLength(5), ]),
      ciudad: new FormControl(data.ciudad, [Validators.required, Validators.maxLength(100)]),
      estado: new FormControl(data.estado, [Validators.required, Validators.maxLength(100)]),
      pais: new FormControl(data.pais, [Validators.required, Validators.maxLength(100)])
    })
  }

  ngOnInit() {
  }

  public myError = (controlName: string, errorName: string) =>{
    return this.formulario.controls[controlName].hasError(errorName);
    }

  actualizar(){
    this.dialogRef.close(this.formulario.value);
  }

  cerrar(){
    this.dialogRef.close();
  }

}
