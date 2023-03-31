import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationPageRoutingModule } from './location-routing.module';

import { LocationPage } from './location.page';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { version } from 'process';
export const googleAPIKey = environment.googleAPIKey;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({ apiKey: googleAPIKey, libraries: ["places"] }),
    IonicModule,
    LocationPageRoutingModule,

  ],
  declarations: [LocationPage]
})
export class LocationPageModule {}
