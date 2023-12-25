import { Component } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  constructor(private service: AppService, private http: HttpClient) {}

  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom = 3;
}
