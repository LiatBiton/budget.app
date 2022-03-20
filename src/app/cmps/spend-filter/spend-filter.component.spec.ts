import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendFilterComponent } from './spend-filter.component';

describe('SpendFilterComponent', () => {
  let component: SpendFilterComponent;
  let fixture: ComponentFixture<SpendFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
