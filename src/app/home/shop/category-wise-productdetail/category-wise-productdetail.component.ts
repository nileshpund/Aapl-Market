import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-wise-productdetail',
  templateUrl: './category-wise-productdetail.component.html',
  styleUrls: ['./category-wise-productdetail.component.css'],
})
export class CategoryWiseProductdetailComponent  implements OnInit {
  res = this.actroute.snapshot.params["name"];
  constructor( private actroute: ActivatedRoute, private _location: Location) { }

  ngOnInit() {
    console.log(this.res)
  }
  
  back(){
    this._location.back();
  }
}
