import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AereopuertoModelo} from '../modelos/aereopuerto.modelo';
import {SeguridadService} from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AereopuertoService {

  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService
  ) {
    this.token = this.seguridadService.getToken();
  }

  url = "http://localhost:3000"
  token: string = ''

  store(aereopuerto: AereopuertoModelo): Observable<AereopuertoModelo> {
    return this.http.post<AereopuertoModelo>(`${this.url}/aereopuerto`, {
      id: aereopuerto.id,
      nombre: aereopuerto.nombre,
      ciudad: aereopuerto.ciudad,
      pais: aereopuerto.pais,
      coordx: aereopuerto.coordx,
      coordy: aereopuerto.coordy,
      siglas: aereopuerto.siglas,
      tipo: aereopuerto.tipo
    });
  }

  getAll(): Observable<AereopuertoModelo[]> {
    return this.http.get<AereopuertoModelo[]>(`${this.url}/aereopuerto`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }

  update(aereopuerto: AereopuertoModelo): Observable<AereopuertoModelo> {
    return this.http.patch<AereopuertoModelo>(`${this.url}/aereopuerto/${aereopuerto.id}`, {
      id: aereopuerto.id,
      nombre: aereopuerto.nombre,
      ciudad: aereopuerto.ciudad,
      pais: aereopuerto.pais,
      coordx: aereopuerto.coordx,
      coordy: aereopuerto.coordy,
      siglas: aereopuerto.siglas,
      tipo: aereopuerto.tipo
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  delete(id: string): Observable<AereopuertoModelo[]> {
    return this.http.delete<AereopuertoModelo[]>(`${this.url}/aereopuerto/${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }

  getWithId(id: string): Observable<AereopuertoModelo> {
    return this.http.get<AereopuertoModelo>(`${this.url}/aereopuerto/${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }
}
