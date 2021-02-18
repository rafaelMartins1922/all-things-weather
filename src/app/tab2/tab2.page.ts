import { Component } from '@angular/core';
import {OpenWeatherMapService} from '../services/OpenWeatherMap/open-weather-map.service';
import {Platform}  from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  weatherData: any = null;
  constructor(public openWeatherMapService: OpenWeatherMapService, public platform: Platform) {
  }

  ionViewWillEnter(){
      this.weatherData=[];
      this.getFavorites();
  }

  getFavorites(){
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    favorites.forEach(element => {
      this.openWeatherMapService.cityIdSearch(element).subscribe((res) => {
        if(!this.weatherData.includes(res)){
          console.log("pushing to weatherdata");
          this.weatherData.push(res);
        }
      });
    });
    console.log(this.weatherData);
  }
}
