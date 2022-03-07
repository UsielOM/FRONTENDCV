import { Component, OnInit,Output } from '@angular/core';
import { LGM } from '../../lg';
import { AuthService } from '../../auth.service';
import {Router} from '@angular/router'
import {CambiatiponavService} from "../../cambiatiponav.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  log:LGM= new  LGM();
  errorMessage = "";


  constructor(private scamtipo: CambiatiponavService , private authService: AuthService,
              private router : Router) { }

  ngOnInit(): void {
  }

  redirec(){
    this.router.navigate(['Recoverpassword']);
  }

  login(){
    this.errorMessage="";
    this.authService.login(this.log.Email, this.log.password).subscribe(
      result =>{
        console.log(result);
        this.router.navigate(['Homepatient']);
        this.scamtipo.cambiatipos.emit(1);
      },
      error =>{

        this.errorMessage="Usuario o contraseña incorrecto";
      }
    );
  }

}


// PARTES DE RECETAS PARA QUE LO VEA EL PACIENTE Y IMPRIMER
// HACER PAGO CON CITA
// que vea las CITAS
//
