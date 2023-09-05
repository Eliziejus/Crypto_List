import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crypto-chart',
  templateUrl: './crypto-chart.component.html',
  styleUrls: ['./crypto-chart.component.scss']
})
export class CryptoChartComponent implements OnInit {
  selectedCrypto = '';
  cryptoOptions: string[] = [];
  chartData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchChartData();
  }

  fetchChartData() {
    const vsCurrency = 'usd';
    const fromTimestamp = Math.floor(Date.now() / 1000) - 24 * 3600; 
    const toTimestamp = Math.floor(Date.now() / 1000);
  
    const apiUrl = `https://api.coingecko.com/api/v3/coins/${this.selectedCrypto}/market_chart/range?vs_currency=${vsCurrency}&from=${fromTimestamp}&to=${toTimestamp}`;
  
    this.http.get(apiUrl).subscribe((data: any) => {
      this.chartData = data;
    });
  }

onCryptoChange(selectedCrypto: string) {
  this.selectedCrypto = selectedCrypto;
  this.fetchChartData();
}

}
