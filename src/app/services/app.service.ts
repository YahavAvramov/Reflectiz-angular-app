import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { env } from '../env';
import { Country } from '../models/country';
import { Motor } from '../models/motor';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private countriesApi = env.COUNTRIES_API_URL;
  private motorsAPI = env.MOTORS_API;
  private usersApi = env.USERS_API;

  constructor(private http: HttpClient) {}

  isServerRunning(): Observable<boolean> {
    return this.http.get(this.motorsAPI).pipe(
      map(() => true), // If successful, server is running the function return true
      catchError(() => of(false)), // If error, server is not running the function return false
    );
  }

  // Countries functions
  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesApi);
  }

  // Motor functions
  getMotors(): Observable<Motor[]> {
    return this.http.get<Motor[]>(this.motorsAPI);
  }

  //users functions

  createNewUser(user: User): Observable<boolean> {
    return this.http.post<boolean>(this.usersApi, user);
  }
}
