import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RutaModelo} from '../modelos/ruta.modelo';
import {SeguridadService} from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class RutaService {

  constructor(private http: HttpClient,
    private seguridadService: SeguridadService
  ) {
    this.token = this.seguridadService.getToken();
  }
  url = "http://localhost:3000"
  token: string = ''

  store(ruta: RutaModelo): Observable<RutaModelo> {
    return this.http.post<RutaModelo>(`${this.url}/ruta`, {
      id: ruta.id,
      tiempoEstimado: ruta.tiempoEstimado,
      origen: ruta.origen,
      destino: ruta.destino
    });
  }

  getAll(): Observable<RutaModelo[]> {
    return this.http.get<RutaModelo[]>(`${this.url}/ruta`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }

  update(ruta: RutaModelo): Observable<RutaModelo> {
    return this.http.patch<RutaModelo>(`${this.url}/ruta/${ruta.id}`, {
      id: ruta.id,
      tiempoEstimado: ruta.tiempoEstimado,
      origen: ruta.origen,
      destino: ruta.destino
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  delete(id: string): Observable<RutaModelo[]> {
    return this.http.delete<RutaModelo[]>(`${this.url}/ruta/${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }

  getWithId(id: string): Observable<RutaModelo> {
    return this.http.get<RutaModelo>(`${this.url}/ruta/${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }
}
