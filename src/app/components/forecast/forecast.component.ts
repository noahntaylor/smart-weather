import { Component } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
  forecastObject: any = {};
  sevenDayForecast: Weather[] = [];  

  constructor(private weatherService: WeatherService) { 
    this.weatherService.getSevenDayForecast().subscribe(
      result => {
        this.forecastObject = result;

        for (var i=0; i<7; i++) {
          var date = "";
          var dayOfWeek = "";
          var conditions = this.forecastObject?.daily[i]?.weather[0]?.description;
          var temperature = this.forecastObject?.daily[i]?.temp?.day;
          var wind = this.forecastObject?.daily[i]?.wind_speed * 3.6;
          var high = this.forecastObject?.daily[i]?.temp?.max;
          var low = this.forecastObject?.daily[i]?.temp?.min;

          this.sevenDayForecast.push(new Weather(date, dayOfWeek, conditions, temperature, wind, high, low));
        }
    });
  }  
}
