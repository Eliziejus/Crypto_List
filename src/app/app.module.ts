import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CryptoChartComponent } from './crypto-chart/crypto-chart.component';
import { CryptoSearchComponent } from './crypto-search/crypto-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptoChartComponent,
    CryptoSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
