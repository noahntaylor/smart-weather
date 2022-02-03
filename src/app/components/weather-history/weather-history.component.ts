import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';
import { DateService } from 'src/app/services/date.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'weather-history',
  templateUrl: './weather-history.component.html',
  styleUrls: ['./weather-history.component.css']
})
export class WeatherHistoryComponent implements OnInit {
  historyDates: any[] = [];
  historicWeatherObject: any = {};
  weatherHistory: Weather[] = [];  

  constructor(private weatherService: WeatherService, private dateService: DateService) {
    this.historyDates = this.dateService.getDatesInUnix();
    
    this.historyDates.forEach(date => {
      this.weatherService.getWeatherHistory(date).subscribe(result => {
        this.historicWeatherObject = result;
        var date = "";
        var dayOfWeek = "";
        var conditions = this.historicWeatherObject?.current?.weather[0]?.description;
        var temperature = this.historicWeatherObject?.current?.temp;
        var wind = this.historicWeatherObject?.current?.wind_speed * 3.6;

        this.weatherHistory.push(new Weather(date, dayOfWeek, conditions, temperature, +wind.toFixed(2)));

        this.historicWeatherObject = {};
      })      
    });
    console.log(this.weatherHistory);
   }

  ngOnInit(): void {
  }

}
