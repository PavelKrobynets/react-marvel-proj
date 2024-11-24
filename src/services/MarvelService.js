import { useState } from "react";
import useHttp from "../hooks/http.hook";

export default function useMarvelService() {
  const { request, clearError, process, setProcess } = useHttp();
  const [loadMore, setLoadMore] = useState(false);
  const [listLoaded, setListLoaded] = useState(false);

  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _key = "apikey=44c2cf8b8380798bbd06178bc0325db8";
  const _baseLimit = 9;
  console.log("API Base URL:", _apiBase);
  console.log("API Key:", _key);

  // Character block

  const getAllCharacters = async (limit = _baseLimit, toggler) => {
    setLoadMore(toggler);
    const res = await request(
      `${_apiBase}characters?limit=${limit}&offset=210&${_key}`
    );
    setLoadMore(false);
    setListLoaded(true);
    return res.data.results.map(_transformCharacter);
  };

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_key}`);
    return _transformCharacter(res.data.results[0]);
  };

  const getCharacterByName = async (name) => {
    const res = await request(`${_apiBase}characters?name=${name}&${_key}`);
    return res.data.results.map(_transformCharacter);
  };

  const _transformCharacter = (char) => {
    const description =
      char.description !== ""
        ? char.description.slice(0, 140) + "..."
        : "Hero have no description";
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

  // Comics block
  const getAllComics = async (limit = _baseLimit, toggler) => {
    setLoadMore(toggler);
    const res = await request(
      `${_apiBase}comics?limit=${limit}&offset=2&${_key}`
    );
    setLoadMore(false);
    setListLoaded(true);
    return res.data.results.map(_transformComic);
  };

  const getComic = async (id) => {
    const res = await request(`${_apiBase}comics/${id}?${_key}`);
    return _transformComic(res.data.results[0]);
  };

  const _transformComic = (comic) => {
    return {
      id: comic.id,
      name: comic.title,
      thumbnail: comic.thumbnail.path + "." + comic.thumbnail.extension,
      price: comic.prices[0].price
        ? `${comic.prices[0].price}$`
        : "not available",
      description: comic.description || "There is no description",
      pageCount: comic.pageCount
        ? `${comic.pageCount} p.`
        : "No info about pages",
      language: comic.textObjects.language || "en-us",
    };
  };

  return {
    getAllCharacters,
    getCharacter,
    clearError,
    getAllComics,
    getComic,
    loadMore,
    listLoaded,
    getCharacterByName,
    process,
    setProcess,
  };
}
