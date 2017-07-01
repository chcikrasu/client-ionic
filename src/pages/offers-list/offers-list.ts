import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OffersMapPage } from "../offers-map/offers-map";
import { OfferPage } from "../offer/offer";
import { OfferListItem } from "../../models/OfferListItem";

/**
 * Generated class for the OffersListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-offers-list',
  templateUrl: 'offers-list.html',
})
export class OffersListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.offers = new Array<OfferListItem>();

    // todo: call api to get offers

    let offer1 = new OfferListItem();
    offer1.salonTitle = "Salon Swan";
    offer1.serviceMinPrice = "200";
    offer1.address = "M. Horákové 66/103";
    offer1.latitude = 50.1115032;
    offer1.longitude = 14.3386293;

    this.offers.push(offer1);

    let offer2 = new OfferListItem();
    offer2.salonTitle = "Salon Kadeřnictví - Kosmetika";
    offer2.serviceMinPrice = "220";
    offer2.address = "Záhřebská 189/18";
    offer2.latitude = 50.1086546;
    offer2.longitude = 14.3261248;

    this.offers.push(offer2);

    let offer3 = new OfferListItem();
    offer3.salonTitle = "Pánské Kadeřnictví";
    offer3.address = "Bělehradská 660/85";
    offer3.serviceMinPrice = "190";
    offer3.latitude = 50.1108392;
    offer3.longitude = 14.3214819;

    this.offers.push(offer3);
  }

  public offers: Array<OfferListItem>;

  public pickOfferItem = function (salonTitle: string) {
    this.navCtrl.push(OfferPage,
      {
        salonTitle: salonTitle
      });
  }

  public showOffersMap = function () {

    let serviceProvidersPositions = [];

    this.offers.forEach(offer => {
      let position = {
        latitude: offer.latitude,
        longitude: offer.longitude
      };

      serviceProvidersPositions.push(position);

    });

    this.navCtrl.push(OffersMapPage, { serviceProvidersPositions: serviceProvidersPositions });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffersListPage');
  }

}
