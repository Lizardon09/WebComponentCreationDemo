import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloButtonComponent } from './hello-button.component';

describe('HelloButtonComponent', () => {
  let component: HelloButtonComponent;
  let fixture: ComponentFixture<HelloButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
