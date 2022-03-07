import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MakedaterComponent} from "./makedater/makedate.component";
import {MakeprescriptionrComponent} from "./makeprescriptionr/makeprescription.component";
import {MedichomepagerComponent} from "./medichomepager/medichomepage.component";
import {RegistermedicrComponent} from "./registermedicr/registermedic.component";
import {SeemedichistorypatientrComponent} from "./seemedichistorypatientr/seemedichistorypatientr.component";
import {SeepatientrComponent} from "./seepatientr/seepatientr.component";

const routes: Routes = [{
  path: '',
  children: [
    {path: 'Hacercitamed', component: MakedaterComponent},
    {path: 'Hacerrecetamed', component: MakeprescriptionrComponent},
    {path: 'Homepmedic', component: MedichomepagerComponent},
    {path: 'Registermedicm', component: RegistermedicrComponent},
    {path: 'Vhistorialmpaciente', component: SeemedichistorypatientrComponent},
    {path: 'Vpacientes', component: SeepatientrComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicorRoutingModule { }
