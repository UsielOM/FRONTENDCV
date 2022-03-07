import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Users } from '../../users';
import { Registerpasienteservice } from './registerpasiente.service';
import { ActivatedRoute, Router } from '@angular/router';
import {ConfirmedValidator} from "./conficontrapa"

@Component({
  selector: 'app-registerpatient',
  templateUrl: './registerpatient.component.html',
  styleUrls: ['./registerpatient.component.css']
})
export class RegisterpatientComponent implements OnInit {

 user: Users = new Users();
 saved = false;
 regexito = "";
 isNew= false;

  constructor(
    private registerpasienteservice: Registerpasienteservice,
    private router: Router,
    private route : ActivatedRoute,
    private fb: FormBuilder
    ) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(params=>{
      const id: string = params ["id"];
      if(id !== "new"){
      this.user = new Users();
      this.isNew= true;

      }else{

      }
    })

  }

  formregpatien= this.fb.group({
    nombre: new FormControl([''],[Validators.required]),
    apaterno: new FormControl([''],[Validators.required]),
    amaterno: new FormControl([''],[Validators.required]),
    curp: new FormControl('',[Validators.required, Validators.minLength(18)]),
    fechanaci: new FormControl([''],[Validators.required]),
    genero: new FormControl([''],[Validators.required]),
    correo: new FormControl([''],[Validators.required, Validators.email]),
    contrasena: new FormControl([''], [Validators.required, Validators.minLength(5)]),
    confcontrasena: new FormControl([''], [Validators.required, Validators.minLength(5)]),

  },{
    validator: ConfirmedValidator('contrasena', 'confcontrasena')
  });

  get nombre(){
    return this.formregpatien.get('nombre');
  }

  get apaterno(){
    return this.formregpatien.get('apaterno');
  }

  get amaterno(){
    return this.formregpatien.get('amaterno');
  }

  get curp(){
    return this.formregpatien.get('curp');
  }

  get fechanaci(){
    return this.formregpatien.get('fechanaci');
  }

  get correo(){
    return this.formregpatien.get('correo');
  }

  get contrasena(){
    return this.formregpatien.get('contrasena');
  }

  get confcontrasena(){
    return this.formregpatien.get('confcontrasena');
  }

  recuperadatosp(): void{
    console.warn(this.formregpatien.value)
    console.log(this.formregpatien.value)
    this.regexito="Registro Exitoso"
  }

  createUser():void{
    this.saved= false;
    this.registerpasienteservice.createUser(this.user).subscribe(result =>{
      this.user= result;

      this.saved = true;
      this.isNew= false;

    });

  }

}
