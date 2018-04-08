import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseCallbackComponent } from './promise-callback.component';

describe('PromiseCallbackComponent', () => {
  let component: PromiseCallbackComponent;
  let fixture: ComponentFixture<PromiseCallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromiseCallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
