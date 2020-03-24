import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TwitchComponent } from '../twitch.component';
import { TwitchService } from '../../twitch.service';
import { TwitchEmbed } from '../../structure/twitchEmbed';

const httpOptions = {
	headers: new HttpHeaders({
		'Client-ID': '2482p7nde44mcgfd8gv8m202bbmd29',
		Accept: 'application/vnd.twitchtv.v5+json'
	})
};

@Component({
	selector: 'app-twitch-embed',
	templateUrl: './twitch-embed.component.html',
	styleUrls: ['./twitch-embed.component.sass']
})
export class TwitchEmbedComponent implements OnInit {
	@Input() twitch: TwitchComponent;
	embed: TwitchEmbed;

	constructor(private http: HttpClient) {}

	ngOnInit() {
		var embed = new TwitchEmbed();

		embed.width = '800px';
		embed.height = '800px';
		embed.channel = 'tmemoryy';
		this.embed = embed;
	}
}
