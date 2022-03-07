import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicorRoutingModule } from './medicor-routing.module';
import { MakedaterComponent } from './makedater/makedate.component';
import { MakeprescriptionrComponent } from './makeprescriptionr/makeprescription.component';
import { MedichomepagerComponent } from './medichomepager/medichomepage.component';
import { RegistermedicrComponent } from './registermedicr/registermedic.component';
import { SeemedichistorypatientrComponent } from './seemedichistorypatientr/seemedichistorypatientr.component';
import { SeepatientrComponent } from './seepatientr/seepatientr.component';


@NgModule({
  declarations: [
    MakedaterComponent,
    MakeprescriptionrComponent,
    MedichomepagerComponent,
    RegistermedicrComponent,
    SeemedichistorypatientrComponent,
    SeepatientrComponent
  ],
  exports:[
    MakedaterComponent,
    MakeprescriptionrComponent,
    MedichomepagerComponent,
    RegistermedicrComponent,
    SeemedichistorypatientrComponent,
    SeepatientrComponent
  ],
  imports: [
    CommonModule,
    MedicorRoutingModule
  ]
})
export class MedicorModule { }
