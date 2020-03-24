import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { FormsModule } from '@angular/forms';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { CarouselComponent, SafePipe } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HueComponent } from './hue/hue.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { TwitchComponent } from './twitch/twitch.component';
import { TwitchFollowComponent } from './twitch/twitch-follow/twitch-follow.component';
import { TwitchTopGamesComponent } from './twitch/twitch-top-games/twitch-top-games.component';
import { KentekenComponent } from './kenteken/kenteken.component';
import { TrafficComponent } from './traffic/traffic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TwitchEmbedComponent } from './twitch/twitch-embed/twitch-embed.component';
import { CryptoComponent } from './crypto/crypto.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		ProjectsComponent,
		CarouselComponent,
		FooterComponent,
		SafePipe,
		HueComponent,
		YoutubeComponent,
		GoogleMapsComponent,
		TwitchComponent,
		TwitchFollowComponent,
		TwitchEmbedComponent,
		TwitchTopGamesComponent,
		KentekenComponent,
		TrafficComponent,
		CryptoComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		Ng2SearchPipeModule,
		NgxYoutubePlayerModule.forRoot(),
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyAn8mKODdRUqGWI9i5xLrheK_ua871dZVI'
		}),
		AgmDirectionModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
