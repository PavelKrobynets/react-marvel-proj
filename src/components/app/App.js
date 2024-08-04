import AppHeader from "../appHeader/AppHeader";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import decoration from "../../resources/img/vision.png";

import { MainPage, ComicsPage } from "../pages";

export default function App() {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>

            <Route exact path="/comics">
              <ComicsPage />
            </Route>
            <img className="bg-decoration" src={decoration} alt="vision" />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
