import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Marker } from '../structure/marker';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/vnd.api+json',
    Accept: 'application/vnd.api+json'
  })
};
@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.sass']
})
export class GoogleMapsComponent implements OnInit {
  lat: number = 52.040169;
  lng: number = 5.664859;
  zoom: number = 15;
  markers: Marker[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.get_markers();
  }

  get_markers() {
    this.http.get('http://cms.dennisvdberg.nl/jsonapi/node/location')
    .subscribe((markersData)=>{
        this.mapMarkers(markersData);
    });
  }

  mapMarkers(markersData) {
    const markerCount = Object.keys(markersData.data).length;
    for (let i = 0; i < markerCount; i++) {
      this.http.get('http://cms.dennisvdberg.nl/jsonapi/node/location/' + markersData.data[i].id)
      .subscribe((data)=>{
        this.mapProject(markersData.data[i].attributes);
      });
    }
  }

  mapProject(markersData) {
    const marker = new Marker();

    marker.title = markersData.title;
    marker.body = markersData.body.value;
    marker.lat = markersData.field_location.lat;
    marker.lng = markersData.field_location.lng;

    this.markers.push(marker);
  }
}
