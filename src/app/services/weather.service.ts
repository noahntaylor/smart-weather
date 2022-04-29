import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }  

  // Get required current weather data with Current Weather OpenWeatherMap API
  getCurrentWeather(lat: number, long: number){
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${environment.apiKey}`);
  }

  // Get required forecast data with One Call OpenWeatherMap API
  getSevenDayForecast(lat: number, long: number) {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=exclude=minutely,hourly,alerts&units=metric&appid=${environment.apiKey}`);
  }

  // Get required historical weather data with One Call OpenWeatherMap API
  getWeatherHistory(lat: number, long: number, date: string) {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${long}&exclude=exclude=minutely,hourly&units=metric&dt=${date}&appid=${environment.apiKey}`);
  }
}
