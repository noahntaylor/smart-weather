
export class Weather {
    date: string;
    dayOfWeek: string;    
    conditions: string;
    temperature: number;
    wind: number;    
    high?: number;
    low?: number;
    cityName?: string;
    

    constructor(date: string, dayOfWeek: string, conditions: string, temperature: number, wind: number, high?: number, low?: number, cityName?: string) {        
        this.date = date;
        this.dayOfWeek = dayOfWeek;
        this.conditions = conditions;
        this.temperature = temperature;
        this.wind = wind;  
        if (high) {
            this.high = high;
        }
        if (low) {
            this.low = low;
        }
        if (cityName) {
            this.cityName = cityName;
        }
    }
}
