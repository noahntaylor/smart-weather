import { Component } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';
import { DateService } from 'src/app/services/date.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
  forecastObject: any = {};
  sevenDayForecast: Weather[] = [];  

  constructor(private dateService: DateService) { 
    // Temporarily remove call to API ****

    // this.weatherService.getSevenDayForecast().subscribe(
    //   result => {
    //     this.forecastObject = result;

    //     for (var i=0; i<7; i++) {
    //       var date = this.forecastObject?.daily[i]?.dt;
    //       var dayOfWeek = new Date(date).getDay().toString();
    //       var conditions = this.forecastObject?.daily[i]?.weather[0]?.description;
    //       var temperature = this.forecastObject?.daily[i]?.temp?.day;
    //       var wind = this.forecastObject?.daily[i]?.wind_speed * 3.6;
    //       var high = this.forecastObject?.daily[i]?.temp?.max;
    //       var low = this.forecastObject?.daily[i]?.temp?.min;

    //       this.sevenDayForecast.push(new Weather(date, dayOfWeek, conditions, temperature, +wind.toFixed(2), high, low));
    //     }
    // });

    for (var i=0; i<7; i++) {
      var unixDate = "1643588590";
      var date = this.dateService.getMonthAndDay(+unixDate); 
      var dayOfWeek = this.dateService.getDayOfWeek(+unixDate);
      var conditions = "Light snow";
      var temperature = 2.98;
      var wind = 12.6;
      var high = 4;
      var low = 0.76;
      var cityName = "Vancouver";  

      this.sevenDayForecast.push(new Weather(date, dayOfWeek, conditions, temperature, +wind.toFixed(2), high, low, cityName));
    }
  }  
}
