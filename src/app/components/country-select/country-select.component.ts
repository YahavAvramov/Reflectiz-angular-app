import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Country } from '../../models/country';

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.scss'],
})
export class CountrySelectComponent {
  countriesList$ = this.service.getCountries();
  @Output() onCountryChange: EventEmitter<Country> = new EventEmitter<Country>();
  constructor(private service: AppService) {}

  handleCountryChange(event: Event): void {
    const selectedCountryValue = (event.target as HTMLSelectElement).value;
    const countryTmp = new Country(selectedCountryValue);
    this.onCountryChange.emit(countryTmp);
  }
}
