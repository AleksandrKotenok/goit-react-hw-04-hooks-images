import React, { Component } from "react";

import s from "../Searchbar/Searchbar.module.css";

export default class Searchbar extends Component {
  state = {
    query: "",
  };
  searchChange = ({ target: { value } }) => {
    this.setState({ query: value.toLowerCase() });
    console.log(this.state.query);
  };
  submit = (event) => {
    event.preventDefault();
    if (this.state.query.trim() === "") {
      this.setState({ query: "" });
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.submit}>
          <button type="submit" className={s.button}>
            <span className={s.label}>Search</span>
          </button>
          <input className={s.input} type="text" autoComplete="off" autoFocus placeholder="Search images and photos" onChange={this.searchChange} />
        </form>
      </header>
    );
  }
}
