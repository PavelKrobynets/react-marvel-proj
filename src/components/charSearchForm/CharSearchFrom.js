import { useState } from "react";
import { useForm } from "react-hook-form";
import useMarvelService from "../../services/MarvelService";
import { Link } from "react-router-dom";
import ErrorMessage from '../errorMessage/ErrorMessage';
import "./charSearchFrom.scss";

export default function CharSearchFrom() {
  const [char, setChar] = useState(null);
  const { getCharacterByName ,error } = useMarvelService();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (name) => {
    getCharacterByName(name.name).then(setChar);
	}

  const errorMessage = error ? <div className="char__search-critical-error"><ErrorMessage /></div> : null;
  const results = !char ? null : char.length > 0 ?
                    <div className="char__search-wrapper">
                        <div className="char__search-success">There is! Visit {char[0].name} page?</div>
                        <Link to={`/characters/${char[0].id}`} className="button button__secondary">
                            <div className="inner">To page</div>
                        </Link>
                    </div> : 
                    <div className="char__search-error">
                        The character was not found. Check the name and try again
                    </div>;

  return (
    <div className="char__search-form">
			<form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name" className="char__search-label">Or find character by name:</label>
      <div className="char__search-wrapper">
			<input
        placeholder="Enter character name"
        {...register("name", {
          required: true,
          minLength: { value: 3, message: "Char name should be longer than 3 symbols" },
        })}
      />
			<button type="submit" className="button button__main">
				<div className="inner">try it</div>
				</button>
			</div>
      {errors.name ? <div className="char__search-error">{errors.name.message}</div> : null}
    </form>
		{errorMessage}
		{results}
		</div>
  );
}
