import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MomentModule } from 'angular2-moment';

import { DriverService } from '../services/driver-service';
import { ReportService } from '../services/report-service';
import { TransactionService } from '../services/transaction-service';
import { PlaceService } from "../services/place-service";
import { DealService } from "../services/deal-service";
import { TripService } from "../services/trip-service";
import { AuthService } from "../services/auth-service";
import { SettingService } from "../services/setting-service";

import { HomePage } from '../pages/home/home';
import { JobHistoryPage } from '../pages/job-history/job-history';
import { LoginPage } from '../pages/login/login';
import { PickUpPage } from '../pages/pick-up/pick-up';
import { RegisterPage } from '../pages/register/register';
import { WalletPage } from '../pages/wallet/wallet';
import { UserPage } from "../pages/user/user";
// end import pages

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/lang/', '.json');
}

// AF2 Settings
export const firebaseConfig = {
  // apiKey: "AIzaSyASfN_OVXgjuLbKKv6TKul-1S14joHFzww",
  // authDomain: "ionfiretaxi.firebaseapp.com",
  // databaseURL: "https://ionfiretaxi.firebaseio.com",
  // projectId: "ionfiretaxi",
  // storageBucket: "ionfiretaxi.appspot.com",
  // messagingSenderId: "493104185856"
    	apiKey: "AIzaSyBvfbO-mD6plFlXoL8B97Y98lV9TuL8KVM",
		authDomain: "shofer-d720e.firebaseapp.com",
		databaseURL: "https://shofer-d720e.firebaseio.com",
		projectId: "shofer-d720e",
		storageBucket: "shofer-d720e.appspot.com",
		messagingSenderId: "665753485944"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    JobHistoryPage,
    LoginPage,
    PickUpPage,
    RegisterPage,
    WalletPage,
    UserPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MomentModule,
    IonicModule.forRoot(MyApp, {
      mode: 'md'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    JobHistoryPage,
    LoginPage,
    PickUpPage,
    RegisterPage,
    WalletPage,
    UserPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    DriverService,
    ReportService,
    TransactionService,
    PlaceService,
    DealService,
    TripService,
    AuthService,
    SettingService,
    /* import services */
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {
}
