import { Component, OnInit } from '@angular/core';
import {LGM} from "../../lg";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";
import {CambiatiponavService} from "../../cambiatiponav.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  log:LGM= new  LGM();
  errorMessage = "";


  constructor(private scamtipo: CambiatiponavService,
              private authService: AuthService,
              private router : Router) { }

  ngOnInit(): void {
  }

  redirec(){
    this.router.navigate(['Recoverpassword']);
  }

  login(){
    this.errorMessage="";
    this.authService.loginm(this.log.Email, this.log.password).subscribe(
      result =>{
        console.log(result);
        this.router.navigate(['Homemedic']);
        this.scamtipo.cambiatipos.emit(2);
      },
      error =>{

        this.errorMessage="Username or password is wrong.";
      }
    );
  }

}
