import React from "react";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import routes from "../../config/routes";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <RouteWithSubRoutes key={index} {...route} />
          ))}
        </Switch>
      </Router>
    );
  }
}
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component routes={route.routes} {...props} />}
    />
  );
}
export default App;
