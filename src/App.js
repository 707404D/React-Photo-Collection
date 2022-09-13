import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import Loading from "./components/Loading";
import Pagination from "./components/Pagination";
import Categories from "./components/Categories";
import Input from "./components/Input";
import Collections from "./components/Collections";
function App() {
  const [categoryId, setCategoryId] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const category = categoryId ? `category=${categoryId}` : "";

    async function fetchPhotos() {
      try {
        const response =
          await axios.get(`https://632086969f82827dcf2eca6e.mockapi.io/photos?page=${page}&limit=5&${category}
      `);
        setCollections(response.data);
      } catch (err) {
        console.warn(err);
        alert("Произошла ошибка загрузки ");
      } finally {
        setIsLoading(false);
      }
    }
    fetchPhotos();
  }, [categoryId, page]);
  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <Categories categoryId={categoryId} setCategoryId={setCategoryId} />
        <Input searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="content">
        {isLoading ? (
          <Loading />
        ) : (
          <Collections collections={collections} searchValue={searchValue} />
        )}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default App;
