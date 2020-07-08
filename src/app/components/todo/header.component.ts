import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  salir() {
    swal.fire({
      title: 'estas seguro de Cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Salir'
    }).then((result) => {
      if (result.value) {
        this.usuarioService.logaut();
      }
    })
    
  }
}
