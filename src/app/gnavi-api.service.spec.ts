import { TestBed } from '@angular/core/testing';

import { GnaviAPIService } from './gnavi-api.service';

describe('GnaviAPIService', () => {
  let service: GnaviAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GnaviAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
