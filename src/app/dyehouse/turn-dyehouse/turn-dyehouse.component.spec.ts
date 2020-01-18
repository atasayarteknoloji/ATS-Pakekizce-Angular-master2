import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnDyehouseComponent } from './turn-dyehouse.component';

describe('TurnDyehouseComponent', () => {
  let component: TurnDyehouseComponent;
  let fixture: ComponentFixture<TurnDyehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnDyehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnDyehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
