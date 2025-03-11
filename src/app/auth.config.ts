import { AuthConfig } from 'angular-oauth2-oidc';

// local imports
import { environment } from '../environments/environment.development';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: window.location.origin,
  clientId: environment.GOOGLE_CLIENT_ID,
  strictDiscoveryDocumentValidation: false,
  scope: 'openid profile email',
};
