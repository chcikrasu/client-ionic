import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OffersListPage } from './offers-list';

@NgModule({
  declarations: [
    OffersListPage,
  ],
  imports: [
    IonicPageModule.forChild(OffersListPage),
  ],
  exports: [
    OffersListPage
  ]
})
export class OffersListPageModule {}
