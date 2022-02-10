import { Component } from '@angular/core';
import { WeatherLocation } from './models/weather-location.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Smart Weather';
  
  locations: WeatherLocation[] = [
    {
      city: "Victoria",
      lat: 48.43,
      long: -123.37,
    },
    {
      city: "St. John's",
      lat: 47.56,
      long: -52.71,
    },
    {
      city: "Toronto",
      lat: 43.65,
      long: -79.38,
    },
    {
      city: "Halifax",
      lat: 44.65,
      long: -63.58,
    },
    {
      city: "Quebec",
      lat: 46.81,
      long: -71.21,
    },
    {
      city: "Edmonton",
      lat: 53.55,
      long: -113.49,
    },
    {
      city: "Winnipeg",
      lat: 49.90,
      long: -97.14,
    },
    {
      city: "Whitehorse",
      lat: 60.72,
      long: -135.06,
    },
    {
      city: "Iqaluit",
      lat: 63.75,
      long: -86.52,
    },
    {
      city: "Yellowknife",
      lat: 62.45,
      long: -114.37,
    },
    {
      city: "Charlottetown",
      lat: 46.24,
      long: -63.13,
    },
    {
      city: "Fredericton",
      lat: 45.96,
      long: -66.64,
    },
    {
      city: "Regina",
      lat: 50.45,
      long: -104.62,
    },
  ];  
  location: WeatherLocation = this.locations[0];

  updateLocation(newLocation: WeatherLocation) {
    this.location = newLocation;
  }
}
