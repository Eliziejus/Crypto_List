import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000';

  public getCryptoPrices():Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/prices`);
  }

  public getCryptoPrice(symbol: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/prices/${symbol}`);
  }
}
