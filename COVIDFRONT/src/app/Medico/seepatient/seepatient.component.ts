import { Component, OnInit } from '@angular/core';
import { ServiciospacienteService } from "../../servicios/serviciospaciente.service";
import {Users} from "../../users";

@Component({
  selector: 'app-seepatient',
  templateUrl: './seepatient.component.html',
  styleUrls: ['./seepatient.component.css']
})
export class SeepatientComponent implements OnInit {

  pacientes: Users[]=[];

  constructor(private serviciospaciente : ServiciospacienteService ) {}

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
    }
  ];

  ngOnInit(): void {

    this.serviciospaciente.getPacientes().subscribe(
      patients =>  (
        this.pacientes=patients,
        console.log(patients)
        ),
      error=> console.error("NADAAAAAAAAAAAAAA......",error)
    );

  }

}
