import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MarvelService from "../../services/MarvelService";
import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";

export default function InfoHandler(props) {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  const { loading, error, getComic, getCharacter, clearError } =
    MarvelService();

  useEffect(() => {
    updateItem();
  }, [itemId]);

  const updateItem = () => {
    clearError();
    props.char === "char"
      ? getCharacter(itemId).then(setItem)
      : getComic(itemId).then(setItem);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const loader = loading ? <Loader /> : null;
  const content = !(loading || error || !item) ? <View {...item} /> : null;

  return (
    <>
      {errorMessage}
      {loader}
      {content}
    </>
  );
}

const View = ({ name, thumbnail, price, description, pageCount, language }) => {
  return (
    <div className="single-comic">
      <img src={thumbnail} alt={name} className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{name}</h2>
        <p className="single-comic__descr">{description}</p>
        <p className="single-comic__descr">{pageCount}</p>
        <p className="single-comic__descr">{language}</p>
        <div className="single-comic__price">{price}</div>
      </div>
      <Link to={price ? "/comics" : "/"} className="single-comic__back">
        Back to all
      </Link>
    </div>
  );
};
