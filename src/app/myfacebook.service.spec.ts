import { TestBed } from '@angular/core/testing';

import { MyfacebookService } from './myfacebook.service';

describe('MyfacebookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyfacebookService = TestBed.get(MyfacebookService);
    expect(service).toBeTruthy();
  });
});
