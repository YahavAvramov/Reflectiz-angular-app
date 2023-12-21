import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.scss'],
})
export class CountrySelectComponent implements OnInit {
  countriesList$ = this.service.getCountries();
  constructor(private service: AppService) {}

  ngOnInit(): void {}
}
