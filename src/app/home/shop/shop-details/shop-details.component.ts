import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/categories/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css'],
})
export class ShopDetailsComponent  implements OnInit {
  categories:any= [];
  trendyCloths:any=[];
 showOpen:boolean=true;
 amount: number = 1250;


 products: any[] = [
  {
    name: 'classical black tshirt',
    price: 1200,
    link:'../../assets/women-blazzer1.jpg'
  },
  {
    name: 'classical black tshirt',
    price: 1200,
    link:'../../assets/women-blazzer2.jpg'
  },
  {
    name: 'classical black tshirt',
    price: 1200,
    link:'../../assets/women-blazzer2.jpg'
  },
  {
    name: 'classical black tshirt',
    price: 1200,
    link:'../../assets/women-blazzer1.jpg'
  },
];

offers : any[] = [
  {
    imgURL:'https://img.freepik.com/free-vector/big-diwali-sale-promotional-banner-design_1017-15833.jpg?1&w=1380&t=st=1682317762~exp=1682318362~hmac=f8e877979e9d9c553f55b376edc3b6060979e0b59951cdf76dbeb487e0a76a5a'
  },
  {
    imgURL:'https://img.freepik.com/free-vector/commercial-banner-big-sale-lettering-with-thirty-fifty-percentage-discount_24877-57620.jpg?w=1380&t=st=1682317858~exp=1682318458~hmac=212c7195395c6715b3103742f1303b0ff39a3eae3586a15093246ff06506dd42'
  },
  {
    imgURL:'https://img.freepik.com/free-vector/festa-junina-sale-banner-design_1017-18379.jpg?w=1380&t=st=1682317897~exp=1682318497~hmac=7fd66b8cfb532c827c826943095c94b01f895d790f8e0e4e66a99fb5cffabd08'
  },
]
  constructor(
    private data: DataService,
    private router: Router,
    private _location: Location
    ) { }

  ngOnInit() {
    this.categories = this.data.getCategories();
    this.trendyCloths = this.data.getTrendycloths();
  }

  goToProductDetail(){
    this.router.navigate(['home/shop/product-details'])
  }

  productdetails(parameter:any){
    let params={
'name':parameter
    }
    this.router.navigate(['home/shop/category-wise',params])
  }
   back(){
    this._location.back();
  }

}
