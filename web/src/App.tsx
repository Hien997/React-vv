import * as React from 'react';
import {
  HashRouter,
  Route,
  Switch,
  RouteComponentProps,
} from 'react-router-dom';
import './App.scss';

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

// Containers
const DefaultLayout = React.lazy(() =>
  import('./components/admin/DefaultLayout')
);

const App = () => {
  return (
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route
            path="/"
            name="Home"
            render={(props: RouteComponentProps) => (
              <DefaultLayout {...props} />
            )}
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
};

export default App;
