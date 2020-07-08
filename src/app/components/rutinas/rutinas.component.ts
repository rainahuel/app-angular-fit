import { Component, OnInit } from '@angular/core';
import { Rutina } from '../../models/rutina';
import { PerfilService } from '../../services/perfil.service';
import { RutinasService } from '../../services/rutinas.service';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.css']
})
export class RutinasComponent implements OnInit {

  rutinas: Rutina[];

  constructor( private rutinaService: RutinasService,
               private perfilService: PerfilService) { 
  }  

  ngOnInit(): void {

    this.rutinaService.obtenerRutinas().subscribe(resp => {
      this.rutinas = resp['rutinas'];
    })
  }

  agregarRutina(data:any) {
    
      this.perfilService.agregarRutinaPerfil(data._id).subscribe(resp => {
      console.log(resp)
      })
  }

}
