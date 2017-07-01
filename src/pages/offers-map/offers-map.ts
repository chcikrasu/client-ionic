import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-offers-map',
  templateUrl: 'offers-map.html',
})
export class OffersMapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  public serviceProvidersPositions: Array<any>;

  constructor(public navCtrl: NavController, public geolocation: Geolocation, public navParams: NavParams) {
    this.serviceProvidersPositions = navParams.get("serviceProvidersPositions");
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.serviceProvidersPositions.map((position) => 
      {
        let googlePosition = new google.maps.LatLng(position.latitude, position.longitude);

        this.addMarker(googlePosition);
        
        return position;
      });

    }, (err) => {
      console.log(err);
    });
  }

  addMarker(position) {

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: position
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);

  }

  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }
}