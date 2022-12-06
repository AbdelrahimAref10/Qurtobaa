import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeProductCardComponent } from './large-product-card.component';

describe('LargeProductCardComponent', () => {
  let component: LargeProductCardComponent;
  let fixture: ComponentFixture<LargeProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeProductCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
