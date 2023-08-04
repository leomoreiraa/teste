import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Classroom1PageRoutingModule } from './classroom1-routing.module';

import { Classroom1Page } from './classroom1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Classroom1PageRoutingModule
  ],
  declarations: [Classroom1Page]
})
export class Classroom1PageModule {}
