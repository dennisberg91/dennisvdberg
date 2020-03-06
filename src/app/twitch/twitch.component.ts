import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Twitch } from '../structure/twitch';
import { ThrowStmt } from '@angular/compiler';
import { TwitchService } from '../twitch.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Client-ID': '2482p7nde44mcgfd8gv8m202bbmd29',
    Accept: 'application/vnd.twitchtv.v5+json'
  })
};

@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.sass']
})
export class TwitchComponent implements OnInit {
  clientID: '2482p7nde44mcgfd8gv8m202bbmd29';
  twitchNames: 'vazthink,yowonky';
  twitchUsers: Twitch[] = [];
  topStreamer: Twitch;
  highlightedStreamer: Twitch;
  twitchTab: string = 'streamers';


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://api.twitch.tv/kraken/users?login=vazthink,yowonky,cohhcarnage,kinggothalion,p4wnyhof', httpOptions)
    .subscribe((data)=>{
      this.addTwitchUser(data);
    });
  }

  setCurrentTab(tab) {
    this.twitchTab = tab;
    console.log(tab);
  }

  getOnlineState(id, i) {
    this.http.get('https://api.twitch.tv/kraken/streams/' + id, httpOptions)
    .subscribe((data)=>{
      this.checkOnlineState(data, i);
      console.log(data);
    });
  }

  findUserID(username) {
    console.log(username);
  }

  checkOnlineState(data, i) {
    const stream = data.stream;
    if (stream !== null) {
      this.twitchUsers[i].online = true;
      this.getViewers(stream, i);
    }
  }

  getViewers(stream, i) {
    this.twitchUsers[i].viewers = stream.viewers;
  }

  getHighlightedStreamer() {
    var streamer = this.twitchUsers[Math.floor(Math.random() * this.twitchUsers.length)];
    const index = this.twitchUsers.indexOf(streamer, 0);

    if (index > -1) {
      // this.twitchUsers.splice(index, 1);
      this.highlightedStreamer = streamer;
      console.log(this.highlightedStreamer);
    }
  }

  addTwitchUser(data) {
    for (let i = 0; i < data._total; i ++) {
      const twitchUser = new Twitch();

      twitchUser.id =  data.users[i]._id;
      twitchUser.display_name = data.users[i].display_name;
      twitchUser.logo =  data.users[i].logo;
      twitchUser.bio =  data.users[i].bio;
      twitchUser.stream_url = 'https://www.twitch.tv/' + data.users[i].display_name;
      twitchUser.online = false;

      this.getOnlineState(twitchUser.id, i);
      this.twitchUsers.push(twitchUser);
    }

    this.getHighlightedStreamer();
  }

}
