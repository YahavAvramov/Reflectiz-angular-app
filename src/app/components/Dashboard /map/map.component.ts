import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  constructor(private service: AppService, private http: HttpClient) {}

  ngOnInit(): void {
    this.geocodeCountries();
  }
  display: any;
  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom = 4;

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
  countries: string[] = ['USA', 'Canada', 'Germany', 'Japan', 'Australia'];

  // Marker positions based on country names
  markers: google.maps.LatLngLiteral[] = [];

  geocodeCountries(): void {
    this.countries.forEach((country) => {
      this.http
        .get<any>(`https://api.opencagedata.com/geocode/v1/json?q=${country}&key=YOUR_API_KEY`)
        .subscribe(
          (result) => {
            if (result.results.length > 0) {
              const location = result.results[0].geometry;
              this.markers.push({ lat: location.lat, lng: location.lng });
            }
          },
          (error) => {
            console.error('Geocoding error:', error);
          },
        );
    });
  }
}
