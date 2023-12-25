import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private service: AppService) {}

  mostVisitedCountry$ = this.service.getCountryWithMostVisitors();
  ngOnInit(): void {}
}
