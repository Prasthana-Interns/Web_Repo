import { TestBed } from '@angular/core/testing';

import { RoleEmployeeInterceptor } from './role-employee.interceptor';

describe('RoleEmployeeInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RoleEmployeeInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: RoleEmployeeInterceptor = TestBed.inject(RoleEmployeeInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
