import useHttp from "../hooks/http.hook";

export default function useMarvelService() {
  const { loading, error, request, clearError } = useHttp();

  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _key = "apikey=44c2cf8b8380798bbd06178bc0325db8";
  const _baseLimit = 9;

  const getAllCharacters = async (limit = _baseLimit) => {
    const res = await request(
      `${_apiBase}characters?limit=${limit}&offset=210&${_key}`
    );
    return res.data.results.map(_transformCharacter);
  };

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_key}`);
    return _transformCharacter(res.data.results[0]);
  };

  const _transformCharacter = (char) => {
    const description =
      char.description !== ""
        ? char.description.slice(0, 140) + "..."
        : "Hero heve no description";
    return {
      id: char.id,
      name: char.name,
      description: description,
      thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
    };
  };

  return { loading, error, getAllCharacters, getCharacter, clearError };
}
