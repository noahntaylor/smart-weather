import { Component, Output, EventEmitter, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';
import { DateService } from 'src/app/services/date.service';
import { WeatherLocation } from 'src/app/models/weather-location.model';
import { WeatherService } from 'src/app/services/weather.service';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {
  @Input() weatherLocation: WeatherLocation;
  @Input() locations: WeatherLocation[];
  @Output() locationChangeEvent = new EventEmitter<WeatherLocation>();

  faTimes = faTimes;
  changeLocation: boolean = false;
  currentWeatherObject: any = {};
  currentWeather: Weather = new Weather("", "", "", 0, 0);

  constructor(private weatherService: WeatherService, private dateService: DateService) { }

  ngOnChanges() {
    this.getCurrentWeather();
  }

  getCurrentWeather() {
    this.weatherService.getCurrentWeather(this.weatherLocation.lat, this.weatherLocation.long).subscribe(
      result => {
        this.currentWeatherObject = result;
        var unixDate = this.currentWeatherObject?.dt;
        var date = this.dateService.getMonthAndDay(+unixDate);    
        var dayOfWeek = this.dateService.getDayOfWeek(+unixDate);
        var conditions = this.currentWeatherObject?.weather[0]?.description;  
        conditions = conditions.charAt(0).toUpperCase() + conditions.slice(1);      
        var temperature = this.currentWeatherObject?.main?.temp;
        var wind = this.currentWeatherObject?.wind?.speed * 3.6;
        var high = this.currentWeatherObject?.main?.temp_max;
        var low = this.currentWeatherObject?.main?.temp_min;
        var cityName = this.currentWeatherObject?.name;        
        
        this.currentWeather = new Weather(date, dayOfWeek, conditions, temperature, +wind.toFixed(2), high, low, cityName);

        this.currentWeatherObject = {};
    });
  }

  isSelected(city: WeatherLocation) {
    if (city == this.weatherLocation) {
      return true;
    } else {
      return false;
    }
  }

  updateLocation(locationSelection: HTMLSelectElement) {
    var index = locationSelection.selectedIndex;
    var newLocation = this.locations[index];
    this.locationChangeEvent.emit(newLocation);
  }

  toggleChangeLocation() {
    this.changeLocation = !this.changeLocation;
  }  
}