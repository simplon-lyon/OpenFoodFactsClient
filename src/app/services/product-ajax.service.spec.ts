import { TestBed, inject } from '@angular/core/testing';

import { ProductAjaxService } from './product-ajax.service';

describe('ProductAjaxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductAjaxService]
    });
  });

  it('should be created', inject([ProductAjaxService], (service: ProductAjaxService) => {
    expect(service).toBeTruthy();
  }));
});
