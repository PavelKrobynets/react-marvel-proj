import "./charList.scss";
import { Component } from "react";
import MarvelService from "../../services/MarvelService";
import Loader from "../loader/Loader";

export default class CharList extends Component {
  state = {
    charList: [],
		loading: true
	};

  marvelService = new MarvelService();

	componentDidMount(){
		this.loadCharacters();
	}

	onCharLoaded = (charList) => {
    this.setState({ charList, loading: false });
		console.log("char list loaded");
  };

  loadCharacters = () => {
    this.marvelService
		.getAllCharacters()
		.then((charList) => {
			this.onCharLoaded(charList)
		});
		
  };

  render() {
    const { charList, loading } = this.state;
		const maxChar = 9;
		const charArray = charList.map(item =>  <View {...item}/>).slice(0, maxChar)
    const loader = loading ? <Loader /> : null;
    return (
      <div className="char__list">
        <ul className="char__grid">
					{loader}
					{charArray}
        </ul>
        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

const View = ({ thumbnail, name }) => {
  return (
		<li className="char__item">
    <img src={thumbnail} alt="abyss" />
    <div className="char__name">{name}</div>
  </li>
	)
};
