import { TestBed } from '@angular/core/testing';

import { CustomEndpointService } from './custom.service';

describe('ProjectsService', () => {
  let service: CustomEndpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomEndpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
