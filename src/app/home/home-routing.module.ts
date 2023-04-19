import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { ShopComponent } from './shop/shop.component';
import { ShopListComponent } from './shop/shop-list/shop-list.component';
import { LocationComponent } from './location/location.component';
import { ShopDetailsComponent } from './shop/shop-details/shop-details.component';
import { ProductDetailComponent } from './shop/product-detail/product-detail.component';
import { CategoryWiseProductdetailComponent } from './shop/category-wise-productdetail/category-wise-productdetail.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserComponent } from './user/user.component';

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
        path:"shop/shop-details",
        component: ShopDetailsComponent
      },
      {
        path:"location",
        component: LocationComponent
      },
      {
        path:"shop/product-details",
        component: ProductDetailComponent
      },
      {
        path:"shop/category-wise",
        component: CategoryWiseProductdetailComponent
      },
      {
        
          path:"user",
          component: UserComponent
        
      },
      {
        path:"user/userprofile",
        component: UserProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
