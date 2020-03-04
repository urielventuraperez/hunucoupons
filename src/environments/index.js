const PRODUCTION = false;

export const URL_API = PRODUCTION
  ? "localhost"
  : "https://movilappws.herokuapp.com/";

export const ACCESS_TOKEN = 'accessToken';

export const OAUTH_REDIRECT = PRODUCTION
  ? "https://cuponesh.herokuapp.com/oauth2/redirect"
  : "http://localhost:3000/oauth2/redirect";

export const FACEBOOK_PROVIDER = `${URL_API}oauth2/authorize/facebook?redirect_uri=${OAUTH_REDIRECT}`;
export const GOOGLE_PROVIDER = `${URL_API}oauth2/authorize/google?redirect_uri=${OAUTH_REDIRECT}`;
