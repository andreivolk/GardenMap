import { TestBed, inject } from '@angular/core/testing';

import { Auth } from './auth0.service';

describe('Auth0Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Auth]
    });
  });

  it('should ...', inject([Auth], (service: Auth) => {
    expect(service).toBeTruthy();
  }));
});
