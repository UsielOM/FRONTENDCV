import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seepatient',
  templateUrl: './seepatientr.component.html',
  styleUrls: ['./seepatientr.component.css']
})
export class SeepatientrComponent implements OnInit {

  constructor() { }

  USERS = [
    {
      "nup": 1,
      "nombre": "Leanne Graham",
      "apellidop": "Alguien",
      "apellidom": "Algien",
      "curp": "asdqwe123145ghgf21",
      "fnaciemento": "00-00-0000",
      "pago": "NO PAGADO",
      "estatus": "ENFERMO",
      "id": "asdwe",
    },
    {
      "nup": 2,
      "nombre": "Leanne Graham",
      "apellidop": "Alguien",
      "apellidom": "Algien",
      "curp": "asdqwe123145ghgf21",
      "fnaciemento": "00-00-0000",
      "pago": "PAGADO",
      "estatus": "SANO",
      "id": "asdwe",
    },
    {
      "nup": 3,
      "nombre": "Leanne Graham",
      "apellidop": "Alguien",
      "apellidom": "Algien",
      "curp": "asdqwe123145ghgf21",
      "fnaciemento": "00-00-0000",
      "pago": "PAGADO",
      "estatus": "ENFERMO",
      "id": "asdwe",
    },

  ];

  ngOnInit(): void {
  }

}
