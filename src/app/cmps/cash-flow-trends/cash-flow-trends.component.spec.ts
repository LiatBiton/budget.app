import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashFlowTrendsComponent } from './cash-flow-trends.component';

describe('CashFlowTrendsComponent', () => {
  let component: CashFlowTrendsComponent;
  let fixture: ComponentFixture<CashFlowTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashFlowTrendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashFlowTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
