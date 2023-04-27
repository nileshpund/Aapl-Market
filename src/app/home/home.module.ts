import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ShopComponent } from './shop/shop.component';
import { ShopListComponent } from './shop/shop-list/shop-list.component';
import { LocationComponent } from './location/location.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { ShopDetailsComponent } from './shop/shop-details/shop-details.component';
import { ProductDetailComponent } from './shop/product-detail/product-detail.component';
import { CategoryWiseProductdetailComponent } from './shop/category-wise-productdetail/category-wise-productdetail.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { CartComponent } from './shop/cart/cart.component';
import { BuyNowComponent } from './shop/buy-now/buy-now.component';
import { OrderPlacedComponent } from './shop/order-placed/order-placed.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
export const googleAPIKey = environment.googleAPIKey;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({ apiKey: googleAPIKey, libraries: ["places"] }),
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    ShopComponent,
    ShopListComponent,
    LocationComponent,
    ShopDetailsComponent,
    ProductDetailComponent,
    CategoryWiseProductdetailComponent,
    UserProfileComponent,
    CartComponent,
    BuyNowComponent,
    OrderPlacedComponent,
    HeaderComponent,
    NotificationComponent
  ]
})
export class HomePageModule {}
