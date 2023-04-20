import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.css'],
})
export class BuyNowComponent  implements OnInit {

  demo: any[] = [
    {
      name: 'classical black tshirt',
      price: 1200,
      size: 'M',
      colour: 'Red',
      quantity: 1
    }
  ];

  constructor(
    private _location: Location,
    public router: Router 
  ) { }

  ngOnInit() {}

  back(){
    this._location.back();
  }

  orderPlaced(){
    this.router.navigate(['/home/order-placed'])
  }
}
