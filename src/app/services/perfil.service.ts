import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError} from 'rxjs/operators';
import { throwError} from 'rxjs';
import { environment as env } from '../../environments/environment';
import Swal from 'sweetalert2'


@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  
  usuario = localStorage.getItem('id');
 token = localStorage.getItem('token')

  constructor(private http: HttpClient) {}

  verRutinasUsuario() {
    return this.http.get(env.urlBase + env.api.perfiles.obtenerPerfil + this.usuario)
      .pipe( map( resp => resp['perfil']))
  }

  agregarRutinaPerfil(rutinaId) {
    let body = {
      usuario: this.usuario,
      rutinas: rutinaId
    }
    return this.http.post(env.urlBase + env.api.perfiles.agregarPerfil + this.token, body)
            .pipe( map( (resp: any) => {
              Swal.fire({ icon: 'success', title: 'rutina agregada con exito'})
            }),
            catchError((err:any)=> {
              Swal.fire({ icon: 'error', 
                          title: `${err.error.mensaje}`})
              return throwError(err.message)
            })
            )
  }

  quitarRutinaPerfil(idPerfil, idRutina){
    let body = {
      idPerfil: idPerfil,
      idRutina: idRutina
    }
    return this.http.put(env.urlBase + env.api.perfiles.quitarPerfil + this.token, body )
  }

  
}
