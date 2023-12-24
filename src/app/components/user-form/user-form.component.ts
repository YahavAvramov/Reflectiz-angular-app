import { Component, OnInit } from '@angular/core';

import { AppService } from '../../services/app.service';
import { Observable, first } from 'rxjs';
import { Motor } from '../../models/motor';
import { AlertService } from '../../services/alert.service';
import { Location } from '../../models/location';
import { Country } from '../../models/country';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  standalone: false,
})
export class UserFormComponent implements OnInit {
  // this info we get from the user selecting
  firstNameValue: string | undefined;
  lastNameValue: string | undefined;
  emailValue: string | undefined;
  selectedCountry: Country | undefined;
  address: string | undefined;
  dateOfBirth: Date | undefined;
  userLocation: Location | undefined;
  requiredAmountOfSeats = 5;
  maxSeats = 7;
  minSeats = 2;

  favoriteColor = '#800080';
  selectedMotor: Motor | undefined;
  hobbies: string[] = [];
  selectedGender: string | undefined;

  motors$: Observable<Array<Motor>>; // this observable return the list of the motor that the user can be choose from
  constructor(
    private service: AppService,
    private alertService: AlertService,
    private router: Router,
  ) {
    this.motors$ = this.service.getMotors();
  }
  ngOnInit() {
    // Set the default motor initially and selectedMotor to the defult
    this.motors$.pipe(first()).subscribe((motors) => {
      if (motors && motors.length > 0) {
        this.selectedMotor = motors[0];
      }
    });
  }

  updateHobbies(hobbies: string[]) {
    this.hobbies = hobbies;
  }

  onMotorSelect(event: Event) {
    this.selectedMotor = new Motor((event.target as HTMLSelectElement).value);
  }
  onSelectDate(event: Date) {
    if (event) this.dateOfBirth = event;
  }

  onCountryChange(country: Country) {
    if (Country) this.selectedCountry = country;
  }
  onSubmit() {
    if (
      this.hobbies.length > 0 &&
      this.firstNameValue &&
      this.lastNameValue &&
      this.selectedGender &&
      this.emailValue &&
      this.dateOfBirth &&
      this.selectedCountry &&
      this.address &&
      this.favoriteColor &&
      this.requiredAmountOfSeats <= this.maxSeats &&
      this.requiredAmountOfSeats >= this.minSeats &&
      this.selectedMotor
    ) {
      this.userLocation = new Location(this.selectedCountry, this.address);
      const user = new User(
        this.firstNameValue,
        this.lastNameValue,
        this.selectedGender,
        this.emailValue,
        this.dateOfBirth,
        this.userLocation,
        this.hobbies,
        this.favoriteColor,
        this.requiredAmountOfSeats,
        this.selectedMotor,
      );
      this.service.createNewUser(user).subscribe((response) => {
        this.alertService.showInfoSnackbarSuccess(
          `Thanks ${this.firstNameValue} ${this.lastNameValue} We got your info and we start search for your car!`,
        );
        // navigate to the info tab
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 2000);
      });
    } else {
      this.alertService.showInfoSnackbar('Please fill up all the fields', 'Error');
    }
  }
}
