import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SDGsComponent } from './sdgs.component';

describe('SDGsComponent', () => {
  let component: SDGsComponent;
  let fixture: ComponentFixture<SDGsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SDGsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SDGsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
