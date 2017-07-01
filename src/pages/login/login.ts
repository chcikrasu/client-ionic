import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userName: string;
  password: string;
  constructor(public nav: NavController) {
  }

  login() {
    this.nav.push(HomePage);
    /*this.authenticationApi.login(this.userName, this.password).subscribe(
          data => {
            //Navigate to home page              
            this.nav.setRoot(HomePage);
          }
        )*/

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
