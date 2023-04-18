import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent  implements OnInit {
  amount: number = 1250;
  constructor(
    private _location: Location,
    public router: Router 
  ) { }

  ngOnInit() {}

  back(){
    this._location.back();
  }

  goToCart(){
    this.router.navigate(['home/cart']) 
  }
}
