import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { Observable } from 'rxjs';
import { HobbyView } from '../../../models/hobbyView';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-most-common-hobby',
  templateUrl: './most-common-hobby.component.html',
  styleUrls: ['./most-common-hobby.component.scss'],
})
export class MostCommonHobbyComponent implements OnInit {
  mostCommonHobbies$: Observable<HobbyView[]> = this.service.getMostCommonHobbies();
  number$ = this.service.getTotalHobbiesCount();
  constructor(private service: AppService) {}

  ngOnInit(): void {}

  getBarColor(index: number): string {
    const colors = ['#007bff', '#009688', '#ff5722', '#e91e63', '#4caf50'];
    return colors[index % colors.length];
  }
}
