import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import MarvelService from "../../services/MarvelService";
import AppBaner from "../appBanner/AppBanner";
import setContent from "../../utils/setContent";

export default function InfoHandler(props) {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  const { getComic, getCharacter, process, setProcess } = MarvelService();

  useEffect(() => {
    updateItem();
  }, [itemId]);

  const updateItem = () => {
    props.char === "char"
      ? getCharacter(itemId).then(setItem).then(setProcess("confirmed"))
      : getComic(itemId).then(setItem).then(setProcess("confirmed"));
  };

  return (
    <>
      <AppBaner />
      {setContent(false, process, View, item)}
    </>
  );
}

const View = ({ name, thumbnail, price, description, pageCount, language }) => {
  return (
    <>
      <Helmet>
        <meta name="description" content={`${name} page`} />
        <title>{name}</title>
      </Helmet>
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
    </>
  );
};
