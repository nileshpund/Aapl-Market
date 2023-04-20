import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  constructor(
    private _location: Location,
    private router: Router
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

  orderPlaced(){
    this.router.navigate(['/home/order-placed'])
  }
}
