import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
// import { ListPage } from '../pages/listpage/listpage';
// import {HomePage} from "../pages/home/home";
// import {InstrumentsPage} from "../pages/instruments/instruments";
// import {NewsPage} from "../pages/news/news";
// import {AboutPage} from "../pages/about/about";
// import { CreditsPage } from '../pages/credits/credits';

export interface PageInterface {
    title: string;
    pageName: string;
    tabComponent?: any;
    index?: number;
}

// @IonicPage()
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

  rootPage:any = TabsPage;
  // pages: Array<{title: string, component: any}>
  //
  // pages: PageInterface[] = [
  //     { title: 'Главная', pageName: 'Tabs1Root', tabComponent: 'Tab1Page', index: 0 },
  //     { title: 'Инструменты', pageName: 'Tabs2Root', tabComponent: 'Tab2Page', index: 1 },
  //     { title: 'Новости', pageName: 'Tabs3Root', tabComponent: 'Tab3Page', index: 2 },
  //     { title: 'О нас', pageName: 'Tabs4Root', tabComponent: 'Tab4Page', index: 3 },
  //     // { title: 'Специальная', pageName: 'CreditsPage' },
  // ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: PageInterface) {
      let params = {};

      // The index is equal to the order of our tabs inside tabs.ts
      if (page.index) {
          params = { tabIndex: page.index };
      }

      // The active child nav is our Tabs Navigation
      if (this.nav.getActiveChildNav() && page.index != undefined) {
          this.nav.getActiveChildNav().select(page.index);
      } else {
          // Tabs are not active, so reset the root page
          // In this case: moving to or from SpecialPage
          this.nav.setRoot(page.pageName, params);
      }
  }

  isActive(page: PageInterface) {
      // Again the Tabs Navigation
      let childNav = this.nav.getActiveChildNav();

      if (childNav) {
          if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
              return 'primary';
          }
          return;
      }

      // Fallback needed when there is no active childnav (tabs not active)
      if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
          return 'primary';
      }
      return;
  }
}
