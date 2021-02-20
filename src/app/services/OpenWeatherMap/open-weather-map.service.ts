import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class OpenWeatherMapService {
  httpHeaders: any = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }

  constructor(public http: HttpClient) { }

  cityNameSearch(q:string = null, mode:string = null, units:string = null, lang: string = null): Observable<any>{
    if(q == '' || q == null){
      this.geoCoordinatesSearch();
      return;
    }
    let url = 'http://api.openweathermap.org/data/2.5/weather?';
    let params = new HttpParams();
    params = q==null? params: params.append('q',q);
    params = mode==null? params: params.append('mode',mode); 
    params = units==null? params: params.append('units',units); 
    params = lang==null? params: params.append('lang',lang); 
    params = params.append('appid',environment.appid); 

    return this.http.get(url,{
      params: params
    });
  }

  cityIdSearch(id:any): Observable<any>{
    let url = 'http://api.openweathermap.org/data/2.5/weather?';
    let params = new HttpParams();
    params = id==null? params: params.append('id',id);
    params = id==null? params: params.append('appid',environment.appid);
    return this.http.get(url,{
      params: params
    });
  }

  geoCoordinatesSearch(){

  }

  zipCodeSearch(){

  }

  citiesInBoxSearch(){

  }

  nearbyCitiesSearch(lat:string, long: string){
    let url = 'http://api.openweathermap.org/data/2.5/find?';    
    let params = new HttpParams();
    params = lat==null? params: params.append('lat',lat);
    params = long==null? params: params.append('lon',long);
    params = params.append('cnt','4');
    params = long==null? params: params.append('appid',environment.appid);
    return this.http.get(url,{
      params: params
    });
  }
}
