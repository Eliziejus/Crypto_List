import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crypto-search',
  templateUrl: './crypto-search.component.html',
  styleUrls: ['./crypto-search.component.scss']
})
export class CryptoSearchComponent implements OnInit {
  cryptoOptions: string[] = [];
  selectedCrypto = '';

  @Output() cryptoSelected = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCryptoOptions();
  }

 
  fetchCryptoOptions() {
    this.http.get('https://api.coingecko.com/api/v3/coins/list').subscribe((data: any) => {
      this.cryptoOptions = data.map((crypto: any) => crypto.id);
    });
  }

  onSelectCrypto() {
    this.cryptoSelected.emit(this.selectedCrypto);
  }
}
