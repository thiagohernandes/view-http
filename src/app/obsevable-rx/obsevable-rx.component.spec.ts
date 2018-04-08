import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsevableRxComponent } from './obsevable-rx.component';

describe('ObsevableRxComponent', () => {
  let component: ObsevableRxComponent;
  let fixture: ComponentFixture<ObsevableRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsevableRxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsevableRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
