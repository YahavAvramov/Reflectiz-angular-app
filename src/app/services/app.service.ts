import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from '../env';
import { Country } from '../models/country';
import { Motor } from '../models/motor';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private countriesUrl = env.COUNTRIES_API_URL; // Url for the json server countries list
  private motorsAPI = env.MOTORS_API;

  constructor(private http: HttpClient) {}

  // Countries functions
  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl);
  }

  // Motor functions
  getMotors(): Observable<Motor[]> {
    return this.http.get<Motor[]>(this.motorsAPI);
  }
}
