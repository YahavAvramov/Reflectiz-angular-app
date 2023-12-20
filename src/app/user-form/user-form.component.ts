import { Component, OnInit } from '@angular/core';
import { DatePickerComponent } from '../components/date-picker/date-picker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  firstName: string = '';

  log(name: any) {
    console.log(name);
  }
}
