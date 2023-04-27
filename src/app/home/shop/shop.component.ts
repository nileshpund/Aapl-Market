import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserLocation } from '../model/location';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  currentLocation: string = '';
  categoryActionSheetOptions = {
    header: 'Category',
    subHeader: 'Select category',
  };

  distanceActionSheetOptions = {
    header: 'Distance',
    subHeader: 'Select distance',
  };

  userLocation: UserLocation = new UserLocation();

  constructor(
    private router: Router,
    private userService: UserService
  ) { }
  ngOnInit() {
    this.getUserLocation();
  }

  launchLocation(){
    this.router.navigate(["/shop/location"])
  }

  getUserLocation(){
    this.userService.getUserLocation().subscribe((loc: any) =>{
        this.userLocation = loc;
    })
  }

  goToProfile(){
    this.router.navigate(["home/profile"]);
  }

  goToCart(){
    this.router.navigate(["home/cart"]);
  }
}
