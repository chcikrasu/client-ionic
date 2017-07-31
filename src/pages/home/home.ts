import { Component, ViewChild } from '@angular/core';
import { NavController, Select } from 'ionic-angular';
import { OffersListPage } from "../offers-list/offers-list";
import { ServiceType } from "../../models/ServiceType";
//import { DatePicker } from '@ionic-native/date-picker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public myDate: string;
  public serviceParentType: number;
  public serviceType: number;

  @ViewChild('selectParentType') selectParentType: Select;
  @ViewChild('selectServiceType') selectServiceType: Select;

  public parentServiceTypes: Array<ServiceType>;
  public childServiceTypes: Array<ServiceType>;

  public serviceTypes: Array<ServiceType> =
  [
    {
      id: "1",
      name: "Manikura",
      parentServiceTypeId: null,
      defaultDuration: 60
    },
    {
      id: "2",
      name: "Pedikura",
      parentServiceTypeId: null,
      defaultDuration: 80
    },
    {
      id: "3",
      name: "Kadeřnictví",
      parentServiceTypeId: null,
      defaultDuration: 60
    },
    {
      id: "4",
      name: "Masáž",
      parentServiceTypeId: null,
      defaultDuration: 60
    },
    {
      id: "5",
      name: "Epilace",
      parentServiceTypeId: null,
      defaultDuration: 60
    }
    ,
    {
      id: "6",
      name: "Kosmetika",
      parentServiceTypeId: null,
      defaultDuration: 60
    }
    ,
    {
      id: "7",
      name: "Manikura",
      parentServiceTypeId: "1",
      defaultDuration: 30
    }
    ,
    {
      id: "8",
      name: "Gel lak",
      parentServiceTypeId: "1",
      defaultDuration: 30
    }
    ,
    {
      id: "9",
      name: "Odstranění gelových nehtů",
      parentServiceTypeId: "1",
      defaultDuration: 15
    }
    ,
    {
      id: "10",
      name: "Dámský střih",
      parentServiceTypeId: "3",
      defaultDuration: 60
    },
    {
      id: "11",
      name: "Panský střih",
      parentServiceTypeId: "3",
      defaultDuration: 40
    }
  ]

  constructor(public navCtrl: NavController) {
    let currentDate = new Date();
    currentDate.setHours(currentDate.getHours() + 1);
    this.myDate = currentDate.toISOString();

    // preset parent service types
    this.parentServiceTypes = this.serviceTypes.filter((type) => {
      return type.parentServiceTypeId == null
    });

    this.childServiceTypes = [];
  }

  public selectParent = function ($event, serviceParentType) {
    this.childServiceTypes = this.serviceTypes.filter((type) => {
      return type.parentServiceTypeId == serviceParentType;
    });
    setTimeout(() => { this.selectServiceType.open(); }, 500);
  }  

  public searchClickHandler = function () {
    this.navCtrl.push(OffersListPage);    
  }

}
