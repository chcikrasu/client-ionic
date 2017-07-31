import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Request, RequestMethod, Headers } from "@angular/http";

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
  public mailgunUrl: string;
  public mailgunApiKey: string;
  public http: Http;

  constructor(public navCtrl: NavController, public navParams: NavParams, http: Http) {
    this.salonTitle = navParams.get("salonTitle");
    this.mailgunUrl = "sandbox4ee3b3bac2854fd793807e33ae6a6fd9.mailgun.org";
    this.mailgunApiKey = window.btoa("api:key-b532630b92cdcd80fa9b5f61e5c51b52");
    this.http = http;
  }

  ionViewDidLoad () {
    console.log('ionViewDidLoad OfferPage');
  }
  public send = function () {
    var requestHeaders = new Headers();
    requestHeaders.append("Authorization", "Basic " + this.mailgunApiKey);
    requestHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    console.log(this.mailgunApiKey);
    let requestArgs = {
      method: RequestMethod.Post,
      url: "https://api.mailgun.net/v3/" + this.mailgunUrl + "/messages",
      body: "from=test@example.com&to=" + "valeriiatol@gmail.com" + "&subject=" + "Order" + "&text=" + "test",
      headers: requestHeaders
    };

    this.http.request(new Request(requestArgs))
      .subscribe(success => {
        console.log("SUCCESS -> " + JSON.stringify(success));
      }, error => {
        console.log("ERROR -> " + JSON.stringify(error));
      });
  }

}
