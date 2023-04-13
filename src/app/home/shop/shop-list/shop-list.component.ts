import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
})
export class ShopListComponent  implements OnInit {
  currentLocation: string = '';
  categoryActionSheetOptions = {
    header: 'Category',
    subHeader: 'Select category',
  };

  distanceActionSheetOptions = {
    header: 'Distance',
    subHeader: 'Select distance',
  };
  constructor(private router:Router) { }

  ngOnInit() {}
  showDetails(){
    this.router.navigate(['home/shop/shop-details'])

  }
}
