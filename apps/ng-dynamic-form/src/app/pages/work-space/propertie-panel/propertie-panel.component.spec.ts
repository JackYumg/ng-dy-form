import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiePanelComponent } from './propertie-panel.component';

describe('PropertiePanelComponent', () => {
  let component: PropertiePanelComponent;
  let fixture: ComponentFixture<PropertiePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
