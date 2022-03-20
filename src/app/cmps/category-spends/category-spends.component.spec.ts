import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySpendsComponent } from './category-spends.component';

describe('CategorySpendsComponent', () => {
  let component: CategorySpendsComponent;
  let fixture: ComponentFixture<CategorySpendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorySpendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySpendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
