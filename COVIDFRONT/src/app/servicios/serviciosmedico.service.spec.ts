import { TestBed } from '@angular/core/testing';

import { ServiciosmedicoService } from './serviciosmedico.service';

describe('ServiciosmedicoService', () => {
  let service: ServiciosmedicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosmedicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
