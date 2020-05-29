import { TestBed } from '@angular/core/testing';

import { AuthuuService } from './authuu.service';

describe('AuthuuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthuuService = TestBed.get(AuthuuService);
    expect(service).toBeTruthy();
  });
});
