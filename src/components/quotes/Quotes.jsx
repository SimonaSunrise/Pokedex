import { useRouter } from "next/router";

import styles from "./index.module.scss";

const Quotes = ({ paragraph, title, imageSrc }) => {
  const router = useRouter();
  const onHandleClick = (e) => {
    e.preventDefault();
    router.push(`/pokedex/${title}`.toLowerCase());
  };
  return (
    <div className={styles.Quotes}>
      <div className={styles.text}>
        <p>{paragraph}</p>
        <h2 onClick={onHandleClick}>{title} </h2>
      </div>
      <div className={styles.pics}>
        <img src={imageSrc} alt={title} onClick={onHandleClick} />
      </div>
    </div>
  );
};

export default Quotes;
