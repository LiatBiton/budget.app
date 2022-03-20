import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPreferncesComponent } from './form-prefernces.component';

describe('FormPreferncesComponent', () => {
  let component: FormPreferncesComponent;
  let fixture: ComponentFixture<FormPreferncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPreferncesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPreferncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
