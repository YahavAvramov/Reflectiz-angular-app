import { Country } from './country';

export class MostVisitedCountry {
  country: Country;
  numberOfUsers: number;
  constructor(private _country: Country, private _numberOfUsers: number) {
    this.country = _country;
    this.numberOfUsers = _numberOfUsers;
  }
}
