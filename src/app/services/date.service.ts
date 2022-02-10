import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }  

  getDayOfWeek(unixDate: number): string {      
    var date = new Date(unixDate *1000);  
    return  date.toLocaleString('en-us', {weekday: 'long'});
  }

  getMonthAndDay(unixDate: number): string {
    var date = new Date(unixDate *1000);
    return date.toLocaleString('en-us', {month: 'long', day:'numeric'});
  }
}
