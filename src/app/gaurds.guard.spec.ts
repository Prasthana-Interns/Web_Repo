import { TestBed } from '@angular/core/testing';

import { GaurdsGuard } from './gaurds.guard';

describe('GaurdsGuard', () => {
  let guard: GaurdsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GaurdsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
