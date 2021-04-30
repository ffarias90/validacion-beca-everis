import { TestBed } from '@angular/core/testing';

import { ListadoPersonasService } from '../app/listado-personas.service';

describe('ListadoPersonasService', () => {
  let service: ListadoPersonasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoPersonasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
