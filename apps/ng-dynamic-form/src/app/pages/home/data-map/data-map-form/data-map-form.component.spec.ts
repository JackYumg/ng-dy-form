import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMapFormComponent } from './data-map-form.component';

describe('DataMapFormComponent', () => {
  let component: DataMapFormComponent;
  let fixture: ComponentFixture<DataMapFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMapFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMapFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
