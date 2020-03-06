import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TwitchComponent } from '../twitch.component';
import { TwitchService } from '../../twitch.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Client-ID': '2482p7nde44mcgfd8gv8m202bbmd29',
    Accept: 'application/vnd.twitchtv.v5+json'
  })
};

@Component({
  selector: 'app-twitch-follow',
  templateUrl: './twitch-follow.component.html',
  styleUrls: ['./twitch-follow.component.sass']
})
export class TwitchFollowComponent implements OnInit {
  @Input() twitch: TwitchComponent;

  from_name: string;
  to_name: string;
  from_data: any;
  to_data: any;
  from_id: string;
  to_id: string;
  follow_data: any;
  isFollowed: string;
  counterFollow: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  getUserId(from, to) {
    this.http.get('https://api.twitch.tv/kraken/users?login=' + from, httpOptions)
    .subscribe((data)=>{
      const i = 1;
      this.from_data = data;
      this.setUserId(i);
    });
    this.http.get('https://api.twitch.tv/kraken/users?login=' + to, httpOptions)
    .subscribe((data)=>{
      const i = 2;
      this.to_data = data;
      this.setUserId(i);
    });
  }

  setUserId(i) {
    if (i !== 1) {
      this.to_id = this.to_data.users[0]._id;
      setTimeout(() => {
        this.checkIfFollowed();
      },50);
    } else {
      this.from_id = this.from_data.users[0]._id;
    }
  }

  checkIfFollowed() {
    if (this.to_id && this.from_id) {
      this.http.get('https://api.twitch.tv/helix/users/follows?from_id=' + this.from_id + '&to_id=' + this.to_id, httpOptions)
      .subscribe((data)=>{
        this.follow_data = data;
        if (this.follow_data.total === 1) {
          this.isFollowed = this.from_name + ' follows ' + this.to_name;
        } else {
          this.isFollowed = this.from_name + ' doesnt follow ' + this.to_name;
        }
      });
      this.http.get('https://api.twitch.tv/helix/users/follows?from_id=' + this.to_id + '&to_id=' + this.from_id, httpOptions)
      .subscribe((data)=>{
        this.follow_data = data;
        if (this.follow_data.total === 1) {
          this.counterFollow = this.to_name + ' follows ' + this.from_name;
        } else {
          this.counterFollow = this.to_name + ' doesnt follow ' + this.from_name;
        }
      });
    }
  }

  onSubmit() {
    if (this.from_name && this.to_name) {
      this.getUserId(this.from_name, this.to_name);
    }
  }

}
