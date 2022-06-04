import { AuthConfig } from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
  issuer: "http://keycloak:8080/realms/microservices-realm",
  redirectUri: window.location.origin,
  clientId: "spring-cloud-client-pkce",
  responseType: "code",
  strictDiscoveryDocumentValidation: true,
  scope: "openid profile email offline_access",
  requireHttps: false,
};
