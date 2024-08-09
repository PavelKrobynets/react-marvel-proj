import AppHeader from "../appHeader/AppHeader";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import decoration from "../../resources/img/vision.png";
const Page404 = lazy(() => import("../pages/404"));
const MainPage = lazy(() => import("../pages/MainPage"));
const ComicsPage = lazy(() => import("../pages/ComicsPage"));
const SingleComicPage = lazy(() => import("../pages/SingleComicPage"));
const SingleCharPage = lazy(() => import("../pages/SingleCharPage"));

export default function App() {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Suspense fallback={<span>Loading...</span>}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/comics" element={<ComicsPage />} />
              <Route path="/comics/:itemId" element={<SingleComicPage />} />
              <Route path="/characters/:itemId" element={<SingleCharPage />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
          <img className="bg-decoration" src={decoration} alt="vision" />
        </main>
      </div>
    </Router>
  );
}
