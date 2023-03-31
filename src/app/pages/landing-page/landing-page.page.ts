import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.css'],
})
export class LandingPagePage implements OnInit {
  currentLocation: string = '';
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
