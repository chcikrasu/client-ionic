import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceProviderTimeAvailabilityModalPage } from './service-provider-time-availability-modal';

@NgModule({
  declarations: [
    ServiceProviderTimeAvailabilityModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceProviderTimeAvailabilityModalPage),
  ],
  exports: [
    ServiceProviderTimeAvailabilityModalPage
  ]
})
export class ServiceProviderTimeAvailabilityModalPageModule {}
