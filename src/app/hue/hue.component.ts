import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lights } from '../structure/lights';
import { Groups } from '../structure/groups';

@Component({
  selector: 'app-hue',
  templateUrl: './hue.component.html',
  styleUrls: ['./hue.component.sass']
})
export class HueComponent implements OnInit {
  username: string = "LzsRVv2PXXOxPhonKiPjLl59JvC-0drPfHUbSIk5";
  // ex: 2DNWwpZpUyMZ3zzaGM53HWA70kwxCu-YFTzBojG2
  hueApiUrl: string = `http://192.168.178.24/api/${this.username}/lights`;
  hueApiUrlGroups: string = `http://192.168.178.24/api/${this.username}/groups`;
  // ex: 192.168.0.110
  lights: Lights[] = [];
  groups: Groups[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.hueApiUrl)
    .subscribe(
      data => {
        this.mapLights(Object.values(data));
        // for early browser version and ie support
        // this.lights = Object.keys(data).map(key => data[key]);
      },
      err => { console.log('Something went wrong!'); }
    );
  }

  mapLights(lightData) {
    const lightCount = lightData.length;

    for (let i = 0; i < lightCount; i++) {
      const light = new Lights();

      light.name = lightData[i].name;

      if (lightData[i].state.on === true) {
        light.state = 'On';
      } else {
        light.state = 'Off';
      }

      this.lights.push(light);
    }
  }
}
