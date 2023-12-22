import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AppService } from '../../services/app.service';
import { Observable, first } from 'rxjs';
import { Motor } from '../../models/motor';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  standalone: false,
})
export class UserFormComponent implements OnInit {
  // this info we get from the user selecting
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

  onSubmit() {
    if (this.hobbies.length == 0) this.alertService.showInfoSnackbar('Info is not correct');
    this.alertService.clearAllToastsAfterDelay();
  }
}
