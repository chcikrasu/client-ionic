import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { OfferPage } from "../pages/offer/offer";
import { OffersListPage } from "../pages/offers-list/offers-list";
import { OffersMapPage } from "../pages/offers-map/offers-map";
import { UserProfilePage } from "../pages/user-profile/user-profile";
import { ServiceProviderAuthPage } from "../pages/oauth/service-provider-auth/service-provider-auth";
import { ServiceProviderTimeAvailabilityModalPage } from "../pages/service-provider-time-availability-modal/service-provider-time-availability-modal";
import { ServiceProviderProfilePage } from "../pages/service-provider-profile/service-provider-profile";
import { OAuthModule } from '../pages/oauth/oauth.module';
import { HttpModule } from '@angular/http';

import { Config } from "../config";

//import { OAuthProvidersListPage } from '../pages/oauth/oauth-providers.list.page';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    OfferPage,
    OffersListPage,
    OffersMapPage,
    ServiceProviderAuthPage,
    ServiceProviderProfilePage,
    ServiceProviderTimeAvailabilityModalPage,
    UserProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    OAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    OfferPage,
    OffersListPage,
    OffersMapPage,
    ServiceProviderAuthPage,
    ServiceProviderProfilePage,
    ServiceProviderTimeAvailabilityModalPage,
    UserProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Config,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
