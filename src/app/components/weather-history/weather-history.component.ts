import { Component, Input, OnInit } from '@angular/core';
import { WeatherLocation } from 'src/app/models/weather-location.model';
import { Weather } from 'src/app/models/weather.model';
import { DateService } from 'src/app/services/date.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'weather-history',
  templateUrl: './weather-history.component.html',
  styleUrls: ['./weather-history.component.css']
})
export class WeatherHistoryComponent {
  @Input() weatherLocation: WeatherLocation;

  historicWeatherObject: any = {};
  weatherHistory: Weather[] = [];  

  constructor(private weatherService: WeatherService, private dateService: DateService) { }

  ngOnChanges() {
    this.getFiveDayWeatherHistory();
  }

  getFiveDayWeatherHistory() {
    this.weatherHistory = [];

    const today: Date = new Date(Date.now());
    var previousDay: Date = new Date();

    for (var i=5; i>0; i--) {      
      previousDay.setDate(today.getDate() - i);
      var historyDate = Math.floor(previousDay.getTime() / 1000).toString();
      this.getWeatherHistory(historyDate);
    }
  }

  getWeatherHistory(historyDate: string) {
    this.weatherService.getWeatherHistory(this.weatherLocation.lat, this.weatherLocation.long, historyDate).subscribe(result => {
      this.historicWeatherObject = result;        
      var unixDate = this.historicWeatherObject?.current?.dt;
      var dateString = this.dateService.getMonthAndDay(+unixDate);
      var dayOfWeek = this.dateService.getDayOfWeek(+unixDate);
      var conditions = this.historicWeatherObject?.current?.weather[0]?.description;
      conditions = conditions.charAt(0).toUpperCase() + conditions.slice(1);      
      var temperature = this.historicWeatherObject?.current?.temp;
      var wind = this.historicWeatherObject?.current?.wind_speed * 3.6;

      this.weatherHistory.push(new Weather(dateString, dayOfWeek, conditions, temperature, +wind.toFixed(2)));

      this.historicWeatherObject = {};
    });    
  }
}
