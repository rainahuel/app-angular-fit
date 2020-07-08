import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../services/perfil.service';
import { Rutina } from '../../models/rutina';
import { Usuario } from '../../models/usuario';
import swal from'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  rutinas: Rutina[];
  idPerfil;
  idRutina;
  usuario: Usuario;

  constructor(private perfilService: PerfilService) { }

  ngOnInit(): void {
   
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    console.log(this.usuario)
    this.verRutinas();
  }

  quitarRutina(rutina: any) {

    swal.fire({
      title: '¿quieres eliminar la rutina de tu perfil?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.value) {
        this.perfilService.quitarRutinaPerfil(this.idPerfil, rutina._id)
        .subscribe(resp => this.verRutinas())
      }
    })
  }

  verRutinas(){
    this.perfilService.verRutinasUsuario().subscribe(resp => {
      this.rutinas = resp[0].rutinas;
      this.idPerfil = resp[0]._id;
    })
  }

}
