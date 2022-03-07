import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienterRoutingModule } from './pacienter-routing.module';
import { FormhistorypComponent } from './formhistoryp/formhistoryp.component';
import { PatienthomepageComponent } from './patienthomepage/patienthomepage.component';
import { PayComponent } from './pay/pay.component';
import { RegisterVitalsingsComponent } from './register-vitalsings/register-vitalsings.component';
import { SeequotesComponent } from './seequotes/seequotes.component';


@NgModule({
  declarations: [
    FormhistorypComponent,
    PatienthomepageComponent,
    PayComponent,
    RegisterVitalsingsComponent,
    SeequotesComponent
  ],
  imports: [
    CommonModule,
    PacienterRoutingModule
  ]
})
export class PacienterModule { }
