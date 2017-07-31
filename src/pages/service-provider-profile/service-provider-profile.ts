import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Modal } from 'ionic-angular';
import { ServiceProviderAvailability } from "../../models/ServiceProviderAvailability";
import { ServiceProviderTimeAvailabilityModalPage } from "../../pages/service-provider-time-availability-modal/service-provider-time-availability-modal";

/**
 * Generated class for the ServiceProviderProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-service-provider-profile',
  templateUrl: 'service-provider-profile.html',
})
export class ServiceProviderProfilePage {

  public availabilityCards: Array<any>;
  public availabilities: Array<ServiceProviderAvailability>;
  public serviceProviderId: string;
  public availaibilitySetDate: Date;
  public isTimeSetting: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.availabilityCards = [];
    this.availabilities = [];
    this.availaibilitySetDate = new Date();
    this.isTimeSetting = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceProviderProfilePage');
  }

  addAvailabilityCard() {
    let availabilityCard = {
      date: new Date().toISOString()
    };
    this.availabilityCards.push(availabilityCard);
  }

  timeSettingSwitch() {
    this.isTimeSetting = !this.isTimeSetting;
  }

  openModal(availabilityId: string | undefined) {

    let setAvailabilityModal: Modal;

    if (availabilityId != undefined) {
      const availability = this.availabilities.find((availability) => {
        return availability.id == availabilityId;
      });

      if (availability != undefined) {
        setAvailabilityModal = this.modalCtrl.create(ServiceProviderTimeAvailabilityModalPage,
          { serviceType: availability.serviceTypeId, availableFrom: availability.from, availableTo: availability.to, availabilityId: availabilityId });
      }
    }
    else {
      setAvailabilityModal = this.modalCtrl.create(ServiceProviderTimeAvailabilityModalPage);
    }

    setAvailabilityModal.onDidDismiss(data => {

      if (data != undefined && data.serviceType != undefined && data.availableFrom != undefined && data.availableTo != undefined) {

        if (data.availabilityId == undefined) {
          this.createAvailability(data.serviceType, data.availableFrom, data.availableTo);
        }
        else {
          this.updateAvailability(data.availabilityId, data.serviceType, data.availableFrom, data.availableTo);
        }
      }
    });

    setAvailabilityModal.present();
  }

  createAvailability(serviceType: number, availableFrom: Date, availableTo: Date) {

    let availability = new ServiceProviderAvailability();

    // todo: use uuid as id
    availability.id = new Date().toString();

    availability.from = availableFrom;
    availability.to = availableTo;
    availability.serviceTypeId = serviceType;
    availability.serviceProviderId = this.serviceProviderId;

    // todo: save to db

    this.availabilities.push(availability);
  }

  updateAvailability(availabilityId: string, serviceType: number, availableFrom: Date, availableTo: Date) {
    const availability = this.availabilities.find((availability) => {
      return availability.id == availabilityId;
    });

    availability.serviceTypeId = serviceType;
    availability.from = availableFrom;
    availability.to = availableTo;
  }

}
