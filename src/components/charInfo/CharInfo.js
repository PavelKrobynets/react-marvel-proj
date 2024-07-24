import { Component } from "react";
import "./charInfo.scss";
import MarvelService from "../../services/MarvelService";
import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Skeleton from "../skeleton/Skeleton";

export default class CharInfo extends Component {
  state = {
    char: null,
    loading: false,
    error: false,
  };
  marvelService = new MarvelService();

  componentDidMount() {
    this.updateChar();
  }

	componentDidUpdate(prevProps, prevState){
		if(this.props.charId !== prevProps.charId){
			this.updateChar();
		}
	}

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  onCharLoaded = (char) => {
    this.setState({ char, loading: false, error: false });
  };

  updateChar = () => {
		const { charId } = this.props;
    if (!charId) {
			return;
    }
		this.setState({ loading: true });
    this.marvelService
      .getCharacter(charId)
      .then((res) => this.onCharLoaded(res))
      .catch((err) => this.onError(err));
  };

  render() {
    const { char, loading, error } = this.state;
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
}

const View = ({ name, description, thumbnail, homepage, wiki, comics }) => {
	const comicsList =  <ComicsItem comics={comics}/>,
	image = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} alt="abyss" style={thumbnail === image ? {objectFit: "fill"} : {objectFit: "cover"}}/>
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

const ComicsItem = ({comics}) => {
	const maxItems = 10;
	const comicsLi = comics.map((item, i) => {
		return (
			<li className="char__comics-item" key={i}>{item.name}</li>
		)
	}).slice(0, maxItems)
	return comicsLi;
}