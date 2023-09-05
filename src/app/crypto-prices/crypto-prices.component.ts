import { Component } from '@angular/core';
import { CryptoService } from './service/crypto.service';

@Component({
  selector: 'app-crypto-prices',
  templateUrl: './crypto-prices.component.html',
  styleUrls: ['./crypto-prices.component.scss']
})
export class CryptoPricesComponent {
  prices: any[] = [];

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.loadPrices()
   
  }

  public loadPrices(): void {
  this.cryptoService.getCryptoPrices().subscribe((data) => {
    this.prices = data;
  });
 }
}
