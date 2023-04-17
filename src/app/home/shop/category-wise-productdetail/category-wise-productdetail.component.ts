import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-wise-productdetail',
  templateUrl: './category-wise-productdetail.component.html',
  styleUrls: ['./category-wise-productdetail.component.css'],
})
export class CategoryWiseProductdetailComponent  implements OnInit {
  res = this.actroute.snapshot.params["name"];
  menscategory:boolean=false;
  womenscategory:boolean=false;
  kids:boolean=false;
  constructor( private actroute: ActivatedRoute, private _location: Location,   private router: Router) { }

  ngOnInit() {
    if(this.res=='Mens'){
      this.menscategory=true;
    }else if(this.res=='Women'){
      this.womenscategory=true;
    }else if(this.res=='Kids'){
     this.kids=true;
    }else{

    }
  }
  
  back(){
    this._location.back();
  }
  goToProductDetail(){
    this.router.navigate(['home/shop/product-details'])
  }
}
