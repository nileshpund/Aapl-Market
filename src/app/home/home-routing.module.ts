import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ShopComponent } from './shop/shop.component';
import { ShopListComponent } from './shop/shop-list/shop-list.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path:"shop",
        component: ShopComponent
      },
      {
        path:"shop-list",
        component: ShopListComponent
      },
      {
        path:"location",
        component: LocationComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
