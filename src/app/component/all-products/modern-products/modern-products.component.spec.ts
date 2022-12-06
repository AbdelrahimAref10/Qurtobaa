import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernProductsComponent } from './modern-products.component';

describe('ModernProductsComponent', () => {
  let component: ModernProductsComponent;
  let fixture: ComponentFixture<ModernProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModernProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModernProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
