import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImersaoAgilPageRoutingModule } from './imersao-agil-routing.module';

import { ImersaoAgilPage } from './imersao-agil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImersaoAgilPageRoutingModule
  ],
  declarations: [ImersaoAgilPage]
})
export class ImersaoAgilPageModule {}
