import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-contry-select',
  templateUrl: './contry-select.component.html',
  styleUrls: ['./contry-select.component.scss'],
})
export class ContrySelectComponent implements OnInit {
  countriesList$ = this.service.getCountries();
  constructor(private service: AppService) {}

  ngOnInit(): void {}
}
