import { TestBed, inject } from '@angular/core/testing';

import { localserviceService } from './localservice.service';

describe('Myservices\localserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [localserviceService]
    });
  });

  it('should be created', inject([localserviceService], (service: localserviceService) => {
    expect(service).toBeTruthy();
  }));
});
