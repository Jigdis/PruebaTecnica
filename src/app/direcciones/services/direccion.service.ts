import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Direccion } from '../interfaces/direccion.interface';
import { Response } from '../interfaces/response.interface';



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
    return this._http.get<Response>(`${this.apiUrl}/Direcciones`);
  }

  getDireccionById(id:number){
    return this._http.get<Direccion[]>(`${this.apiUrl}/Direcciones/${id}`);
  }

  postDireccion(direccion: any){
    return this._http.post(`${this.apiUrl}/Direcciones/`, JSON.stringify(direccion), this.httpOptions);
  }

  putDireccion(direccion: any){
    return this._http.put(`${this.apiUrl}/Direcciones/${direccion.id}`, JSON.stringify(direccion), this.httpOptions);
  }

  deleteDireccion(direccion: any){
    return this._http.delete(`${this.apiUrl}/Direcciones/${direccion.id}`);
  }

}
