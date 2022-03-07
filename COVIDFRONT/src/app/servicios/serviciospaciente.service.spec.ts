import { TestBed } from '@angular/core/testing';

import { ServiciospacienteService } from './serviciospaciente.service';

describe('ServiciospacienteService', () => {
  let service: ServiciospacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciospacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
