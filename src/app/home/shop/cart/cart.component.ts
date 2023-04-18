import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  constructor(
    private _location: Location
  ) { }

  demo: any[] = [
    {
      name: 'classical black tshirt',
      price: 1200,
      size: 'M',
      colour: 'Red',
      quantity: 1
    },
    {
      name: 'classical black tshirt',
      price: 1200,
      size: 'M',
      colour: 'Red',
      quantity: 10,
    },
    {
      name: 'classical black tshirt',
      price: 1200,
      size: 'M',
      colour: 'Red',
      quantity: 5,
    }
  ];


  ngOnInit() { }

  back() {
    this._location.back();
  }
}
