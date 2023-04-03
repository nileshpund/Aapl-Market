import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./public/login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }


  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  // {
  //   path: 'landing-page',
  //   loadChildren: () => import('./pages/landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  // },
  // {
  //   path: 'welcome',
  //   loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  // },
  // {
  //   path: 'location',
  //   loadChildren: () => import('./pages/location/location.module').then( m => m.LocationPageModule)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./public/login/login.module').then( m => m.LoginPageModule)
  // }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
