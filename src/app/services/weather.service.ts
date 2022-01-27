import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }  

  // Returns Observable<any>
  getCurrentWeather(){
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=Vancouver&units=metric&appid=${environment.apiKey}`);
  }

  // Get required forecast data with one call OpenWeatherMap API
  getSevenDayForecast() {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/onecall?lat=49.2827&lon=-123.116226&exclude=exclude=minutely,hourly,alerts&units=metric&appid=${environment.apiKey}`);
  }
}
