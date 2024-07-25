export default class MarvelService {
  _apiBase = "https://gateway.marvel.com:443/v1/public/";
  _key = "apikey=44c2cf8b8380798bbd06178bc0325db8";
	_baseLimit = 9;

  getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

  getAllCharacters = async (limit = this._baseLimit) => {
    const res = await this.getResource(
      `${this._apiBase}characters?limit=${limit}&offset=210&${this._key}`
    );
    return res.data.results.map(this._transformCharacter);
  };

  getCharacter = async (id) => {
    const res = await this.getResource(
      `${this._apiBase}characters/${id}?${this._key}`
    );
    return this._transformCharacter(res.data.results[0]);
  };

  _transformCharacter = (char) => {
    const description =
      char.description !== "" ? char.description : "Hero heve no description";
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
}