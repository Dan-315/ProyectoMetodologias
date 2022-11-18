import { TestBed } from '@angular/core/testing';

import { GranjaService } from './granja.service';

describe('GranjaService', () => {
  let service: GranjaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GranjaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
