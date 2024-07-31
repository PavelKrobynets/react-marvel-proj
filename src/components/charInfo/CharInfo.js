import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./charInfo.scss";
import MarvelService from "../../services/MarvelService";
import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Skeleton from "../skeleton/Skeleton";

function CharInfo(props) {
  const [char, setChar] = useState(null),
    [loading, setLoading] = useState(false),
    [error, setError] = useState(false);

  const marvelService = new MarvelService();

  useEffect(() => {
    updateChar();
		console.log("change");
  }, [props.charId]);

  const onError = () => {
    setLoading(false);
    setError(true);
  };


  const onCharLoaded = (char) => {
    setChar(char);
    setLoading(false);
    setError(false);
  };

  const updateChar = () => {
    const { charId } = props;
    if (!charId) {
      return;
    }
    setLoading(true);
    marvelService
      .getCharacter(charId)
      .then(onCharLoaded)
      .catch(onError);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const loader = loading ? <Loader /> : null;
  const skeleton = char || error || loading ? null : <Skeleton />;
  const content = !(loading || error || !char) ? <View {...char} /> : null;

  return (
    <div className="char__info">
      {skeleton}
      {content}
      {loader}
      {errorMessage}
    </div>
  );
}

const View = ({ name, description, thumbnail, homepage, wiki, comics }) => {
  const comicsList = <ComicsItem comics={comics} />,
    image =
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
  return (
    <>
      <div className="char__basics">
        <img
          src={thumbnail}
          alt="abyss"
          style={
            thumbnail === image ? { objectFit: "fill" } : { objectFit: "cover" }
          }
        />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{description}</div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {comics.length === 0 ? "No comics with this character" : comicsList}
      </ul>
    </>
  );
};

const ComicsItem = ({ comics }) => {
  const maxItems = 10;
  const comicsLi = comics
    .map((item, i) => {
      return (
        <li className="char__comics-item" key={i}>
          {item.name}
        </li>
      );
    })
    .slice(0, maxItems);
  return comicsLi;
};

CharInfo.propTypes = {
  charId: PropTypes.number,
};

export default CharInfo;
