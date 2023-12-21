import { Country } from './country';

export class Location {
  country: Country;
  address: string;

  constructor(private _country: Country, private _address: string) {
    this.country = _country;
    this.address = _address;
  }
}
