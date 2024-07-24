import { Component } from "react";
import "./randomChar.scss";
import mjolnir from "../../resources/img/mjolnir.png";
import MarvelService from "../../services/MarvelService";
import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";

export default class RandomChar extends Component {
  state = {
    char: {},
    loading: true,
    error: false,
  };
  marvelService = new MarvelService();

  componentDidMount() {
    this.updateChar();
		// IT CAUSES CHAR LOADING 2 TIMES (Strict mode)
  }

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  onCharLoaded = (char) => {
    this.setState({ char, loading: false });
  };

  updateChar = () => {
    this.setState({ loading: true , error: false});
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    this.marvelService
      .getCharacter(id)
      .then((res) => {
        this.onCharLoaded(res);
      })
      .catch((error) => this.onError(error));
  };

  render() {
    const { char, loading, error } = this.state;
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
          <button className="button button__main" onClick={this.updateChar}>
            <div className="inner">try it</div>
          </button>
          <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
        </div>
      </div>
    );
  }
}

const View = ({ name, description, thumbnail, homepage, wiki }) => {
	const defImgUrl = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
	let rigthDescr = description.length < 140 ? description :  description.slice(0, 140) + "...";
  return (
    <div className="randomchar__block">
      <img src={thumbnail} alt="Random character" className="randomchar__img" 
			style={thumbnail === defImgUrl ? {objectFit: "fill"} : {objectFit: "cover"}}/>
      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">{rigthDescr}</p>
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
