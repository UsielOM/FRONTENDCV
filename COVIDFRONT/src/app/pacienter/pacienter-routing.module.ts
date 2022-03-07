import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormhistorypComponent} from "./formhistoryp/formhistoryp.component";
import {PatienthomepageComponent} from "./patienthomepage/patienthomepage.component";
import {PayComponent} from "./pay/pay.component";
import {RegisterpatientComponent} from "../Pages/registerpatient/registerpatient.component";
import {SeequotesComponent} from "./seequotes/seequotes.component";

const routes: Routes =  [{
  path: '',
  children: [
    {path: 'Hhistorialmform', component: FormhistorypComponent},
    {path: 'Patienthome', component: PatienthomepageComponent},
    {path: 'pagocita', component: PayComponent},
    {path: 'Rpsignosvitales', component: RegisterpatientComponent},
    {path: 'Vcitas', component: SeequotesComponent}
    //{path: 'Vpacientes', component: }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienterRoutingModule { }
