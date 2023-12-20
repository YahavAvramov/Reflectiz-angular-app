import { Gender } from './gender';
import { MotorType } from './motor-type';

export class User {
  fullName: string;
  gender: Gender; 
  email: string;
  birthDate: Date;
  locationDetails: string;
  listOfHobbies: Array<string>;
  favoriteColor: string;
  requiredAmountOfSeats: number; // number between 2-7
  motorType: MotorType;
  constructor(
    _fullName: string,
    _gender: Gender,
    _email: string,
    _birthDate: Date,
    _locationDetails: string,
    _listOfHobbies: Array<string>,
    _favoriteColor: string,
    _requiredAmountOfSeats: number,
    _motorType: MotorType,
  ) {
    this.fullName = _fullName;
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
