import AppHeader from "../appHeader/AppHeader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import decoration from "../../resources/img/vision.png";

import { MainPage, ComicsPage, Page404, SingleComicPage } from "../pages";

export default function App() {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/comics" element={<ComicsPage />} />
            <Route path="/comics/:comicId" element={<SingleComicPage />} />
            <Route path="*" element={<Page404 />}/>
          </Routes>
          <img className="bg-decoration" src={decoration} alt="vision" />
        </main>
      </div>
    </Router>
  );
}
