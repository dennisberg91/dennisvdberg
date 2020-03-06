import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../structure/vehicle';
import * as moment from 'moment';

@Component({
  selector: 'app-kenteken',
  templateUrl: './kenteken.component.html',
  styleUrls: ['./kenteken.component.sass']
})
export class KentekenComponent implements OnInit {
  vehicles: Vehicle[] = [];
  kenteken: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  mapCar(vehicleData) {
    for (let i = 0; i < vehicleData.length; i ++) {
      const vehicle = new Vehicle();

      vehicle.kenteken =  vehicleData[i].kenteken;
      vehicle.merk = vehicleData[i].merk;
      vehicle.voertuigsoort =  vehicleData[i].voertuigsoort;
      vehicle.catalogusprijs =  vehicleData[i].catalogusprijs;
      vehicle.handelsbenaming =  vehicleData[i].handelsbenaming;
      vehicle.vervaldatum_apk = moment(vehicleData[i].vervaldatum_apk).format('L');
      vehicle.bruto_bpm =  vehicleData[i].bruto_bpm;
      vehicle.cilinderinhoud =  vehicleData[i].cilinderinhoud;
      vehicle.datum_eerste_toelating = moment(vehicleData[i].datum_eerste_toelating).format('L');
      vehicle.datum_eerste_afgifte_nederland = moment(vehicleData[i].datum_eerste_afgifte_nederland).format('L');;
      vehicle.massa_rijklaar = vehicleData[i].massa_rijklaar;

      this.vehicles.push(vehicle);
    }
  }

  onSubmit() {
    if (this.kenteken) {
      this.http.get('https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=' + this.kenteken)
      .subscribe((vehicleData)=>{
        this.mapCar(vehicleData);
      });
    }
  }

}
