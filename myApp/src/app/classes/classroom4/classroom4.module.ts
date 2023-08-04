import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Classroom4PageRoutingModule } from './classroom4-routing.module';

import { Classroom4Page } from './classroom4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Classroom4PageRoutingModule
  ],
  declarations: [Classroom4Page]
})
export class Classroom4PageModule {}
