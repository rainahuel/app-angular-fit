import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private usuarioService: UsuarioService,
              private router: Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  login() {
    if (this.formLogin.invalid) {
      return;
    }
    let email = this.formLogin.value.email;
    let password = this.formLogin.value.password;
    let usuario = {email, password}
    this.usuarioService.login(usuario).subscribe(resp => this.router.navigate(['/rutinas']))
  }
}
