import { TestBed } from '@angular/core/testing';

import { WebApiFetchService } from './web-api-fetch.service';

describe('WebApiFetchService', () => {
  let service: WebApiFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebApiFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
