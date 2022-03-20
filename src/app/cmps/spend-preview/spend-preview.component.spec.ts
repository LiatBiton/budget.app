import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendPreviewComponent } from './spend-preview.component';

describe('SpendPreviewComponent', () => {
  let component: SpendPreviewComponent;
  let fixture: ComponentFixture<SpendPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
