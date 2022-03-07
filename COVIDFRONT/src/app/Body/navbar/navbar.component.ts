import { Component, OnInit,Input } from '@angular/core';
import {LoginComponent} from "../../Pages/login/login.component";
import {CambiatiponavService} from "../../cambiatiponav.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public tipousuario: number = 0;
  public mostarp: boolean = false;
  public mostard: boolean = true;
  public mostarg: boolean = false;


  constructor(private ctipousuario: CambiatiponavService) {

  }

  ngOnInit(): void {
    this.ctipousuario.cambiatipos.subscribe(data => {
      console.log(data);
      if(data == 1) {
        this.mostarg=false;
        this.mostarp=true;
        this.mostard=false;
        console.log(this.tipousuario);

      }
      else if(data == 2) {
        this.mostarg=false;
        this.mostarp=false;
        this.mostard=true;
        console.log(this.tipousuario);
      }
      else{
        this.mostarg = true;
        this.mostarp = false;
        this.mostard = false;
        console.log(this.tipousuario);
      }

      console.log('pa',this.mostarp);
      console.log('me',this.mostard);
      console.log('ge',this.mostarg);

    })
  }

    /*
    if(this.tipousuario == 1) {
      this.mostarg=false;
      this.mostarp=true;
      this.mostard=false;
      console.log(this.tipousuario);

    }
    else if(this.tipousuario == 2) {
      this.mostarg=false;
      this.mostarp=false;
      this.mostard=true;
      console.log(this.tipousuario);
    }
    else{
      this.mostarg = true;
      this.mostarp = false;
      this.mostard = false;
      console.log(this.tipousuario);
    }

      console.log('pa',this.mostarp);
    console.log('me',this.mostard);
    console.log('ge',this.mostarg);

  }
*/



}
