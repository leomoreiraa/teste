import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Classroom2PageRoutingModule } from './classroom2-routing.module';

import { Classroom2Page } from './classroom2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Classroom2PageRoutingModule
  ],
  declarations: [Classroom2Page]
})
export class Classroom2PageModule {}
