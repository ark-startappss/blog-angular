import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from '../auth.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  oauthService = inject(OAuthService);
  httpClient = inject(HttpClient);

  constructor() {
    this.configure();
  }

  private configure() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initLoginFlow();
  }
  logout() {
    this.oauthService.logOut();
  }

  get identityClaims() {
    return this.oauthService.getIdentityClaims();
  }
  get accessToken() {
    return this.oauthService.getAccessToken();
  }
  get userProfile() {
    const url = 'https://www.googleapis.com/oauth2/v2/userinfo';
    return this.httpClient.get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
  }
}
