import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquarerootComponent } from './squareroot.component';

describe('SquarerootComponent', () => {
  let component: SquarerootComponent;
  let fixture: ComponentFixture<SquarerootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquarerootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquarerootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
