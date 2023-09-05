import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoChartComponent } from './crypto-chart.component';

describe('CryptoChartComponent', () => {
  let component: CryptoChartComponent;
  let fixture: ComponentFixture<CryptoChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CryptoChartComponent]
    });
    fixture = TestBed.createComponent(CryptoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
