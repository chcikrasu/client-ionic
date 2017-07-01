import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OffersMapPage } from './offers-map';

@NgModule({
  declarations: [
    OffersMapPage,
  ],
  imports: [
    IonicPageModule.forChild(OffersMapPage),
  ],
  exports: [
    OffersMapPage
  ]
})
export class OffersMapPageModule {}
