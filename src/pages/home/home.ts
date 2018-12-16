import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CreditsPage} from "../credits/credits";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // Button: any;
    pushPage: any;

  constructor(public navCtrl: NavController) {
      this.pushPage = CreditsPage;
  }

  // Button(){
  //     this.navController.setRoot(YOURPAGE);
  // }

}
