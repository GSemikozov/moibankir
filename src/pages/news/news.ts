import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LocobankPage} from "../locobank/locobank";

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {

    pushPage: any;

    constructor(public navCtrl: NavController) {
        this.pushPage = LocobankPage;
    }

}
