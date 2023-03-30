import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.css'],
})
export class LandingPagePage implements OnInit {
  categoryActionSheetOptions = {
    header: 'Category',
    subHeader: 'Select category',
  };

  distanceActionSheetOptions = {
    header: 'Distance',
    subHeader: 'Select distance',
  };
  constructor() { }

  ngOnInit() {
  }

}
