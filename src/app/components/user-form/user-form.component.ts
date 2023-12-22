import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AppService } from '../../services/app.service';
import { Observable, first } from 'rxjs';
import { Motor } from '../../models/motor';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertService } from '../../services/alert.service';
import { Location } from '../../models/location';
import { Country } from '../../models/country';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  standalone: false,
})
export class UserFormComponent implements OnInit {
  // this info we get from the user selecting
  firstNameValue: string | undefined;
  surnameValue: string | undefined;
  selectedGender: string | undefined;
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

  motors$: Observable<Array<Motor>>; // this observable return the list of the motor that can be choose from
  constructor(
    private service: AppService,
    private snackBar: MatSnackBar,
    private alertService: AlertService,
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

  deatilsAreValid(): boolean {
    if (
      this.hobbies.length == 0 ||
      !this.firstNameValue ||
      !this.surnameValue ||
      !this.selectedGender ||
      !this.emailValue ||
      !this.selectedCountry ||
      !this.address ||
      this.hobbies.length == 0 ||
      !this.favoriteColor ||
      this.requiredAmountOfSeats > this.maxSeats ||
      this.requiredAmountOfSeats < this.minSeats ||
      !this.selectedMotor
    ) {
      return false;
    }
    return true;
  }
  onCountryChange(country: Country) {
    if (Country) this.selectedCountry = country;
  }
  onSubmit() {
    if (!this.deatilsAreValid()) {
      this.alertService.showInfoSnackbar('Please fill up all the fields', 'Error');
    } else {
      this.alertService.showInfoSnackbarSuccess('We got your info!');
    }
  }
}
