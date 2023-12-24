import { Location } from './location';
import { Motor } from './motor';

export class User {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  birthDate: Date;
  locationDetails: Location;
  listOfHobbies: Array<string>;
  favoriteColor: string;
  requiredAmountOfSeats: number; // number between 2-7
  motorType: Motor;
  constructor(
    _firstName: string,
    _lastName: string,
    _gender: string,
    _email: string,
    _birthDate: Date,
    _locationDetails: Location,
    _listOfHobbies: Array<string>,
    _favoriteColor: string,
    _requiredAmountOfSeats: number,
    _motorType: Motor,
  ) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.gender = _gender;
    this.email = _email;
    this.birthDate = _birthDate;
    this.locationDetails = _locationDetails;
    this.listOfHobbies = _listOfHobbies;
    this.favoriteColor = _favoriteColor;
    this.requiredAmountOfSeats = _requiredAmountOfSeats;
    this.motorType = _motorType;
  }
}
