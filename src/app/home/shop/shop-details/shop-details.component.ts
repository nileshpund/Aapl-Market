import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/categories/data.service';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css'],
})
export class ShopDetailsComponent  implements OnInit {
  categories:any= [];
 showOpen:boolean=true;
  constructor(  private data: DataService) { }

  ngOnInit() {
    this.categories = this.data.getCategories();
  }

}
