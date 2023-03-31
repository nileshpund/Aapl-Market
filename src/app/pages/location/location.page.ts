import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MapsAPILoader } from '@agm/core';
declare var google: {
  maps: {
    places: {
      Autocomplete: any;
      PlacesService: any; AutocompleteService: new () => any; PlacesServiceStatus: { OK: any; };
    };
  };
};

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.css'],
})
export class LocationPage implements OnInit {
  location: string = '';
  placeDescription!: PlaceData;
  places: PlaceData[] = [];
  placeServiceIsReady: true = true;
  placeService: any;
  placeDetailsService: any;
  
  constructor( private navController: NavController, 
    private mapsAPILoader: MapsAPILoader
    ) {
    this.mapsAPILoader.load().then(() => {
      this.placeService = new google.maps.places.AutocompleteService();
      this.placeDetailsService = new google.maps.places.PlacesService(document.createElement('div'));
      this.placeServiceIsReady = true;    
    })
    
    
  }

  ngOnInit() {
  }

  goBack(){
    this.navController.back()
  }

  SearchPalce(event: any) { // without type info
    if (event.target.value) {
      this.getAutocompleteResults(String(event.target.value))
    } else {
      this.placeDescription.description = '';
      this.placeDescription.lat = 0;
      this.placeDescription.lng = 0;
    }
  }

  //Get the Places results from google and then resolves the details (lat and lon) for each place
  public getAutocompleteResults(partialCity: string) {
    if (this.placeServiceIsReady) {
      //Get predictions restricted to just Cities
      this.placeService.getPlacePredictions({ input: partialCity, types: ["(cities)"] }, (result: string | any[]) => {
        if (result) {
          this.places = [];
          //For each result, hit the details API to get lat and lon data
          for (let c = 0; c < result.length; c++) {
            let place = result[c];
            this.placeDetailsService.getDetails({ placeId: place.place_id }, (res: any) => {
              if (res) {
                let parse = JSON.parse(JSON.stringify(res))
                var newPlace: PlaceData = {
                  description: place.description,
                  lat: parse.geometry.location.lat,
                  lng: parse.geometry.location.lng
                }
                this.places.push(newPlace);
              }
            });

          }
        }
      });
    }
  }

  selectPlace(place: PlaceData) {
    this.placeDescription = place;
    this.location = place.description;
    this.places = [];
  }
}

interface PlaceData {
  description: string,
  lat: number,
  lng: number,
}
