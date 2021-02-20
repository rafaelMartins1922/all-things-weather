import { Component } from '@angular/core';
import {OpenWeatherMapService} from '../services/OpenWeatherMap/open-weather-map.service';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {Platform} from '@ionic/angular';
import {FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  searchForm: FormGroup;
  lat: number = 0;
  long: number = 0;
  weatherData: any = null;
  constructor(public openWeatherMapService: OpenWeatherMapService,public geolocation: Geolocation, public platform: Platform, public formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      search: [null]
    });
    this.platform.ready().then(() => {
      this.getCurrentLocation();
      this.checkFavorites();
    });
  }

  getCurrentLocation(){
    this.geolocation.getCurrentPosition().then((position) => {
      var lat = position.coords.latitude, long = position.coords.longitude;
      this.lat = lat;
      this.long = long;
      this.getNearbyCitiesWeather();
    });
  }

  public getNearbyCitiesWeather(){
    this.openWeatherMapService.nearbyCitiesSearch(this.lat.toString(),this.long.toString()).subscribe((res) => {
      this.weatherData = res;
      this.weatherData = this.weatherData.list;
      console.log(this.weatherData);
    }); 
  }

  public searchCityByName(form: FormGroup){
    console.log(form.value.search);
    if(form.value.search == '' || form.value.search == null){
      this.getCurrentLocation();
      return;
    }
    this.openWeatherMapService.cityNameSearch(form.value.search).subscribe((res) => {
      this.weatherData = [res];
      console.log("search by name",this.weatherData);
    });
  }

  public markCityAsFavorite(id: any){
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if(this.isInFavorites(id)){
      console.log('Já foi favoritado');
      let index = favorites.indexOf(id);
      favorites.splice(index,1);
    }else{
      console.log('Não foi favoritado ainda');
      favorites.push(id);
    }
    localStorage.setItem('favorites',JSON.stringify(favorites));
  }

  public checkFavorites(){
    let favorites = localStorage.getItem('favorites');
    if(favorites == null){
      localStorage.setItem('favorites',JSON.stringify([]))
    }
  }

  isInFavorites(id:any){
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    return favorites.includes(id);
  }
}
