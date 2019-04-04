import { TestBed } from '@angular/core/testing';

import { LoctionsService } from './loctions.service';

describe('LoctionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoctionsService = TestBed.get(LoctionsService);
    expect(service).toBeTruthy();
  });
});
