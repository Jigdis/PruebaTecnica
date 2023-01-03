import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Direccion } from '../interfaces/direccion.interface';



@Injectable({
  providedIn: 'root'
})
export class DireccionService {
  private apiUrl = environment.apiUrl;

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private _http: HttpClient) { }

  getDirecciones(){
    return this._http.get<Direccion[]>(`${this.apiUrl}/Direcciones`);
  }

  getDireccionById(id:number){
    return this._http.get<Direccion[]>(`${this.apiUrl}/Direcciones/${id}`);
  }

  postDireccion(direccion: Direccion){
    return this._http.post(`${this.apiUrl}/Direcciones/`, JSON.stringify(direccion), this.httpOptions);
  }

  putDireccion(direccion: Direccion){
    return this._http.put(`${this.apiUrl}/${direccion.id}/Direcciones/`, JSON.stringify(direccion), this.httpOptions);
  }

  deleteDireccion(id: number){
    return this._http.delete(`${this.apiUrl}/Direcciones/${id}`);
  }

}
