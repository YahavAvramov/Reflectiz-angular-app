import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent {
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date> | undefined;
  @ViewChild('picker')
  picker?: MatDatepicker<Date>;
}
