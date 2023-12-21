import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from '../env';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private countriesUrl = env.COUNTRIES_API_URL;

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl);
  }
}
