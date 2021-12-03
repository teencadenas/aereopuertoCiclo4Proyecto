import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {VueloModelo} from '../modelos/vuelo.modelo';
import {SeguridadService} from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  constructor(private http: HttpClient,
    private seguridadService: SeguridadService
  ) {
    this.token = this.seguridadService.getToken();
  }
  url = "http://localhost:3000"
  token: string = ''

  store(vuelo: VueloModelo): Observable<VueloModelo> {
    return this.http.post<VueloModelo>(`${this.url}/vuelo`, {
      id: vuelo.id,
      fechaInicio: vuelo.fechaInicio,
      fechaFin: vuelo.fechaFin,
      horaInicio: vuelo.horaInicio,
      horaFin: vuelo.horaFin,
      asientosVendidos: vuelo.asientosVendidos,
      nombrePiloto: vuelo.nombrePiloto,
      ruta: vuelo.ruta
    });
  }

  getAll(): Observable<VueloModelo[]> {
    return this.http.get<VueloModelo[]>(`${this.url}/vuelo`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }

  update(vuelo: VueloModelo): Observable<VueloModelo> {
    return this.http.patch<VueloModelo>(`${this.url}/vuelo/${vuelo.id}`, {
      id: vuelo.id,
      fechaInicio: vuelo.fechaInicio,
      fechaFin: vuelo.fechaFin,
      horaInicio: vuelo.horaInicio,
      horaFin: vuelo.horaFin,
      asientosVendidos: vuelo.asientosVendidos,
      nombrePiloto: vuelo.nombrePiloto,
      ruta: vuelo.ruta
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  delete(id: string): Observable<VueloModelo[]> {
    return this.http.delete<VueloModelo[]>(`${this.url}/vuelo/${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }

  getWithId(id: string): Observable<VueloModelo> {
    return this.http.get<VueloModelo>(`${this.url}/ruta/${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }
}
