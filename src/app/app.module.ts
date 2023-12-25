import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './components/app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { HeadersComponent } from './components/headers/headers.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountrySelectComponent } from './components/country-select/country-select.component';
import { HttpClientModule } from '@angular/common/http';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './components/dashboard /home/home.component';
import { MostCommonHobbyComponent } from './components/dashboard /most-common-hobby/most-common-hobby.component';
import { UsersByAgeComponent } from './components/dashboard /users-by-age/users-by-age.component';
import { MapComponent } from './components/dashboard /map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    HeadersComponent,
    DatePickerComponent,
    CountrySelectComponent,
    HobbiesComponent,
    HomeComponent,
    MostCommonHobbyComponent,
    UsersByAgeComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ColorPickerModule,
    MatSnackBarModule,
    GoogleMapsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDoBkpNSOm8XGyuiyJRcGKPsfUzQ9IXyNE',
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [DatePickerComponent],
})
export class AppModule {}
