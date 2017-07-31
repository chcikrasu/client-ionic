import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ServiceProviderTimeAvailabilityModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-service-provider-time-availability-modal',
  templateUrl: 'service-provider-time-availability-modal.html',
})
export class ServiceProviderTimeAvailabilityModalPage {

  public serviceType: number;
  public availableFrom: Date;
  public availableTo: Date;
  public availabilityId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    if (navParams != undefined)
    {
      this.serviceType = navParams.get("serviceType");
      this.availableFrom = navParams.get("availableFrom");
      this.availableTo = navParams.get("availableTo");
      this.availabilityId = navParams.get("availabilityId");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceProviderTimeAvailabilityModalPage');
  }

  createAvailability() {
    this.viewCtrl.dismiss({ serviceType: this.serviceType, availableFrom: this.availableFrom, availableTo: this.availableTo, availabilityId: this.availabilityId });
  }

}
