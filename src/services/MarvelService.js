export default class MarvelService {
	_apiBase = 'https://gateway.marvel.com:443/v1/public/';
	_key = 'apikey=44c2cf8b8380798bbd06178bc0325db8"'
  getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

  getAllCharacters = () => {
    return this.getResource(
      `${this._apiBase}characters?limit=9&offset=210&${this._key}`);
  };

	getAllCharacter = (id) => {
    return this.getResource(
      `${this._apiBase}characters/${id}?${this._key}`);
  };
}
