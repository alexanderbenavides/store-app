import React from "react";
import { Route, Switch } from "react-router-dom";
import HeaderDefault from "../../components/Header";
import Links from "../../components/Home/Links";
class LayoutHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: props.routes,
    };
  }
  render() {
    return (
      <div>
        <HeaderDefault />
        <Links />
        <section className={`layout__home`}>
          <LoadRoutes routes={this.state.routes}></LoadRoutes>
        </section>
      </div>
    );
  }
}
function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
export default LayoutHome;
