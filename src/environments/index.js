const PRODUCTION = false;

export const APP_ROUTE = PRODUCTION
  ? "https://cuponesh.herokuapp.com/"
  : "http://localhost:3000";

export const URL_API = PRODUCTION
  ? "https://movilappws.herokuapp.com/"
  : "https://movilappws.herokuapp.com/";

export const ACCESS_TOKEN = "accessToken";
export const ACCESS_USER = "usuario";
export const DARK_MODE = "darkMode";

export const OAUTH_REDIRECT = PRODUCTION
  ? "https://cuponesh.herokuapp.com/oauth2/redirect"
  : "http://localhost:3000/oauth2/redirect";

export const FACEBOOK_PROVIDER = `${URL_API}oauth2/authorize/facebook?redirect_uri=${OAUTH_REDIRECT}`;
export const GOOGLE_PROVIDER = `${URL_API}oauth2/authorize/google?redirect_uri=${OAUTH_REDIRECT}`;
