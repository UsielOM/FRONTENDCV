import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLink } from '@angular/router';
import {RegisterpatientComponent} from "./Pages/registerpatient/registerpatient.component";
import {LoginComponent} from "./Pages/login/login.component";
import {RecoverpasswordComponent} from "./Pages/recoverpassword/recoverpassword.component";
import {HomepageComponent} from "./Pages/homepage/homepage.component";
import {FormhistorypComponent} from "./Paciente/formhistoryp/formhistoryp.component";
import {PatienthomepageComponent} from "./Paciente/patienthomepage/patienthomepage.component";
import {PayComponent} from "./Paciente/pay/pay.component";
import {RegisterVitalsingsComponent} from "./Paciente/register-vitalsings/register-vitalsings.component";
import {SeepatientComponent} from "./Medico/seepatient/seepatient.component";
import {MakedateComponent} from "./Medico/makedate/makedate.component";
import {MakeprescriptionComponent} from "./Medico/makeprescription/makeprescription.component";
import {MedichomepageComponent} from "./Medico/medichomepage/medichomepage.component";
import {RegistermedicComponent} from "./Medico/registermedic/registermedic.component";
import {SeemedichistorypatientComponent} from "./Medico/seemedichistorypatient/seemedichistorypatient.component";
import {MedichomepagerComponent} from "./medicor/medichomepager/medichomepage.component";
import {SeequotesComponent} from "./Paciente/seequotes/seequotes.component";
import {PruebasComponent} from "./Pages/pruebas/pruebas.component";
import {AdminComponent} from "./Pages/admin/admin.component";


const routes: Routes = [
  {path: 'Register', component : RegisterpatientComponent},
  {path: 'Login', component : LoginComponent},
  {path: 'Recoverpassword', component : RecoverpasswordComponent},
  {path: 'Teleconsulta-covid', component : HomepageComponent},
  {path: 'Admin', component : AdminComponent},
  {path: 'pruebas', component : PruebasComponent},
  // paciente rutas
  {path: 'Historialmedico', component : FormhistorypComponent},
  {path: 'Homepatient', component : PatienthomepageComponent},
  {path: 'pay', component :PayComponent },
  {path: 'Rsignosvitales', component : RegisterVitalsingsComponent},
  {path: 'Vercitas', component : SeequotesComponent},
  // medico rutas
  {path: 'Hacercita', component : MakedateComponent},
  {path: 'Hacerreceta', component : MakeprescriptionComponent},
  {path: 'Homemedic', component : MedichomepageComponent},
  {path: 'Registermedic', component : RegistermedicComponent},
  {path: 'VHistorialmedichistoryp', component : SeemedichistorypatientComponent},
  {path: 'Verpaciente', component : SeepatientComponent},
  //rutas hijas prueba
  {path: 'Medico', component: MedichomepagerComponent, loadChildren: () => import('./medicor/medicor.module').then(m => m.MedicorModule)},
  {path: 'Paciente', loadChildren: () => import('./pacienter/pacienter.module').then(m => m.PacienterModule)},
  {path: '**', pathMatch : 'full', redirectTo: 'Teleconsulta-covid'}
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule, RouterModule.forRoot(routes)]

})

//export const ROUTESS = RouterModule.forRoot(routes);
export class AppRoutingModule { }
