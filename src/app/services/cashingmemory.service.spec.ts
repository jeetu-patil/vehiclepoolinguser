import { TestBed } from '@angular/core/testing';

import { CashingmemoryService } from './cashingmemory.service';

describe('CashingmemoryService', () => {
  let service: CashingmemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashingmemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
