import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {
  location: string = "Vancouver"
  currentWeather: any;

  constructor(private weatherService: WeatherService) { 
    this.weatherService.getCurrentWeather(this.location).subscribe(
      result => {
        this.currentWeather = result;
        console.log(this.currentWeather); 
    });
  }
}
