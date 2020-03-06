import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer} from '@angular/platform-browser';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/vnd.api+json',
    Accept: 'application/vnd.api+json'
  })
};

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {
  heros: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.get_heros();
  }

  get_heros() {
    this.http.get('http://cms.dennisvdberg.nl/jsonapi/node/hero').subscribe((res)=>{
        this.heros = res;
        this.map();
    });
  }

  map() {
    this.heros = this.heros.data;
    console.log(this.heros);
  }
}
