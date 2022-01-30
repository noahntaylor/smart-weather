import { Component } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {
  location: string = "Vancouver"
  currentWeatherObject: any = {};
  currentWeather: Weather = new Weather("", "", "", 0, 0);

  constructor(private weatherService: WeatherService) { 
    this.weatherService.getCurrentWeather().subscribe(
      result => {
        this.currentWeatherObject = result;
        var date = "";
        var dayOfWeek = "";
        var conditions = this.currentWeatherObject?.weather[0]?.description;        
        var temperature = this.currentWeatherObject?.main?.temp;
        var wind = this.currentWeatherObject?.wind?.speed * 3.6;
        var high = this.currentWeatherObject?.main?.temp_max;
        var low = this.currentWeatherObject?.main?.temp_min;
        var cityName = this.currentWeatherObject?.name;        
        
        this.currentWeather = new Weather(date, dayOfWeek, conditions, temperature, wind, high, low, cityName);
    });
  }
}