import { TestBed, inject } from '@angular/core/testing';

import { SpotifyTokenService } from './spotify-token.service';

describe('SpotifyTokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotifyTokenService]
    });
  });

  it('should be created', inject([SpotifyTokenService], (service: SpotifyTokenService) => {
    expect(service).toBeTruthy();
  }));
});
