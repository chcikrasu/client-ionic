import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OffersListPage } from "../offers-list/offers-list";
//import { DatePicker } from '@ionic-native/date-picker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public myDate: string;
  public serviceType: number = -1;

  constructor(public navCtrl: NavController) {
    let currentDate = new Date();
    currentDate.setHours(currentDate.getHours() + 1);
    this.myDate = currentDate.toISOString();
  }

  public searchClickHandler = function () {
    this.navCtrl.push(OffersListPage);
    //alert(this.myDate);
   // alert(this.serviceType);
  }

}
