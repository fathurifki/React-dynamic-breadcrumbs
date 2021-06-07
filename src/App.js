import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes.js';
import Breadcrumbs from './Components/Breadcrumbs.js'

const App = () => {
  console.log('routes', routes);
  return (
    <Router>
      <Switch>
        {routes.map(({ path, name, Component }, key) => (
          <Route
            exact
            path={path}
            key={key}
            render={props => {
              console.log('PROPS', props)
              const crumbs = routes
                .filter(({ path }) => props.match.path.includes(path))
                .map(({ path, ...rest }) => ({
                  path: Object.keys(props.match.params).length
                    ? Object.keys(props.match.params).reduce(
                      (path, param) =>
                        path.replace(`:${param}`, props.match.params[param]),
                      path
                    ) : path,
                  ...rest
                }))


              console.log(`Generated crumbs for ${props.match.path}`);
              crumbs.map(({ name, path }) => console.log({ name, path }));

                return (
                  <div>
                  <Breadcrumbs crumbs={crumbs} />
                  <Component {...props} />
                  </div>
                )
            }}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
