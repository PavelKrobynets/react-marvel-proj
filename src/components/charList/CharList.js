import "./charList.scss";
import { Component } from "react";
import MarvelService from "../../services/MarvelService";
import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";

export default class CharList extends Component {
  state = {
    charList: [],
    loading: true,
    error: false,
    charLength: 9,
    loadMore: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.loadCharacters(this.charLength);
  }

  onError = () => {
    this.setState({
      error: true,
    });
  };

  onCharLoaded = (charList) => {
    this.setState({ charList, loading: false });
  };

  loadCharacters = (charLength) => {
    this.marvelService.getAllCharacters(charLength).then((charList) => {
      this.onCharLoaded(charList);
      this.setState({
        loadMore: false,
      });
    });
  };

  addCharLength = () => {
    const newCharLength = this.state.charLength + 9;
    this.setState(({
      loadMore: true,
      charLength: newCharLength,
    }));
    console.log(newCharLength);
    this.loadCharacters(newCharLength);
  };

  renderItems(charList) {
    const maxChar = this.state.charLength;
    const items = charList
      .map((item) => {
        const defImgUrl =
          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
        return (
          <li
            className="char__item"
            key={item.id}
            onClick={() => this.props.onCharSelected(item.id)}
          >
            <img
              src={item.thumbnail}
              alt="abyss"
              style={
                item.thumbnail === defImgUrl
                  ? { objectFit: "fill" }
                  : { objectFit: "cover" }
              }
            />
            <div className="char__name">{item.name}</div>
          </li>
        );
      })
      .slice(0, maxChar);

    return <ul className="char__grid">{items}</ul>;
  }

  render() {
    const { charList, loading, errorMessage, loadMore } = this.state,
      items = this.renderItems(charList),
      loader = loading ? <Loader /> : null,
      error = errorMessage ? <ErrorMessage /> : null,
      content = !(loader || errorMessage) ? items : null;

    return (
      <div className="char__list">
        {loader}
        {error}
        {content}
        <button
          className="button button__main button__long button__load"
          onClick={this.addCharLength}
          style={
            loadMore === true ? { animation: "glowing 1300ms infinite" } : { animation: "glowing" }
          }
        >
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}
