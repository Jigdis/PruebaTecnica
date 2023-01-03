import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarDireccionesComponent } from '../editarDirecciones/editarDirecciones.component';

@Component({
  selector: 'app-listarDirecciones',
  templateUrl: './listarDirecciones.component.html',
  styleUrls: ['./listarDirecciones.component.css']
})
export class ListarDireccionesComponent implements OnInit {
  title:string = 'Direcciones';
  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  agregar(){
    const dialogRef = this.dialog.open(EditarDireccionesComponent, {
      width: '700px',
      data: ''
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        // this.alumnoService.addAlumno(resultado).subscribe((response) => {
        //   this.loading$ = this.store.select(selectLoading);
        //   this.store.dispatch(loadAlumnosNgrxs());
        //   this.listarAlumnos();
        //   this.notificacion.mensaje('Alumno creado con éxito');
        //   this.tabla.renderRows();
        // });
      }
    });
  }

  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }

}
