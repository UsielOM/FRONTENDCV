import { Component, OnInit } from '@angular/core';
import { LGM } from '../../lg';
import { AuthService } from '../../auth.service';
import {Router} from '@angular/router'
import {CambiatiponavService} from "../../cambiatiponav.service";
import { NavbarComponent } from '../../Body/navbar/navbar.component';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})




export class HomepageComponent  implements OnInit {

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

        this.errorMessage="Username or password is wrong.";
      }
    );
  }

}
