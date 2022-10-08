import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import SigninPage from "../components/pages/signin";
import ProtectedRoute from "./protected-route";
import IndexPage from "../components/pages";
import ManualsPage from "../components/pages/manuals-page";
import NewManualPage from "../components/pages/new-manual";
import EditManualPage from "../components/pages/edit";

const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/signin" component={SigninPage} exact={true} />
        <ProtectedRoute
          isAuthenticated={true}
          redirectPath="/signin"
          path="/"
          component={IndexPage}
          exact={true}
        />
        <ProtectedRoute
          isAuthenticated={true}
          redirectPath="/signin"
          path="/manuals"
          component={ManualsPage}
          exact={true}
        />
        <ProtectedRoute
          isAuthenticated={true}
          redirectPath="/signin"
          path="/new"
          component={NewManualPage}
          exact={true}
        />
        <ProtectedRoute
          isAuthenticated={true}
          redirectPath="/signin"
          path="/edit/:id"
          component={EditManualPage}
          exact={true}
        />
        {/* <Redirect to="/not-found" /> */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
