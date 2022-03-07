import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import { Router } from "@angular/router";
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { FooterComponent } from './Body/footer/footer.component';
import { NavbarComponent } from './Body/navbar/navbar.component';
import { MakedateComponent } from './Medico/makedate/makedate.component';
import { MakeprescriptionComponent } from './Medico/makeprescription/makeprescription.component';
import { MedichomepageComponent } from './Medico/medichomepage/medichomepage.component';
import { RegistermedicComponent } from './Medico/registermedic/registermedic.component';
import { SeemedichistorypatientComponent } from './Medico/seemedichistorypatient/seemedichistorypatient.component';
import { SeepatientComponent } from './Medico/seepatient/seepatient.component';
import { FormhistorypComponent } from './Paciente/formhistoryp/formhistoryp.component';
import { PatienthomepageComponent } from './Paciente/patienthomepage/patienthomepage.component';
import { PayComponent } from './Paciente/pay/pay.component';
import { RegisterVitalsingsComponent } from './Paciente/register-vitalsings/register-vitalsings.component';
import { SeequotesComponent } from './Paciente/seequotes/seequotes.component';
import { LoginComponent } from './Pages/login/login.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { RecoverpasswordComponent } from './Pages/recoverpassword/recoverpassword.component';
import { RegisterpatientComponent } from './Pages/registerpatient/registerpatient.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './Pages/admin/admin.component';
import { PruebasComponent } from './Pages/pruebas/pruebas.component';
import {NgChartsModule} from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    MakedateComponent,
    MakeprescriptionComponent,
    MedichomepageComponent,
    RegistermedicComponent,
    SeemedichistorypatientComponent,
    SeepatientComponent,
    FormhistorypComponent,
    PatienthomepageComponent,
    PayComponent,
    RegisterVitalsingsComponent,
    SeequotesComponent,
    LoginComponent,
    HomepageComponent,
    RecoverpasswordComponent,
    RegisterpatientComponent,
    AdminComponent,
    PruebasComponent
  ],
    imports: [
      AppRoutingModule,
      RouterModule,
      BrowserModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      NgChartsModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
