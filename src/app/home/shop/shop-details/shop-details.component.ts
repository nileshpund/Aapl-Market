import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/categories/data.service';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css'],
})
export class ShopDetailsComponent  implements OnInit {
  categories:any= [];
  trendyCloths:any=[];
 showOpen:boolean=true;
  constructor(
    private data: DataService,
    private router: Router
    ) { }

  ngOnInit() {
    this.categories = this.data.getCategories();
    this.trendyCloths = this.data.getTrendycloths();
  }

  goToProductDetail(){
    this.router.navigate(['home/shop/product-details'])
  }

}
