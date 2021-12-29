import { Component } from "react";
import { Modal } from "../../Modal/Modal";
import s from "./ImageGalleryItem.module.css";

export default class ImageGalleryItem extends Component {
  state = {
    modal: false,
  };
  modal = () => {
    this.setState(({ modal }) => ({ modal: !modal }));
  };

  render() {
    return (
      <li className={s.item}>
        <img onClick={this.modal} className={s.image} src={this.props.web} alt="" />
        {this.state.modal && <Modal large={this.props.large} modal={this.modal} alt="" />}
      </li>
    );
  }
}
