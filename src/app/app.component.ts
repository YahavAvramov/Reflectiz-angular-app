import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isServerRuning$ = new Observable<boolean>();
  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.isServerRuning$ = this.service.isServerRunning();
  }
}
