import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }  

  // Get required current weather data with Current Weather OpenWeatherMap API
  getCurrentWeather(location: string){
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${environment.apiKey}`);
  }

  // Get required forecast data with One Call OpenWeatherMap API
  getSevenDayForecast() {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/onecall?lat=49.2827&lon=-123.116226&exclude=exclude=minutely,hourly,alerts&units=metric&appid=${environment.apiKey}`);
  }

  // Get required historical weather data with One Call OpenWeatherMap API
  getWeatherHistory(date: string) {
    return this.httpClient.get(`http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=49.2827&lon=-123.116226&exclude=exclude=minutely,hourly&units=metric&dt=${date}&appid=${environment.apiKey}`);
  }
}
