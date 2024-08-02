import "./comicsList.scss";
import uw from "../../resources/img/UW.png";
import xMen from "../../resources/img/x-men.png";
import AppBanner from "../appBanner/AppBanner";
import { useState, useEffect } from "react";
import useMarvelService from "../../services/MarvelService"

export default function ComicsList() {
 const [comics, setComics] = useState(null);
 const [comicsLength, setComicsLength] = useState(9);
	const {loading, error, getComics} = useMarvelService();

	useEffect(() => {
		getComics(comicsLength);
	})


	const loadComicses = (comicsLength) => {
		getComics(comicsLength)
		.then(comics)
	}


  return (
    <>
      <AppBanner />
      <div className="comics__list">
        <ul className="comics__grid">
          <li className="comics__item">
            <a href="#">
              <img src={uw} alt="ultimate war" className="comics__item-img" />
              <div className="comics__item-name">
                ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
              </div>
              <div className="comics__item-price">9.99$</div>
            </a>
          </li>
          <li className="comics__item">
            <a href="#">
              <img src={xMen} alt="x-men" className="comics__item-img" />
              <div className="comics__item-name">
                X-Men: Days of Future Past
              </div>
              <div className="comics__item-price">NOT AVAILABLE</div>
            </a>
          </li>
          <li className="comics__item">
            <a href="#">
              <img src={uw} alt="ultimate war" className="comics__item-img" />
              <div className="comics__item-name">
                ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
              </div>
              <div className="comics__item-price">9.99$</div>
            </a>
          </li>
          <li className="comics__item">
            <a href="#">
              <img src={xMen} alt="x-men" className="comics__item-img" />
              <div className="comics__item-name">
                X-Men: Days of Future Past
              </div>
              <div className="comics__item-price">NOT AVAILABLE</div>
            </a>
          </li>
          <li className="comics__item">
            <a href="#">
              <img src={uw} alt="ultimate war" className="comics__item-img" />
              <div className="comics__item-name">
                ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
              </div>
              <div className="comics__item-price">9.99$</div>
            </a>
          </li>
          <li className="comics__item">
            <a href="#">
              <img src={xMen} alt="x-men" className="comics__item-img" />
              <div className="comics__item-name">
                X-Men: Days of Future Past
              </div>
              <div className="comics__item-price">NOT AVAILABLE</div>
            </a>
          </li>
          <li className="comics__item">
            <a href="#">
              <img src={uw} alt="ultimate war" className="comics__item-img" />
              <div className="comics__item-name">
                ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
              </div>
              <div className="comics__item-price">9.99$</div>
            </a>
          </li>
          <li className="comics__item">
            <a href="#">
              <img src={xMen} alt="x-men" className="comics__item-img" />
              <div className="comics__item-name">
                X-Men: Days of Future Past
              </div>
              <div className="comics__item-price">NOT AVAILABLE</div>
            </a>
          </li>
        </ul>
        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    </>
  );
}
