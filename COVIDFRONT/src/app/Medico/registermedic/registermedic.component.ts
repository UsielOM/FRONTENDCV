import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ConfirmedValidator} from "./confirmarcontra";
import {Medics} from "../../medics";
import { RegistermedicService} from "./registermedic.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-registermedic',
  templateUrl: './registermedic.component.html',
  styleUrls: ['./registermedic.component.css']
})
export class RegistermedicComponent implements OnInit {

  userm: Medics = new Medics();
  saved = false;
  regexito = "";
  isNew= false;

  constructor(private fb: FormBuilder,
              private registermedicservice: RegistermedicService,
              private router: Router,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const id: string = params.id;
      if(id !== "new"){
        this.userm = new Medics();
        this.isNew= true;

      }else{

      }
    })
  }

  formregmedic = this.fb.group({
    nombre: new FormControl([],[Validators.required]),
    apaterno: new FormControl([],[Validators.required]),
    amaterno: new FormControl([],[Validators.required]),
    curp: new FormControl('',[Validators.required, Validators.minLength(18)]),
    fechanaci: new FormControl([''],[Validators.required]),
    genero: new FormControl([''],[Validators.required]),
    correo: new FormControl([''],[Validators.required, Validators.email]),
    especialidad: new FormControl([''],[Validators.required]),
    hospital: new FormControl([''], [Validators.required]),
    cedulaprofecional: new FormControl([''], [Validators.required]),
    consultorio: new FormControl([''], [Validators.required]),
    contrasena: new FormControl([''], [Validators.required, Validators.minLength(5)]),
    confcontrasena: new FormControl([''], [Validators.required, Validators.minLength(5)]),

  },{
    validator: ConfirmedValidator('contrasena', 'confcontrasena')
});

  get nombre(){
    return this.formregmedic.get('nombre');
  }

  get apaterno(){
    return this.formregmedic.get('apaterno');
  }

  get amaterno(){
    return this.formregmedic.get('amaterno');
  }

  get curp(){
    return this.formregmedic.get('curp');
  }

  get fechanaci(){
    return this.formregmedic.get('fechanaci');
  }

  get genero(){
    return this.formregmedic.get('genero');
  }

  get correo(){
    return this.formregmedic.get('correo');
  }

  get contrasena(){
    return this.formregmedic.get('contrasena');
  }

  get confcontrasena(){
    return this.formregmedic.get('confcontrasena');
  }


  get especialidad(){
    return this.formregmedic.get('especialidad');
  }

  get hospital(){
    return this.formregmedic.get('hospital');
  }

  get cedulaprofecional(){
    return this.formregmedic.get('cedulaprofecional');
  }

  get consultorio(){
    return this.formregmedic.get('consultorio');
  }


  recuperadatosm(): void{
    console.warn(this.formregmedic.value)
    console.log(this.formregmedic.value)
    this.regexito="Registro Exitoso"
  }

  createUser():void{
    this.saved= false;
    this.registermedicservice.createUser(this.userm).subscribe(result =>{
      this.userm= result;

      this.saved = true;
      this.isNew= false;
      this.regexito="Registro Exitoso"
    });

  }

}
