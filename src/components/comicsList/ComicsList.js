import "./comicsList.scss";
import AppBanner from "../appBanner/AppBanner";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useMarvelService from "../../services/MarvelService";
import setContent from "../../utils/setContent";

export default function ComicsList() {
  const [comics, setComics] = useState([]);
  const [comicsLength, setComicsLength] = useState(8);

  const { getAllComics, loadMore, listLoaded, process, setProcess } =
    useMarvelService();

  useEffect(() => {
    loadComicses(comicsLength, false);
  }, []);

  const loadComicses = (comicsLength, toggler) => {
    getAllComics(comicsLength, toggler)
      .then(setComics)
      .then(() => {
        setProcess("confirmed");
      });
  };

  const addComicsLength = () => {
    const newComicsLength = comicsLength + 8;
    setComicsLength(newComicsLength);
    loadComicses(newComicsLength, true);
  };

  function renderComicsLsit(comics) {
    const comicses = comics.map((item) => {
      return (
        <li className="comics__item" key={item.id}>
          <Link to={`/comics/${item.id}`}>
            <div className="comics__item-img">
              <img
                src={item.thumbnail}
                alt={item.name}
                style={
                  item.thumbnail ===
                  "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
                    ? { height: "100%" }
                    : { objectFit: "fill" }
                }
              />
            </div>
            <div className="comics__item-name">{item.name}</div>
            <div className="comics__item-price">{item.price}</div>
          </Link>
        </li>
      );
    });

    return <ul className="comics__grid">{comicses}</ul>;
  }

  function showBtn() {
    if (listLoaded) {
      return (
        <button
          className={`button button__main button__long button__load`}
          onClick={() => addComicsLength()}
          style={
            loadMore === true
              ? { animation: "glowing 1300ms infinite" }
              : { animation: "glowing" }
          }
        >
          <div className="inner">load more</div>
        </button>
      );
    }
    return null;
  }

  return (
    <div className="comics">
      <AppBanner />
      <div className="comics__list">
        {setContent(loadMore, process, () => renderComicsLsit(comics))}
      </div>
      {showBtn()}
    </div>
  );
}
