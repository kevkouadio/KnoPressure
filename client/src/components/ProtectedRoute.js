import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useAuth } from "../utils/auth";

function ProtectedRoute({ component: Component, ...rest }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  // Paths that should be accessible only if logged in
  const protectedPaths = ["/home", "/chart", "/tips", "/about"];
  
  // Paths that are public and do not require login
  const publicPaths = ["/login", "/signup", "/forgot-password", "/reset-password"];

  // Redirect if the path is protected and the user is not logged in
  if (!isLoggedIn && protectedPaths.includes(location.pathname)) {
    return <Redirect to="/" />;
  }

  // Allow access to the route if the user is logged in or if the path is public
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn || publicPaths.includes(location.pathname) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

export default ProtectedRoute;
