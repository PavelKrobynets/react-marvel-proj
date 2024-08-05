import { useParams, Link } from "react-router-dom";
import "./singleComicPage.scss";
import { useEffect, useState } from "react";
import MarvelService from "../../services/MarvelService";
import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";

export default function SingleComicPage() {
  const { comicId } = useParams();
  const [comic, setComic] = useState(null);

  const { loading, error, getComic, clearError } = MarvelService();

  useEffect(() => {
    updateComic();
    console.log("change comic");
  }, [comicId]);

  const onComicLoaded = (comic) => {
    setComic(comic);
  };

  const updateComic = () => {
    clearError();
    getComic(comicId).then(onComicLoaded);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const loader = loading ? <Loader /> : null;
  const content = !(loading || error || !comic) ? <View {...comic} /> : null;

  return (
    <>
      {errorMessage}
      {loader}
      {content}
    </>
  );
}

const View = ({
  title,
  thumbnail,
  price,
  description,
  pageCount,
  language,
}) => {
  return (
    <div className="single-comic">
      <img src={thumbnail} alt={title} className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{title}</h2>
        <p className="single-comic__descr">{description}</p>
        <p className="single-comic__descr">{pageCount}</p>
        <p className="single-comic__descr">Language: {language}</p>
        <div className="single-comic__price">{price}</div>
      </div>
      <Link to="/comics" className="single-comic__back">
        Back to all
      </Link>
    </div>
  );
};
