import { TestBed } from '@angular/core/testing';

import { PublishrideService } from './publishride.service';

describe('PublishrideService', () => {
  let service: PublishrideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublishrideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
