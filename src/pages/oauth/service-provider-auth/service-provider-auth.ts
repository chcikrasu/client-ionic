import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProviderProfilePage } from "../../service-provider-profile/service-provider-profile";

@Component({
    selector: 'page-service-provider-auth',
    templateUrl: 'service-provider-auth.html'
})
export class ServiceProviderAuthPage {
    username:string;
    password: string;
    constructor(public nav: NavController/*, public platform: Platform, public http: Http, public authenticationApi: AuthenticationApi*/) {
    }

    login() {
        this.nav.setRoot(ServiceProviderProfilePage);
        /*this.authenticationApi.login(this.userName, this.password).subscribe(
            data => {
                //Navigate to home page              
                this.nav.setRoot(HomePage);
            }
        )*/
    }
}
