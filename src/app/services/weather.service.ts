import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  // Returns Observable<any>
  getCurrentWeather(location: string){
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${environment.apiKey}`);
  }
}
