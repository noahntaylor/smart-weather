import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { WeatherLocation } from 'src/app/models/weather-location.model';
import { Weather } from 'src/app/models/weather.model';
import { DateService } from 'src/app/services/date.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
  @Input() weatherLocation: WeatherLocation;

  forecastObject: any = {};
  sevenDayForecast: Weather[] = [];  

  constructor(private weatherService: WeatherService, private dateService: DateService) {  }  

  ngOnChanges() {
    this.getSevenDayForecast();
  }

  getSevenDayForecast() {
    this.sevenDayForecast = [];

    this.weatherService.getSevenDayForecast(this.weatherLocation.lat, this.weatherLocation.long).subscribe(
      result => {
        this.forecastObject = result;

        for (var i=0; i<7; i++) {
          var unixDate = this.forecastObject?.daily[i]?.dt;
          var date = this.dateService.getMonthAndDay(+unixDate);
          var dayOfWeek = this.dateService.getDayOfWeek(+unixDate);
          var conditions = this.forecastObject?.daily[i]?.weather[0]?.description;
          conditions = conditions.charAt(0).toUpperCase() + conditions.slice(1);      
          var temperature = this.forecastObject?.daily[i]?.temp?.day;
          var wind = this.forecastObject?.daily[i]?.wind_speed * 3.6;
          var high = this.forecastObject?.daily[i]?.temp?.max;
          var low = this.forecastObject?.daily[i]?.temp?.min;

          this.sevenDayForecast.push(new Weather(date, dayOfWeek, conditions, temperature, +wind.toFixed(2), high, low));
        }

        this.forecastObject = {};
    });
  }
}
