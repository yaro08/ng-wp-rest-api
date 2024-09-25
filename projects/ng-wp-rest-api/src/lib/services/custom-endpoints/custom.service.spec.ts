import { TestBed } from '@angular/core/testing';

import { WpApiCustomService } from './custom.service';

describe('ProjectsService', () => {
  let service: WpApiCustomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WpApiCustomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
