import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent  implements OnInit {

  constructor( private _location: Location) { }

icon : string = 'clipboard-sharp';
  profileSettings:any[]=[
    {
      displayName: 'My Orders',
      name:'myOrders',
      icon:'clipboard-sharp'
    },
    {
      displayName: 'Payment',
      name:'payment',
      icon:'card'
    },
    {
      displayName: 'Favourites',
      name:'favourites',
      icon:'heart'
    },
    {
      displayName: 'Change Password',
      name:'changePassword',
      icon:'lock-closed'
    },
    {
      displayName:'Edit Profile',
      name:'editProfile',
      icon:'create-sharp'
    }
  ]

  ngOnInit() {}

  back(){
    this._location.back();
  }
}
