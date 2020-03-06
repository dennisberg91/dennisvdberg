import { Component, OnInit } from '@angular/core';
import { Road } from '../structure/road';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.sass']
})
export class TrafficComponent implements OnInit {
  roadEntries: [] = [];
  roads: [] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://www.anwb.nl/feeds/gethf')
    .subscribe((data)=>{
      this.mapRoadEntries(data);
    });
  }

  mapRoadEntries(data) {
    this.roadEntries = data.roadEntries;
    this.mapRoads(this.roadEntries);
    console.log(this.roadEntries);
  }

  mapRoads(roadEntries) {
    for (let i = 0; i < roadEntries.length; i++) {
      this.roads.push(this.roadEntries[i]);
    }
    console.log(this.roads);
  }

}
