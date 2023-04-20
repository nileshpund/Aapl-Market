import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css'],
})
export class OrderPlacedComponent implements OnInit {

  constructor(
    private _location: Location,

  ) { }

  ngOnInit() { 
    this.confettiShooter();
  }

  
  back(){
    this._location.back();
  }

  confettiShooter() {
    const element: any = document.getElementById('e0DQ82qcIov1');
    element.svgatorPlayer.ready(function() {
      // this refers to the player object
      const player = element ? element.svgatorPlayer : {};
      if (player.play) {
        player.play();
      }

    });
  
  }
  

}


