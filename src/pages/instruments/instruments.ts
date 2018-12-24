import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DepositsCalculatorPage} from "../deposits-calculator/deposits-calculator";

@Component({
  selector: 'page-instruments',
  templateUrl: 'instruments.html'
})
export class InstrumentsPage {

    pushPage: any;

    constructor(public navCtrl: NavController) {
        this.pushPage = DepositsCalculatorPage;
    }

}
