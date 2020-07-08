import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RutinasService {

  constructor(private http: HttpClient) { }

  obtenerRutinas() {
    return this.http.get(env.urlBase + env.api.rutinas.obtenerRutinas);
  }
}
