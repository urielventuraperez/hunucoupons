const PRODUCTION = true;

export const APP_ROUTE = PRODUCTION
  ? "https://cuponesh.herokuapp.com/"
  : "http://localhost:3000";

export const WIDGET_WEATHER = PRODUCTION ? true : false;

export const URL_API = PRODUCTION
  ? "https://ws.cuponesh.com.mx/movilapp/"
  : "https://ws.cuponesh.com.mx/movilapp/";

export const ACCESS_TOKEN = "accessToken";
export const ACCESS_USER = "usuario";
export const DARK_MODE = "darkMode";

export const OAUTH_REDIRECT = PRODUCTION
  ? "https://cuponesh.herokuapp.com/oauth2/redirect"
  : "http://localhost:3000/oauth2/redirect";

export const FACEBOOK_PROVIDER = `${URL_API}oauth2/authorize/facebook?redirect_uri=${OAUTH_REDIRECT}`;
export const GOOGLE_PROVIDER = `${URL_API}oauth2/authorize/google?redirect_uri=${OAUTH_REDIRECT}`;

export const API_WEATHER = "https://api.openweathermap.org/data/2.5/";
export const ICONS_API_WEATHER = "http://openweathermap.org/img/wn/";
export const KEY_API_WEATHER = "12f70d98639af74fdd5de7e6514bccc4";
export const LAT_API_WEATHER = "21.0235197";
export const LON_API_WEATHER = "-89.8773943";
