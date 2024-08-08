import { useState } from "react";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import CharSearchFrom from "../charSearchForm/CharSearchFrom";


export default function MainPage() {

	const [selectedChar, setSelectedChar] = useState(null);

  const onCharSelected = (id) => {
    setSelectedChar(id);
  };

  return (
    <>
      <ErrorBoundary>
        <RandomChar />
      </ErrorBoundary>
      <div className="char__content">
        <ErrorBoundary>
          <CharList onCharSelected={onCharSelected} />
        </ErrorBoundary>
        <div className="char__info-block">
				<ErrorBoundary>
          <CharInfo charId={selectedChar} />
        </ErrorBoundary>
				<ErrorBoundary>
					<CharSearchFrom/>
				</ErrorBoundary>
      </div>
				</div>
    </>
  );
}
