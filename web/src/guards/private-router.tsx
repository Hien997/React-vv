import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const currentUser = { role: 'admin' };
  const { roles } = auth;

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          {!currentUser ? (
            <Redirect to="/login" />
          ) : (
            <>
              {roles && roles.indexOf(currentUser.role) === -1 ? (
                <Redirect to="/403" />
              ) : (
                <Component {...props} />
              )}
            </>
          )}
        </>
      )}
    />
  );
};
