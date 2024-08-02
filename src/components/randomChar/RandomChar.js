import { useState, useEffect } from "react";
import "./randomChar.scss";
import mjolnir from "../../resources/img/mjolnir.png";
import useMarvelService from "../../services/MarvelService";
import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";

export default function RandomChar() {
  const [char, setCahr] = useState({});

  const { loading, error, getCharacter, clearError} = useMarvelService();

  useEffect(() => {
    updateChar();
    // IT CAUSES CHAR LOADING 2 TIMES (Strict mode)
  }, []);

  const onCharLoaded = (char) => {
    setCahr(char);
  };

  const updateChar = () => {
		clearError();
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    getCharacter(id).then(onCharLoaded);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const loader = loading ? <Loader /> : null;
  const content = !(loading || error) ? <View {...char} /> : null;
  return (
    <div className="randomchar">
      {errorMessage}
      {loader}
      {content}
      <div className="randomchar__static">
        <p className="randomchar__title">
          Random character for today!
          <br />
          Do you want to get to know him better?
        </p>
        <p className="randomchar__title">Or choose another one</p>
        <button className="button button__main" onClick={updateChar}>
          <div className="inner">try it</div>
        </button>
        <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
      </div>
    </div>
  );
}

const View = ({ name, description, thumbnail, homepage, wiki }) => {
  const defImgUrl =
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
  
  return (
    <div className="randomchar__block">
      <img
        src={thumbnail}
        alt="Random character"
        className="randomchar__img"
        style={
          thumbnail === defImgUrl
            ? { objectFit: "fill" }
            : { objectFit: "cover" }
        }
      />
      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">{description}</p>
        <div className="randomchar__btns">
          <a href={homepage} className="button button__main">
            <div className="inner">homepage</div>
          </a>
          <a href={wiki} className="button button__secondary">
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>
    </div>
  );
};
