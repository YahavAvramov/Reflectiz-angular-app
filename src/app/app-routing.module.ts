import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

export const routes: Routes = [
  { path: '', component: UserFormComponent },
  { path: 'login', component: DatePickerComponent },
  { path: 'contact', component: DatePickerComponent },
  { path: 'about', component: DatePickerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
