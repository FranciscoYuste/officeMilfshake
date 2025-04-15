import { TestBed } from '@angular/core/testing';

import { GaleriaDataService } from './galeria-data.service';

describe('GaleriaDataService', () => {
  let service: GaleriaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaleriaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
