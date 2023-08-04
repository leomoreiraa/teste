import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestsFrontEndPageRoutingModule } from './tests-front-end-routing.module';

import { TestsFrontEndPage } from './tests-front-end.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestsFrontEndPageRoutingModule
  ],
  declarations: [TestsFrontEndPage]
})
export class TestsFrontEndPageModule {}
