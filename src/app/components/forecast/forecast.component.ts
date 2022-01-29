import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
  forecast: any;
  sevenDayForecast: DailyForecast[];
  days = [0, 1, 2, 3, 4, 5, 6];  

  constructor(private weatherService: WeatherService) { 
    this.weatherService.getSevenDayForecast().subscribe(
      result => {
        this.forecast = result;
        console.log(this.forecast);
    });
    this.getSevenDayForecast();
  }

  // Something incorrect about this implementation
  getSevenDayForecast() {
    for (var i=0; i<7; i++){
      var description = this.forecast?.daily[i]?.weather[0]?.description;
      var maxTemp = this.forecast?.daily[i]?.temp?.max;
      var minTemp = this.forecast?.daily[i]?.temp?.min;
      var dailyForecast = new DailyForecast(description, maxTemp, minTemp);
      this.sevenDayForecast?.push(dailyForecast); 
    }      
  }
}

export class DailyForecast {
  constructor(public description: string, public maxTemp: number, public minTemp: number) { }
}
