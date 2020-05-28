import { TestBed } from '@angular/core/testing';

import { DyIconService } from './dy-icon.service';

describe('DyIconService', () => {
  let service: DyIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DyIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
