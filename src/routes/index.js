import React from "react";
import { Route, Switch, Redirect } from "react-router";
import Favorites from "../pages/favorites-coupons";
import Profile from "../pages/profile";
import BussinesFavorites from "../pages/favorites-bussines";
import Home from "../pages/home";
import Login from "../pages/login";
import Category from "../pages/category";
import SingleCoupon from "../pages/single-coupon";
import Commerce from "../pages/commerce";
import NotFound from "../pages/not-found";
import OAuthRedirect from "../components/oAuthRedirect";
import ProtectedRoutes from "./protected";

const RenderRoutes = (
  <Switch>
    <Route
      exact
      path="/"
      component={props => <Home {...props} showChip={false} />}
    />
    <Route exact path="/oauth2/redirect" component={OAuthRedirect} />
    <Route exact path="/login" component={Login} />

    {/* Rutas Protegidas */}
    <ProtectedRoutes exact path="/favorites-coupons" component={Favorites} />
    <ProtectedRoutes
      exact
      path="/favorites-bussines"
      component={BussinesFavorites}
    />
    <ProtectedRoutes
      exact
      path="/categoria/:slug"
      component={props => <Category {...props} showChip={true} isCategory={true} />}
    />
    <ProtectedRoutes exact path="/profile" component={Profile} />
    <ProtectedRoutes exact path="/commerce-example" component={Commerce} />
    <ProtectedRoutes exact path="/cupon/:slug" component={ props => <SingleCoupon {...props} showChip={false} showFavorite={true} />} />

    {/* Rutas para los not found */}
    <Route exact path="/not-found" component={NotFound} />
    <Route path="*">
      <Redirect to="/not-found" />
    </Route>
  </Switch>
);

export default RenderRoutes;
