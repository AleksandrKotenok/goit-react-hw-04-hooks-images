import { Api } from "../../service/api";
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Button } from "../Button/Button";
import { Spinner } from "../Loader/Loader";
import React, { Component, Fragment } from "react";

export default class App extends Component {
  state = {
    search: "",
    page: 1,
    images: [],
    loader: false,
  };
  componentDidUpdate(prevProps, { search, page }) {
    const apiData = async () => {
      this.loader();
      try {
        const data = await Api(this.state.search, this.state.page);
        this.setState(({ images }) => {
          return { images: [...images, ...data.hits] };
        });
      } catch (event) {
        console.error(event);
      } finally {
        this.loader();
      }
    };
    if (search !== this.state.search || page !== this.state.page) {
      apiData();
    }
    if (this.state.page !== 1) {
      this.scroll();
    }
  }
  loader = () => {
    this.setState(({ loader }) => ({ loader: !loader }));
  };
  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  modalData = (checkedId) => {
    const image = this.state.images.find(({ id }) => id === checkedId);
    this.setState({ modalImages: image.largeImageURL });
  };

  changeQuery = (query) => {
    this.setState({
      search: query,
      page: 1,
      images: [],
    });
  };
  more = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, page, loader } = this.state;
    const enable = images.length > 0 && images.length / page === 12;
    return (
      <Fragment>
        <Searchbar onSubmit={this.changeQuery} />
        <ImageGallery image={images} onClick={this.modalData} />
        {loader && <Spinner />}
        {enable && <Button onClick={this.more} />}
      </Fragment>
    );
  }
}
