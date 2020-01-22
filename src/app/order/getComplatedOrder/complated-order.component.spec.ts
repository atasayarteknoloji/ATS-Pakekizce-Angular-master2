import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplatedOrderComponent } from './complated-order.component';

describe('GetComplatedOrderComponent', () => {
  let component: ComplatedOrderComponent;
  let fixture: ComponentFixture<ComplatedOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplatedOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplatedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
