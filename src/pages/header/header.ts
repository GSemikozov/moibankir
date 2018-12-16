import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { NewsPage } from '../news/news';
import { InstrumentsPage } from '../instruments/instruments';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'header.html'
})
export class HeaderPage {

  tab1Root = HomePage;
  tab2Root = InstrumentsPage;
  tab3Root = NewsPage;
  tab4Root = AboutPage;

  constructor() {

  }
}
