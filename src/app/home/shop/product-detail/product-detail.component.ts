import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent  implements OnInit {
  amount: number = 1250;
  constructor(
    private _location: Location
  ) { }

  ngOnInit() {}

  back(){
    this._location.back();
  }
}
