import { TestBed } from '@angular/core/testing';

import { SyncfusionLicenseService } from './syncfusion-license.service';

describe('SyncfusionLicenseService', () => {
  let service: SyncfusionLicenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyncfusionLicenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
