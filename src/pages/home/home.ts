import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CreditsPage} from "../credits/credits";
import {ExchangePage} from "../exchange/exchange";
import {PaymentsPage} from "../payments/payments";
import {BankcardsPage} from "../bankcards/bankcards";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // Button: any;
    pushPage: any;

  constructor(public navCtrl: NavController) {
      // this.pushPage = CreditsPage;
  }

  // Button(){
  //     this.navController.setRoot(YOURPAGE);
  // }
    public gotoCredits(){
        this.navCtrl.push(CreditsPage);
    }

    public gotoExchange(){
        this.navCtrl.push(ExchangePage);
    }

    public gotoPayments(){
        this.navCtrl.push(PaymentsPage);
    }

    public gotoBankcards(){
        this.navCtrl.push(BankcardsPage);
    }

}
