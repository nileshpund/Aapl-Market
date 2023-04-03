import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {}

}
