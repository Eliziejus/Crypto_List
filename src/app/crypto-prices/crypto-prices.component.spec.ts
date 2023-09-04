import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoPricesComponent } from './crypto-prices.component';

describe('CryptoPricesComponent', () => {
  let component: CryptoPricesComponent;
  let fixture: ComponentFixture<CryptoPricesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CryptoPricesComponent]
    });
    fixture = TestBed.createComponent(CryptoPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
