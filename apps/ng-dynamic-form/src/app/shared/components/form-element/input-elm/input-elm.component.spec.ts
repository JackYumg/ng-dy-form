import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputElmComponent } from './input-elm.component';

describe('InputElmComponent', () => {
  let component: InputElmComponent;
  let fixture: ComponentFixture<InputElmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputElmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputElmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
