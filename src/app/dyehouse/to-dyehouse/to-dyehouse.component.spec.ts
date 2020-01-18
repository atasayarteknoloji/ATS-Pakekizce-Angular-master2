import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDyehouseComponent } from './to-dyehouse.component';

describe('ToDyehouseComponent', () => {
  let component: ToDyehouseComponent;
  let fixture: ComponentFixture<ToDyehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDyehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDyehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
