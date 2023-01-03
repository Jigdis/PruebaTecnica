import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { EditarDireccionesComponent } from '../editarDirecciones/editarDirecciones.component';
import { Direccion } from '../../interfaces/direccion.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getDirecciones } from 'src/app/store/selectors/direcciones.selectors';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { AddDireccion, DeleteDireccion, LoadDireccion, UpdateDireccion } from 'src/app/store/actions';
import { Response } from '../../interfaces/response.interface';
import { NotificacionService } from 'src/app/shared/services/notificacion.service';

@Component({
  selector: 'app-listarDirecciones',
  templateUrl: './listarDirecciones.component.html',
  styleUrls: ['./listarDirecciones.component.css']
})
export class ListarDireccionesComponent implements OnInit {
  title:string = 'Direcciones';

  columnas: string[] = [ 'id', 'alias', 'calleNumero', 'colonia', 'codigoPostal', 'ciudad', 'estado', 'pais', 'acciones'];

  DIRECCIONES_DATA: Observable<Response> = new Observable();

  loading$: Observable<boolean> = new Observable();

  dataSource = new MatTableDataSource<Direccion>;
  @ViewChild(MatTable) tabla!: MatTable<Response>;

  constructor(
    private dialog: MatDialog,
    private store: Store<AppState>,
    private dialogService: DialogService,
    private notificacion: NotificacionService,
  ) { }

  ngOnInit() {
    
    this.listarDirecciones();
  }

  listarDirecciones(){
    this.store.dispatch(LoadDireccion());
    this.DIRECCIONES_DATA = this.store.select(getDirecciones);
      this.DIRECCIONES_DATA.subscribe(data => {
        this.dataSource = new MatTableDataSource(data.data);
    });
  } 

  agregar(){
    const dialogRef = this.dialog.open(EditarDireccionesComponent, {
      width: '700px',
      data: ''
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        this.store.dispatch(AddDireccion(resultado));
         setTimeout(() => {
          this.listarDirecciones();
          this.notificacion.mensaje('Dirección creada con éxito');
         }, 1500);
      }
    });
  }

  editar(elemento: Direccion){
    const dialogRef = this.dialog.open(EditarDireccionesComponent, {
      width: '700px',
      data: elemento
    });


    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){

         this.store.dispatch(UpdateDireccion(resultado));
         setTimeout(() => {
          this.listarDirecciones();
          this.notificacion.mensaje('Dirección actualizada con éxito');
         }, 1500);
      }
    });
  }

  eliminar(elemento: any){
    this.dialogService.confirmDialog({
      title: '¿Estás seguro de eliminar este registro?',
      message: '¡Esto no se puede revertir!',
      confirmText: 'Sí, eliminar',
      cancelText: 'Cancelar',
    }).subscribe(data =>
      {
      if(data === true){
        this.store.dispatch(DeleteDireccion(elemento));

         setTimeout(() => {
          this.listarDirecciones();
          this.notificacion.mensaje('Dirección eliminada con éxito');
         }, 1500);
      }
      });

  }

  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }

}
