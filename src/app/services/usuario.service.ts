import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment as env } from '../../environments/environment';
import { throwError} from 'rxjs';
import swal from'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    
  token: String;
  usuario: Usuario;

  constructor(private http: HttpClient,
              private router: Router) {
    this.cargarStorage();
   }

  guardarStorage( id:string, token: string, usuario: Usuario ) {
    localStorage.setItem('id', id)
    localStorage.setItem('token', token)
    localStorage.setItem('usuario', JSON.stringify(usuario))
    this.usuario = usuario;
    this.token = token;
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token')
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  estaLogueado() {
    return (this.token.length > 5) ? true : false;
  }

  logaut() {
    this.usuario = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('id');
    this.router.navigate(['/login']);
  }

  crearUsuario(usuario: Usuario) {
    return this.http.post(env.urlBase + env.api.usuario.crearUsuario, usuario)
              .pipe(map( (resp:any) => {
                swal.fire('Usuario creado', usuario.email, 'success')
              }),
              catchError((err:any)=> {
                swal.fire({ icon: 'error', 
                            title: `${err.error.mensaje}`,
                            text: 'el correo ya esta registrado'})
                return throwError(err.message)
              })
              )
  }

  login(usuario) {
    return this.http.post(env.urlBase + env.api.usuario.login, usuario)
              .pipe(map ((resp: any) => {
                this.guardarStorage(resp.id, resp.token, resp.usuario);
                return true;
              }),
              catchError((err:any)=> {
                swal.fire({ icon: 'error', title: `${err.error.mensaje}`})
                return throwError(err.message)
              })     
              )        
  }
}
