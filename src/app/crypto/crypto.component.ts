import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Exchange } from '../structure/exchange';

const httpOptions = {
	headers: new HttpHeaders({
		'X-CoinAPI-Key': '23A44921-6CFE-44AB-90A2-30C4CB2E16DA',
		Accept: 'application/json'
	})
};

@Component({
	selector: 'app-crypto',
	templateUrl: './crypto.component.html',
	styleUrls: ['./crypto.component.sass']
})
export class CryptoComponent implements OnInit {
	exchanges: Exchange[] = [];
	clientID: '2482p7nde44mcgfd8gv8m202bbmd29';

	constructor(private http: HttpClient) {}

	ngOnInit() {
		this.http
			.get('https://rest.coinapi.io/v1/exchanges', httpOptions)
			.subscribe(data => {
				console.log(data);
				this.addExchange(data);
			});
	}

	addExchange(data) {
		for (let i = 0; i < data.length; i++) {
			const exchange = new Exchange();

			exchange.id = data[i].exchange_id;
			exchange.website = data[i].website;
			exchange.name = data[i].name;

			if (exchange.id === 'LITEBIT') {
				console.log(exchange);
				this.exchanges.push(exchange);
			}
		}
	}
}
