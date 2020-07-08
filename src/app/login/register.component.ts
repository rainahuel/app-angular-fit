import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;
 
  constructor( private usuarioService: UsuarioService,
               private router: Router) { }

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      passwordDos: new FormControl(null, Validators.required),
    }, { validators: this.validaPass('password', 'passwordDos')});
  }

  validaPass(campo1:any, campo2:any) {
    
    return ( group: FormGroup) => {

      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;
      if (pass1 === pass2) {
        return null
      }
      return {
        soniguales: true,
      }
    }
  }  

  registrarUsuario() {
    if (this.formRegister.invalid) {
      return;
    }
    let usuario = new Usuario(
      this.formRegister.value.nombre,
      this.formRegister.value.apellido,
      this.formRegister.value.email,
      this.formRegister.value.password,
    );
    
    this.usuarioService.crearUsuario(usuario).subscribe(resp => {
      this.router.navigate(['/login']);
    })
  }
}
