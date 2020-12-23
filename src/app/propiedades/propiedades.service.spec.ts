import { TestBed } from '@angular/core/testing';

import { propiedadesService } from './propiedades.service';

describe('propiedadesService', () => {
  let service: propiedadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(propiedadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
