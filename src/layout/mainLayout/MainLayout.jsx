import Link from "next/link";
import styles from "./index.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.Main_Layout}>
      <nav>
        <ul>
          <li>
            H
            <Link href="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png"
                alt="Pokeball"
              />
            </Link>{" "}
            <br />
            ME
          </li>
          <li>
            <h3>Catch 'Em All by SimonaSunrise©</h3>
          </li>
          <li>
            <Link href="/pokedex">
              <img
                className={styles.Pokedex_Img}
                src="/pokedex.png"
                alt="Pokedex"
              />
            </Link>
          </li>
        </ul>
      </nav>

      {children}
    </div>
  );
};
export default MainLayout;
