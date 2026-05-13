import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { environment } from '../../environments/environment';
import { WeatherDetail } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly API_KEY = environment.weatherApiKey;
  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getWeather(cityName: string): Observable<WeatherDetail> {
    const url = `${this.baseUrl}/current.json?key=${this.API_KEY}&q=${encodeURIComponent(cityName)}`;

    return this.http.get<any>(url).pipe(
      map((res) => ({
        temp_c: res.current.temp_c,
        condition: res.current.condition.text,
        humidity: res.current.humidity,
      }))
    );
  }
}
