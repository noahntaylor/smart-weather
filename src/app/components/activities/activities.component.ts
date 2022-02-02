import { Component, Input, OnInit } from '@angular/core';

import { faRunning, faDumbbell, faBiking, faSkiingNordic, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { Weather } from 'src/app/models/weather.model';

@Component({
  selector: 'activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  @Input("currentWeather") currentWeather: Weather;

  // font-awesome icons
  faRunning = faRunning;
  faDumbbell = faDumbbell;
  faBiking = faBiking;
  faSkiingNordic = faSkiingNordic;
  faSnowshoe = faSnowflake;

  constructor() { }

  isRunningWeather() {
    var isRunningWeather;

    if (this.currentWeather.conditions.toUpperCase().includes("RAIN") && !this.currentWeather.conditions.toUpperCase().includes("LIGHT")) {
      isRunningWeather = false;
    }
    else if (this.currentWeather.conditions.toUpperCase().includes("SNOW")){
      isRunningWeather = false;
    }
    else {
      isRunningWeather = true;
    }

    return isRunningWeather;
  }

  isGymWeather() {
    var isGymWeather;

    if (this.currentWeather.conditions.toUpperCase().includes("SUN")){
      isGymWeather = false;
    }
    else if (!this.currentWeather.conditions.toUpperCase().includes("RAIN") && !this.currentWeather.conditions.toUpperCase().includes("SNOW")){
      isGymWeather = false;
    } else {
      isGymWeather = true;
    }

    return isGymWeather;
  }

  isBikingWeather() {
    var isBikingWeather;

    if (this.currentWeather.conditions.toUpperCase().includes("RAIN")) {
      isBikingWeather = false;
    }
    else if (this.currentWeather.conditions.toUpperCase().includes("SNOW")){
      isBikingWeather = false;
    }
    else {
      isBikingWeather = true;
    }

    return isBikingWeather;
  }

  isSkiingWeather() {
    var isSkiingWeather;

    if (!this.currentWeather.conditions.toUpperCase().includes("SNOW")){
      isSkiingWeather = false;
    }
    else if (this.currentWeather.conditions.toUpperCase().includes("RAIN")) {
      isSkiingWeather = false;
    }
    else {
      isSkiingWeather = true;
    }

    return isSkiingWeather;
  }

  isSnowshoeWeather() {
    var isSnowshoeWeather;

    if (!this.currentWeather.conditions.toUpperCase().includes("SNOW")){
      isSnowshoeWeather = false;
    }
    else if (this.currentWeather.conditions.toUpperCase().includes("RAIN")) {
      isSnowshoeWeather = false;
    }
    else {
      isSnowshoeWeather = true;
    }

    return isSnowshoeWeather;
  }

  ngOnInit(): void {
  }
}
