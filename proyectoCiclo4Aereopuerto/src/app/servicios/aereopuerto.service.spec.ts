import {TestBed} from '@angular/core/testing';
import {AereopuertoService} from './aereopuerto.service';

describe('AeropuertoService', () => {
  let service: AereopuertoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AereopuertoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
