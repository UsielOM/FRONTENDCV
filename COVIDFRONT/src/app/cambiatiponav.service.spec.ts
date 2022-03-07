import { TestBed } from '@angular/core/testing';

import { CambiatiponavService } from './cambiatiponav.service';

describe('CambiatiponavService', () => {
  let service: CambiatiponavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CambiatiponavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
