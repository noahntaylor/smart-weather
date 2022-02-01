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
  @Input("weatherHistory") weatherHistory: Weather[];

  // font-awesome icons
  faRunning = faRunning;
  faDumbbell = faDumbbell;
  faBiking = faBiking;
  faSkiingNordic = faSkiingNordic;
  faSnowshoe = faSnowflake;

  constructor() { }

  isRunningWeather() {
    return true;
  }

  isGymWeather() {
    return true;
  }

  isBikingWeather() {
    return true;
  }

  isSkiingWeather() {
    return true;
  }

  isSnowshoeWeather() {
    return true;
  }

  ngOnInit(): void {
  }
}
