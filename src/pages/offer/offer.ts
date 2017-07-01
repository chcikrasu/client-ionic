import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OfferPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-offer',
  templateUrl: 'offer.html',
})
export class OfferPage {

  public salonTitle: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.salonTitle = navParams.get("salonTitle");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferPage');
  }

}
