import Loader from "react-loader-spinner";
import s from "../Loader/Loader.module.css";

export const Spinner = () => {
  return (
    <section className={s.loader}>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={200}
        width={200}
        timeout={3000} //3 secs
      />
    </section>
  );
};
