import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent {
  maxDate: Date;

  constructor(private dateAdapter: DateAdapter<Date>) {
    // max date that the user can choose is today
    this.maxDate = this.dateAdapter.today();
  }
}
