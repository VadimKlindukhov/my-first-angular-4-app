import { TestBed, inject } from '@angular/core/testing';

import { PtrService } from './ptr.service';

describe('PtrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PtrService]
    });
  });

  it('should be created', inject([PtrService], (service: PtrService) => {
    expect(service).toBeTruthy();
  }));
});
