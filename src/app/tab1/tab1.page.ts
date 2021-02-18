import { Component } from '@angular/core';
import {OpenWeatherMapService} from '../services/OpenWeatherMap/open-weather-map.service';
import {HttpClientModule} from '@angular/common/http';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  lat: number = 0;
  long: number = 0;
  weatherData: any = null;
  constructor(public openWeatherMapService: OpenWeatherMapService,public geolocation: Geolocation, public platform: Platform) {
    this.platform.ready().then(() => {
      this.getCurrentLocation();
    })
  }

  ngOnInit(){
    this.makeRequest();
  }

  getCurrentLocation(){
    this.geolocation.getCurrentPosition().then((position) => {
      var lat = position.coords.latitude, long = position.coords.longitude;
      this.lat = lat;
      this.long = long;
      this.getNearbyCitiesWeather();
    });
  }

  public makeRequest(){
    this.openWeatherMapService.cityNameSearch('Manaus').subscribe((res) => {
      console.log(res);
    });
  }

  public getNearbyCitiesWeather(){
    this.openWeatherMapService.nearbyCitiesSearch(this.lat.toString(),this.long.toString()).subscribe((res) => {
      this.weatherData = res;
      console.log(this.weatherData.list);
    }); 
  }

}
