import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.models';
import { AuthService } from 'src/app/services/auth.service';
const Swal = require('sweetalert2')


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;

  constructor( private auth: AuthService,
               private router: Router) { }

  ngOnInit( ) {
    if( localStorage.getItem('email') ) {
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }

  login( form: NgForm ) {

    if( form.invalid )
      return;

    Swal.fire({
      title: 'login',
      text: 'Espere por favor...',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    this.auth.login( this.usuario )
      .subscribe( resp => {

        console.log(resp);
        Swal.close();
        if( this.recordarme ) {
          localStorage.setItem('email',this.usuario.email);
        }
        this.router.navigateByUrl('home');

      }, (err) => {

        console.log(err.error.error.message);
        Swal.fire({
          title: 'error',
          text: err.error.error.message,
          icon: 'error',

        });
      });
  }


}
