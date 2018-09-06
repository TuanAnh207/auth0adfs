interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'DSSTI5HMisctXmlqqoU5gH4WECfwv3ey',
  domain: 'louis-nguyen.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
