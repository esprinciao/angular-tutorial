import { TestBed } from '@angular/core/testing';

import { SleepServiceService } from './sleep-service.service';

describe('SleepServiceService', () => {
  let service: SleepServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SleepServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
