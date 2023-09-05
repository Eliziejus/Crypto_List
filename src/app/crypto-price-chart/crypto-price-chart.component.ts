import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crypto-price-chart',
  templateUrl: './crypto-price-chart.component.html',
  styleUrls: ['./crypto-price-chart.component.scss']
})
export class CryptoPriceChartComponent {
  @Input() selectedCryptoData: any; 

  single: any[] = [];

  constructor() {}

  public ngOnChanges(): void {
    this.updateChartData();
  }

  public updateChartData(): void {

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
