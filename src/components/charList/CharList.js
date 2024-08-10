import "./charList.scss";
import { useState, useEffect, useRef } from "react";
import useMarvelService from "../../services/MarvelService";
import setContent from "../../utils/setContent";

export default function CharList(props) {
  const [charList, setCharList] = useState([]),
    [charLength, setCharLength] = useState(9);

  const {
    getAllCharacters,
    loadMore,
    listLoaded,
    process,
    setProcess,
  } = useMarvelService();

  useEffect(() => {
    loadCharacters(charLength, false);
  }, []);

  const loadCharacters = (charLength, toggler) => {
    getAllCharacters(charLength, toggler).then(setCharList).then(() => setProcess("confirmed"))
  };

  const addCharLength = () => {
    const newCharLength = charLength + 9;
    setCharLength(newCharLength);
    loadCharacters(newCharLength, true);
    console.log("loaded");
  };

  const itemRefs = useRef([]);

  const focusOnItem = (id) => {
    itemRefs.current.forEach((item) =>
      item.classList.remove("char__item_selected")
    );
    itemRefs.current[id].classList.add("char__item_selected");
    itemRefs.current[id].focus();
  };

  function renderItems(charList) {
    const maxChar = charLength;
    const items = charList
      .map((item, i) => {
        const defImgUrl =
          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
        return (
          <li
            className="char__item"
            key={item.id}
            ref={(el) => (itemRefs.current[i] = el)}
            onClick={(e) => {
              props.onCharSelected(item.id);
              focusOnItem(i);
            }}
            onKeyDownCapture={(e) => {
              if (e.key === " " || e.key === "Enter") {
                props.onCharSelected(item.id);
                focusOnItem(i);
              }
            }}
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

  function showBtn() {
    if (listLoaded) {
      return (
        <button
          className={`button button__main button__long button__load`}
          onClick={() => addCharLength()}
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
    <div className="char__list">
      {setContent(loadMore ,process, () => renderItems(charList))}
      {showBtn()}
    </div>
  );
}
