import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceProviderProfilePage } from './service-provider-profile';

@NgModule({
  declarations: [
    ServiceProviderProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceProviderProfilePage),
  ],
  exports: [
    ServiceProviderProfilePage
  ]
})
export class ServiceProviderProfilePageModule {}
