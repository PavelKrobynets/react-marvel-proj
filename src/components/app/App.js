import AppHeader from "../appHeader/AppHeader";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import decoration from "../../resources/img/vision.png";

import { MainPage, ComicsPage } from "../pages";

export default function App() {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/comics" element={<ComicsPage />} />
          </Routes>
            <img className="bg-decoration" src={decoration} alt="vision" />
        </main>
      </div>
    </Router>
  );
}
