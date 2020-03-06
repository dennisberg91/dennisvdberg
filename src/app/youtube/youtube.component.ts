import { Component, OnInit } from '@angular/core';
import { Youtube } from '../structure/youtube';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.sass']
})
export class YoutubeComponent implements OnInit {
  player: YT.Player;
  private id: string = 'qDuKsiwS5xw';

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

  constructor() { }

  ngOnInit() {
  }

}
