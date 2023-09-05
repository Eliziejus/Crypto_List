import { TestBed } from '@angular/core/testing';

import { CryptoChartService } from './crypto-chart.service';

describe('CryptoChartService', () => {
  let service: CryptoChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
