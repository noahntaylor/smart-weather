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

  constructor(private dateService: DateService) {
    this.historyDates = this.dateService.getDatesInUnix();
    
    // Temporarily remove call to API ****

    // this.historyDates.forEach(date => {
    //   this.weatherService.getWeatherHistory(date).subscribe(result => {
    //     this.historicWeatherObject = result;
    //     var date = this.historicWeatherObject?.current?.dt;
    //     var dayOfWeek = new Date(date).getDay().toString();
    //     var conditions = this.historicWeatherObject?.current?.weather[0]?.description;
    //     var temperature = this.historicWeatherObject?.current?.temp;
    //     var wind = this.historicWeatherObject?.current?.wind_speed * 3.6;

    //     this.weatherHistory.push(new Weather(date, dayOfWeek, conditions, temperature, +wind.toFixed(2)));

    //     this.historicWeatherObject = {};
    //   })      
    // });

    for (var i=0; i<5; i++) {
      var unixDate = this.historyDates[i];
      var date = this.dateService.getMonthAndDay(+unixDate);    
      var dayOfWeek = this.dateService.getDayOfWeek(+unixDate);
      var conditions = "Sun and rain";
      var temperature = 2.98;
      var wind = 12.6;
      var high = 4;
      var low = 0.76;
      var cityName = "Vancouver";

      this.weatherHistory.push(new Weather(date, dayOfWeek, conditions, temperature, +wind.toFixed(2), high, low, cityName));
    }
   }

  ngOnInit(): void {
  }

}
