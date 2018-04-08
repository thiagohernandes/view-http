import { TestBed, inject } from '@angular/core/testing';

import { HttpObservableService } from './http-observable.service';

describe('HttpObservableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpObservableService]
    });
  });

  it('should be created', inject([HttpObservableService], (service: HttpObservableService) => {
    expect(service).toBeTruthy();
  }));
});
