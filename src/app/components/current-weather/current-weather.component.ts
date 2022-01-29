import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

import { faRunning, faDumbbell, faBiking, faSkiingNordic, faSnowflake  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {
  location: string = "Vancouver"
  currentWeather: any;
  weather: Weather;
  // font-awesome icons
  faRunning = faRunning;
  faDumbbell = faDumbbell;
  faBiking = faBiking;
  faSkiingNordic = faSkiingNordic;
  faSnowflake = faSnowflake;

  constructor(private weatherService: WeatherService) { 
    this.weatherService.getCurrentWeather().subscribe(
      result => {
        this.currentWeather = result;
    });

    this.getWeather();
  }

  // Something incorrect about this implementation
  getWeather() {
    var cityName = this.currentWeather?.name;
    var currentConditions = this.currentWeather?.weather[0]?.description;
    var temp = this.currentWeather?.main?.temp;
    this.weather = new Weather(cityName, currentConditions, temp);
    console.log(this.weather);    
  }
}

export class Weather {
  constructor(public cityName: string, public currentConditions: string, public temperature: number){    
  }
}
