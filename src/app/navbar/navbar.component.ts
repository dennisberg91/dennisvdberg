import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  @Input() app: AppComponent;

  constructor() { }

  ngOnInit() {
  }

  setCurrentPage(value) {
    this.app.currentPage = value;
  }

}
