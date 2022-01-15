import { Api } from "../../services/api";
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Button } from "../Button/Button";
import { Spinner } from "../Loader/Loader";
import { Fragment, useState, useEffect } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    if (!search) {
      return;
    }
    const apiData = async () => {
      try {
        const data = await Api(search, page);
        setImages((images) => [...images, ...data]);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      } catch (event) {
        console.error(event);
      } finally {
        setLoad(false);
      }
    };
    apiData();
  }, [search, page]);

  const changeQuery = (query) => {
    setLoad(true);
    setSearch(query);
    setPage(1);
    setImages([]);
  };
  const loadMore = () => {
    setLoad(true);
    setPage((prevValue) => prevValue + 1);
  };
  const isVisibleBtn = images.length > 0 && images.length / page === 12;
  return (
    <Fragment>
      <Searchbar onSubmit={changeQuery} />
      <ImageGallery image={images} />
      {load && <Spinner />}
      {isVisibleBtn && <Button onClick={loadMore} />}
    </Fragment>
  );
}
