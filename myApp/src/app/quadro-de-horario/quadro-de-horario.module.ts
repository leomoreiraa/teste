import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuadroDeHorarioPageRoutingModule } from './quadro-de-horario-routing.module';

import { QuadroDeHorarioPage } from './quadro-de-horario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuadroDeHorarioPageRoutingModule
  ],
  declarations: [QuadroDeHorarioPage]
})
export class QuadroDeHorarioPageModule {}
