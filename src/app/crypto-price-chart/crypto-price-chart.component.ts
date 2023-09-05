import { Component, Input } from '@angular/core';
import { single } from '../data';

@Component({
  selector: 'app-crypto-price-chart',
  templateUrl: './crypto-price-chart.component.html',
  styleUrls: ['./crypto-price-chart.component.scss']
})
export class CryptoPriceChartComponent {
  @Input() selectedCryptoData: any; // Input property to receive selected cryptocurrency data

  // Chart data format (you may adjust it based on your data)
  single: any[] = [];

  constructor() {}

  ngOnChanges(): void {
    this.updateChartData();
  }

  updateChartData(): void {
    // Format your data for the chart here
    if (this.selectedCryptoData) {
      this.single = [
        {
          name: 'Price (USD)',
          value: this.selectedCryptoData.prices[this.selectedCryptoData.prices.length - 1][1],
        },
      ];
    }
  }
}
