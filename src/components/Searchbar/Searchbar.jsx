import PropTypes from "prop-types";
import { useState } from "react";
import s from "../Searchbar/Searchbar.module.css";

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const searchChange = (event) => setQuery(event.currentTarget.value.toLowerCase());
  const submit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      console.error("Enter your query!");
      return;
    }
    onSubmit(query);
    setQuery("");
  };
  return (
    <header className={s.searchbar}>
      <form className={s.form} onSubmit={submit}>
        <button type="submit" className={s.button}>
          <span className={s.label}>Search</span>
        </button>
        <input className={s.input} type="text" autoComplete="off" autoFocus placeholder="Search images and photos" onChange={searchChange} />
      </form>
    </header>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
