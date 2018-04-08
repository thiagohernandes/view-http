import { TestBed, inject } from '@angular/core/testing';

import { HttpPromiseService } from './http-promise.service';

describe('HttpPromiseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpPromiseService]
    });
  });

  it('should be created', inject([HttpPromiseService], (service: HttpPromiseService) => {
    expect(service).toBeTruthy();
  }));
});
