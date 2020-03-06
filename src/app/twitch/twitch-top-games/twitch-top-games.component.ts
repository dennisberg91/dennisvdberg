import { Component, OnInit, Input } from '@angular/core';
import { TwitchComponent } from '../twitch.component';
import { TwitchService } from '../../twitch.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from '../../structure/game';

const httpOptions = {
  headers: new HttpHeaders({
    'Client-ID': '2482p7nde44mcgfd8gv8m202bbmd29',
    Accept: 'application/vnd.twitchtv.v5+json'
  })
};

@Component({
  selector: 'app-twitch-top-games',
  templateUrl: './twitch-top-games.component.html',
  styleUrls: ['./twitch-top-games.component.sass']
})
export class TwitchTopGamesComponent implements OnInit {
  @Input() twitch: TwitchComponent;
  top20: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.twitch.tv/helix/games/top', httpOptions)
    .subscribe((games)=>{
      this.mapGameData(games);
    });
  }

  mapGameData(games) {
    for(let i = 0; i < games.data.length; i++) {
      const game = new Game();

      game.id =  games.data[i].id;
      game.name = games.data[i].name;
      game.box_art_url =  games.data[i].box_art_url;
      console.log(game);
      game.box_art_url = this.getArtUrl(game.box_art_url);
      game.game_url = this.setGameUrl(games.data[i].name);

      this.top20.push(game);
    }
  }

  setGameUrl(name) {
    name = name.replace(/ /g, '%20');
    return "https://www.twitch.tv/directory/game/" + name;
  }

  getArtUrl(url) {
    url = url.replace(/{width}/gi, '600');
    url = url.replace(/{height}/gi, '800');
    return url;
  }

}
