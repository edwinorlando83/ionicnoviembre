import { TestBed } from '@angular/core/testing';

import { ConeccionphpService } from './coneccionphp.service';

describe('ConeccionphpService', () => {
  let service: ConeccionphpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConeccionphpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
