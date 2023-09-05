import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoSearchComponent } from './crypto-search.component';

describe('CryptoSearchComponent', () => {
  let component: CryptoSearchComponent;
  let fixture: ComponentFixture<CryptoSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CryptoSearchComponent]
    });
    fixture = TestBed.createComponent(CryptoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
