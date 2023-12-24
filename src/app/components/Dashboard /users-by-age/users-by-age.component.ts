import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { User } from '../../../models/user';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-users-by-age',
  templateUrl: './users-by-age.component.html',
  styleUrls: ['./users-by-age.component.scss'],
})
export class UsersByAgeComponent implements OnInit {
  users$ = this.service.getUsers();

  constructor(private service: AppService) {
    this.service.getUsersByAgeRange(18, 28).subscribe((r) => console.log(r));
  }
  usersByRange0_18$: Observable<User[]> | undefined;
  usersByRange18_30$: Observable<User[]> | undefined;
  usersByRange30_60$: Observable<User[]> | undefined;
  usersByRange60_150$: Observable<User[]> | undefined;
  ngOnInit() {
    this.usersByRange0_18$ = this.service.getUsersByAgeRange(0, 18);
    this.usersByRange18_30$ = this.service.getUsersByAgeRange(18, 30);
    this.usersByRange30_60$ = this.service.getUsersByAgeRange(30, 60);
    this.usersByRange60_150$ = this.service.getUsersByAgeRange(60, 1500);
  }

  getUsersByRange(from: number, to: number): Observable<User[]> {
    return this.service.getUsersByAgeRange(from, to);
  }
}
