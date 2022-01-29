import { Component, OnInit } from '@angular/core';

import { faRunning, faDumbbell, faBiking, faSkiingNordic, faSnowflake } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  // font-awesome icons
  faRunning = faRunning;
  faDumbbell = faDumbbell;
  faBiking = faBiking;
  faSkiingNordic = faSkiingNordic;
  faSnowflake = faSnowflake;

  constructor() { }

  ngOnInit(): void {
  }

}
