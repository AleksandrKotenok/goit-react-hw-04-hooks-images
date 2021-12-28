import { Component } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";
const modal = document.querySelector("#modal");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.closeEsc);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeEsc);
  }
  closeEsc = (event) => {
    if (event.code === "Escape") {
      this.props.modal();
    }
  };
  closeBackdrop = (event) => {
    if (event.currentTarget === event.target) {
      this.props.modal();
    }
  };

  render() {
    return createPortal(
      <div className={s.overlay} onClick={this.closeBackdrop}>
        <div className={s.modal}>
          <img src={this.props.large} alt="" />
        </div>
      </div>,
      modal
    );
  }
}
