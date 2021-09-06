import { TestBed } from '@angular/core/testing';

import { WarpingService } from './warping.service';

describe('WarpingService', () => {
  let service: WarpingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarpingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
