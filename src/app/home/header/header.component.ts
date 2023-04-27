import { Component, OnInit } from '@angular/core';
import { UserLocation } from '../model/location';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent  implements OnInit {
  userLocation: UserLocation = new UserLocation();
  routeURL: string = '';
  notificationCount: number = 1;
  constructor(
    private _location: Location,
    private router: Router,
    private userService: UserService
  ) { }
  ngOnInit() {
    this.getUserLocation();
    this.routeURL = this.router.url;
  }

  getUserLocation(){
    this.userService.getUserLocation().subscribe((loc: any) =>{
        this.userLocation = loc;
    })
  }

  back(){
    this._location.back();
  }

  goToCart(){
    this.router.navigate(["home/cart"]);
  }

  goToNotification(){
    this.router.navigate(["home/notification"]);
  }
}
