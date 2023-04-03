import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { UserLocation } from '../home/model/location';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public userLocation = new ReplaySubject<any>();

  constructor() { }

  getUserLocation(){
    return this.userLocation.asObservable();
  }

  public setUserLocation(location: UserLocation){
    this.userLocation.next(location);
  }
}
