import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Classroom3PageRoutingModule } from './classroom3-routing.module';

import { Classroom3Page } from './classroom3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Classroom3PageRoutingModule
  ],
  declarations: [Classroom3Page]
})
export class Classroom3PageModule {}
