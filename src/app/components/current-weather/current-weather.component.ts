import { Component } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';
import { DateService } from 'src/app/services/date.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {
  location: string = "Vancouver";

  currentWeatherObject: any = {};
  currentWeather: Weather = new Weather("", "", "", 0, 0);

  historyDates: any[] = [];
  historicWeatherObject: any = {};
  currentWeatherHistory: Weather[] = [];

  constructor(private weatherService: WeatherService, private dateService: DateService) { 
    // Get current weather
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

    // Get weather history for current day
    this.historyDates = this.dateService.getDatesInUnix();    
    this.historyDates.forEach(date => {
      this.weatherService.getWeatherHistory(date).subscribe(result => {
        this.historicWeatherObject = result;
        var date = "";
        var dayOfWeek = "";
        var conditions = this.historicWeatherObject?.current?.weather[0]?.description;
        var temperature = this.historicWeatherObject?.current?.temp;
        var wind = this.historicWeatherObject?.current?.wind_speed * 3.6;

        this.currentWeatherHistory.push(new Weather(date, dayOfWeek, conditions, temperature, wind));

        this.historicWeatherObject = {};
      })
    });
  }
}