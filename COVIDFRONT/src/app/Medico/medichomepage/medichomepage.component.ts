import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medichomepage',
  templateUrl: './medichomepage.component.html',
  styleUrls: ['./medichomepage.component.css']
})
export class MedichomepageComponent implements OnInit {

  constructor() { }

  DATOSMED = [
    {
      id:1,
      "nombre": "ALGUIEN",
      "apellidop": "ALGUIEN",
      "apellidom": "ALGUIEN",
      "curp": "asdqwe123145ghgf21",
      "especialidad": "ESPECIALISTA EN TODO",
      "hospital": "PRIPIO",
      "cedpro": "TSAUYD1231",
      "consultorio": "5",

    },
  ];

  ngOnInit(): void {
  }

}
