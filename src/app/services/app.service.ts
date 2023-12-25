import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { env } from '../env';
import { Country } from '../models/country';
import { Motor } from '../models/motor';
import { User } from '../models/user';
import { HobbyView } from '../models/hobbyView';
import { MostVisitedCountry } from '../models/mostVisitedCountry';

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

  getMostCommonHobbies(): Observable<HobbyView[]> {
    return this.http.get<User[]>(this.usersApi).pipe(
      map((users) => {
        // Flatten the array of hobbies
        const allHobbies: string[] = users.reduce<string[]>(
          (acc, user) => acc.concat(user.listOfHobbies),
          [],
        );

        // Create a map to count occurrences
        const hobbyCountMap = new Map<string, number>();
        allHobbies.forEach((hobby) => {
          const count = hobbyCountMap.get(hobby) || 0;
          hobbyCountMap.set(hobby, count + 1);
        });

        // Convert the map to an array of HobbyView objects
        const sortedHobbies = Array.from(hobbyCountMap.entries()).sort((a, b) => b[1] - a[1]);

        // Extract the top 5 hobbies with counts as HobbyView objects
        const topHobbiesWithCounts = sortedHobbies
          .slice(0, 5)
          .map((entry) => new HobbyView(entry[0], entry[1]));

        return topHobbiesWithCounts;
      }),
    );
  }
  getTotalHobbiesCount(): Observable<number> {
    return this.http.get<User[]>(this.usersApi).pipe(
      map((users) => {
        return users.reduce((count, user) => count + user.listOfHobbies.length, 0);
      }),
    );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersApi);
  }

  getUsersByAgeRange(from: number, to: number): Observable<User[]> {
    return this.getUsers().pipe(
      map((users) => users.filter((user) => this.isInAgeRange(user.birthDate, from, to))),
    );
  }

  private isInAgeRange(birthDate: Date, from: number, to: number): boolean {
    const age = this.calculateAge(birthDate);
    return age >= from && age <= to;
  }

  private calculateAge(birthDate: Date): number {
    const today = new Date();
    const birthDateCopy = new Date(birthDate);

    // Calculate the difference in years
    let age = today.getFullYear() - birthDateCopy.getFullYear();

    // Check if the birthday has occurred this year
    const isBirthdayPassed =
      today.getMonth() > birthDateCopy.getMonth() ||
      (today.getMonth() === birthDateCopy.getMonth() && today.getDate() >= birthDateCopy.getDate());

    // If birthday hasn't occurred, subtract one year
    if (!isBirthdayPassed) {
      age--;
    }

    return age;
  }

  getCountryWithMostVisitors(): Observable<MostVisitedCountry | null> {
    return this.getUsers().pipe(
      map((users: User[]) => {
        if (users.length === 0) {
          return null; // if there is no users return null
        }

        // Count the occurrences of each country
        const countryCountMap = new Map<Country, number>();
        users.forEach((user) => {
          const country = user.locationDetails?.country;
          if (country) {
            countryCountMap.set(country, (countryCountMap.get(country) || 0) + 1);
          }
        });

        // Find the country with the most occurrences
        let mostVisitedCountry: MostVisitedCountry | null = null;
        let maxCount = 0;

        countryCountMap.forEach((count, country) => {
          if (count > maxCount) {
            mostVisitedCountry = new MostVisitedCountry(country, count);
            maxCount = count;
          }
        });

        return mostVisitedCountry;
      }),
    );
  }
}
