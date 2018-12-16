import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { NewsPage } from '../pages/news/news';
import { HomePage } from '../pages/home/home';
import { InstrumentsPage } from '../pages/instruments/instruments';
import { TabsPage } from '../pages/tabs/tabs';
import { CreditsPage } from '../pages/credits/credits';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    InstrumentsPage,
    NewsPage,
    HomePage,
    TabsPage,
      CreditsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    InstrumentsPage,
    NewsPage,
    HomePage,
    TabsPage,
      CreditsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
