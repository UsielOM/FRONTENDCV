import {Component, OnInit, ViewChild} from '@angular/core';
import { ServiciospacienteService } from "../../servicios/serviciospaciente.service";
import { Vitalsignos } from "../../Vitalsignos";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import {Users} from "../../users";


@Component({
  selector: 'app-register-vitalsings',
  templateUrl: './register-vitalsings.component.html',
  styleUrls: ['./register-vitalsings.component.css']
})
export class RegisterVitalsingsComponent implements OnInit {

  datose =[35,36.5,37.6,36.4,36];

  datot =[
    {
      id: 1,
      fecha: 2,
      t: 35,
    },
    {
      id: 2,
      fecha: 2,
      t: 36.5,
    },
    {
      id: 3,
      fecha: 3,
      t: 36
    },
    {
      id: 4,
      fecha: 4,
      t: 37.6,
    },
    {
      id: 5,
      fecha: 5,
      t: 36.4,
    }
  ];
  //--grafis

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: this.datose ,
        label: 'Temperatura',
        backgroundColor: 'rgb(238,86,154,.2)',
        borderColor: 'rgba(255,0,0,1)',
        pointBackgroundColor: 'rgb(236,23,23,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [ 65,70,100,80,85],
        label: 'Frecuencia Cardiaca',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
      {
        data: [ 95,90,89,90,95 ],
        label: 'Oxigenación',
        //yAxisID: 'y-axis-1', //esto se puede cambiar
        backgroundColor: 'rgb(30,106,234,.3)',
        borderColor: 'rgb(2,124,255,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: [ 'fecha1', 'fecha2', 'fecha3', 'fecha4', 'fehca5' ]
  };


  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
        {
          position: 'left',
        },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    },

    plugins: {
      legend: { display: true },
      // @ts-ignore
      annotation: {
        annotations: [
          {
            type: 'line',
            scaleID: 'x',
            value: 'March',
            borderColor: 'orange',
            borderWidth: 2,
            label: {
              position: 'center',
              enabled: true,
              color: 'orange',
              content: 'LineAnno',
              font: {
                weight: 'bold'
              }
            }
          },
        ],
      }
    }
  };

  public lineChartType: ChartType = 'line';

  //--

  vitalsig: Vitalsignos = new Vitalsignos();
  saved = false;
  regexito = "";
  isNew= false;
  chart: any = null;

  // source: https://codesandbox.io/s/angular-clock-forked-3czyl?file=/src/app/clock.component.css:0-30
  hours!: string;
  minutes!: string;
  seconds!: string;
  private timerId = 0;

  vitalsigp: Vitalsignos[] =[];
  pruebap: Users[] =[];

  constructor(private fob: FormBuilder,
              private serviciospacienteservice: ServiciospacienteService,
              private router: Router,
              private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params=>{
      const id: string = params.id;
      if(id !== "new"){
        this.vitalsig = new Vitalsignos();
        this.isNew= true;

      }else{

      }
    })

    this.setCurrentTime();
    // @ts-ignore
    this.timerId = this.updateTime();
  }
prueba1(){

  this.serviciospacienteservice.getvitalsigpi('2').subscribe(
    vitalsigp =>  (
      this.vitalsigp=vitalsigp,
        console.log(vitalsigp)
    ),
    error=> console.error("ERROR",error)
  );

}


  //-------------------- Registrovs --------------------------------
  formregvs= this.fob.group({
    temperatura: new FormControl([''],Validators.required),
    oxigenacion: new FormControl(['']),
    frecuenciacar: new FormControl([''],Validators.required),
  })

  get temperatura(){
    return this.formregvs.get('temperatura');
  }
  get oxigenacion(){
    return this.formregvs.get('oxigenacion');
  }
  get frecuenciacar(){
    return this.formregvs.get('frecuenciacar');
  }

  versignosvap(): void{

  }

  recuperadatosm(): void{
    console.warn(this.formregvs.value)
    console.log(this.formregvs.value)
    this.regexito="Registro Exitoso"
  }

  regvitalsp():void{
    this.saved= false;
    this.serviciospacienteservice.addvitalsigpt(this.vitalsig).subscribe(result =>{
      this.vitalsig= result;

      this.saved = true;
      this.isNew= false;
      this.regexito="Registro Exitoso"
    });
  }
  //------------

  //-------------------- Reloj --------------------------------
  ngOnDestroy() {
    clearInterval(this.timerId);
  }

  private setCurrentTime() {
    const time = new Date(Date.now());
    this.hours = this.leftPadZero(time.getHours());
    this.minutes = this.leftPadZero(time.getMinutes());
    this.seconds = this.leftPadZero(time.getSeconds());
  }

  private updateTime() {
    setInterval(() => {
      this.setCurrentTime();
    }, 1000);
  }

  private leftPadZero(value: number) {
    return value < 10 ? `0${value}` : value.toString();
  }
  //-------------------- Reloj --------------------------------


}
