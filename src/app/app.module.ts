import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Network } from '@ionic-native/network/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [SplashScreen,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Network
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
