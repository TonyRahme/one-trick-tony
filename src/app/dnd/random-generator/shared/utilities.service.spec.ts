import { TestBed } from '@angular/core/testing';

import { UtilitiesService } from './utilities.service';

describe('UtilitiesService', () => {
  let service: UtilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('decodeExitRegex', () => {
    describe('1 element in array of code for 3 doors', () => {
      it('should return an array of size 3', () => {
        const result = service.decodeExitRegex(['D3']);
        expect(result.length).toBe(3);
      });
    });
  })
});
