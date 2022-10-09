import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import SigninPage from "../components/pages/signin";
import ProtectedRoute from "./protected-route";
import IndexPage from "../components/pages";
import ManualsPage from "../components/pages/manuals-page";
import NewManualPage from "../components/pages/new-manual";
import EditManualPage from "../components/pages/edit";
import { UserContext } from "../context/auth-context";
import { useContext } from "react";

const history = createBrowserHistory();

const AppRouter = () => {
  const { user } = useContext(UserContext);
  return (
    <Router history={history}>
      <Switch>
        <Route path="/signin" component={SigninPage} exact={true} />
        <ProtectedRoute
          isAuthenticated={user.access}
          redirectPath="/signin"
          path="/"
          component={IndexPage}
          exact={true}
        />
        <ProtectedRoute
          isAuthenticated={user.access}
          redirectPath="/signin"
          path="/manuals"
          component={ManualsPage}
          exact={true}
        />
        <ProtectedRoute
          isAuthenticated={user.access}
          redirectPath="/signin"
          path="/new"
          component={NewManualPage}
          exact={true}
        />
        <ProtectedRoute
          isAuthenticated={user.access}
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
