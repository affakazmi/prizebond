import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { SQLite } from '@ionic-native/sqlite';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StoreBondNumber } from '../pages/store-bond-number/store-bond-number';
import { MyStore } from '../pages/my-store/my-store';
import { Schedule } from '../pages/schedule/schedule';
import { Database } from '../providers/database';
import { Data } from '../providers/data';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    StoreBondNumber,
    MyStore,
    Schedule
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     HttpModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    StoreBondNumber,
    MyStore,
    Schedule
  ],
  providers: [
    StatusBar, SplashScreen, File, Transfer, SQLite, Database,Data,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
