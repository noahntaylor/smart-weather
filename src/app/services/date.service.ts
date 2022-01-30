import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  getDatesInUnix() {
    const today = Date.now(); 

    var previousDays: any[] = [];
    var indexDay = new Date(today);

    for (var i=0; i<5; i++) {
      var previousDay = new Date(indexDay);
      previousDay.setDate(previousDay.getDate() - 1);      
      var previousDayUnix = Math.floor(previousDay.getTime() / 1000);
      
      previousDays.push(previousDayUnix);

      indexDay = previousDay;
    }

    return previousDays;
  }
}
