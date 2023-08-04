import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestsBackEndPageRoutingModule } from './tests-back-end-routing.module';

import { TestsBackEndPage } from './tests-back-end.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestsBackEndPageRoutingModule
  ],
  declarations: [TestsBackEndPage]
})
export class TestsBackEndPageModule {}
