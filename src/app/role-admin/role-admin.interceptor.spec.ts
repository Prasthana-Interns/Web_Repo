import { TestBed } from '@angular/core/testing';
import { RoleAdminInterceptor} from './role-admin.interceptor'

describe('RoleAdminInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RoleAdminInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: RoleAdminInterceptor = TestBed.inject(RoleAdminInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
