import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SharedModule } from '../shared/shared.module';
import { MyApp } from './app.component';
import { HotPage } from '../pages/hot/hot';
import { NewPage } from '../pages/new/new';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HotPage,
    NewPage,
    TabsControllerPage
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HotPage,
    NewPage,
    TabsControllerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
