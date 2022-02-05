import { Component } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';
import { DateService } from 'src/app/services/date.service';
import { WeatherService } from 'src/app/services/weather.service';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {
  location: string = "Vancouver";
  changeLocation: boolean = false;
  faTimes = faTimes;

  currentWeatherObject: any = {};
  currentWeather: Weather = new Weather("", "", "", 0, 0);

  historyDates: any[] = [];
  historicWeatherObject: any = {};
  currentWeatherHistory: Weather[] = [];

  constructor(private dateService: DateService) { 
    
    // Temporarily remove call to API ****
    
    // this.weatherService.getCurrentWeather(this.location).subscribe(
    //   result => {
    //     this.currentWeatherObject = result;
    //     var date = this.currentWeatherObject.dt;
    //     var dayOfWeek = new Date(this.currentWeatherObject.dt).getDay().toString();
    //     var conditions = this.currentWeatherObject?.weather[0]?.description;        
    //     var temperature = this.currentWeatherObject?.main?.temp;
    //     var wind = this.currentWeatherObject?.wind?.speed * 3.6;
    //     var high = this.currentWeatherObject?.main?.temp_max;
    //     var low = this.currentWeatherObject?.main?.temp_min;
    //     var cityName = this.currentWeatherObject?.name;        
        
    //     this.currentWeather = new Weather(date, dayOfWeek, conditions, temperature, +wind.toFixed(2), high, low, cityName);
    // });

    var unixDate = new Date(Date.now());
    var date = this.dateService.getMonthAndDay(+unixDate);    
    var dayOfWeek = this.dateService.getDayOfWeek(+unixDate);
    var conditions = "Clouds";
    var temperature = 2.98;
    var wind = 12.6;
    var high = 4;
    var low = 0.76;
    var cityName = this.location;  

    this.currentWeather = new Weather(date, dayOfWeek, conditions, temperature, +wind.toFixed(2), high, low, cityName);
  }

  toggleChangeLocation() {
    this.changeLocation = !this.changeLocation;
  }

  keepLocation(currentLocation: string) {
    this.location = currentLocation;
    this.changeLocation = !this.changeLocation;
  }
}