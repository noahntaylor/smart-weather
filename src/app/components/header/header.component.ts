import { Component, OnInit } from '@angular/core';

import { faBars, faBiking, faDumbbell, faRunning, faSkiingNordic, faSnowflake, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showMenu: boolean = false;
  faBars = faBars;
  faTimes = faTimes;
  faRunning = faRunning;
  faDumbbell = faDumbbell;
  faBiking = faBiking;
  faSkiingNordic = faSkiingNordic;
  faSnowshoe = faSnowflake;

  constructor() { }
}
