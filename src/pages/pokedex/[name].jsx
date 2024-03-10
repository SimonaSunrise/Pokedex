import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../../styles/Pokedex.module.scss";

export default function Pokedex() {
  const router = useRouter();
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    if (router.query.name) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.name}`)
        .then((res) => {
          if (!res.ok) {
            setNotFound(true);
            throw new Error("Pokemon not found");
          }
          return res.json();
        })
        .then((data) => setPokemonData(data))
        .catch((error) => console.error(error));
    }
  }, [router.query.name]);

  const onHandleSubmit = (e) => {
    router.push(pokemonSearch.toLowerCase());
    e.preventDefault();
    onHandleClear();
  };

  const onHandleChange = (e) => {
    setPokemonSearch(e.target.value);
  };

  const onHandleClear = () => {
    setPokemonSearch("");
  };
  return (
    <>
      {notFound ? (
        <p className={styles.notfound}>
          {router.query.name} not found...💢 <br />
          <br />
          try again! <br />
          <br />{" "}
        </p>
      ) : (
        <>
          {pokemonData.sprites ? (
            <div className={styles.Pokedex}>
              <div className={styles.Pokedex_Img_Container}>
                <img
                  src="https://i.pinimg.com/736x/14/bd/68/14bd686faedccee521a84e293f50cbb6.jpg"
                  alt={pokemonData.name}
                  className={styles.Base_Img}
                />
                <img
                  src={pokemonData.sprites.other.dream_world.front_default}
                  alt={pokemonData.name}
                  className={styles.Pokemon_Img}
                />
                <form onSubmit={onHandleSubmit} className={styles.Form_Dinamic}>
                  <input
                    value={pokemonSearch}
                    onChange={onHandleChange}
                    type="text"
                    placeholder="Search another Pokémon here🔎"
                    required
                    className={styles.Input}
                  />
                  <input
                    type="submit"
                    value=" "
                    className={styles.Submit_Dinamic}
                  />
                  <input
                    type="button"
                    onClick={onHandleClear}
                    className={styles.Clear_Dinamic}
                  />
                </form>
              </div>

              <div className={styles.Pokedex_Text}>
                <div className={styles.Pokedex_Title}>
                  <h1>{pokemonData.name.toUpperCase()}</h1>
                  <img
                    src={pokemonData.sprites.other.home.front_default}
                    alt={pokemonData.name}
                    className={styles.Pokemon_Img}
                  />
                </div>
                <div className={styles.Pokedex_Text_Type_Exp}>
                  {pokemonData.types.map((type, i) => (
                    <p key={i}> type: {type.type.name}</p>
                  ))}
                  <p>base experience: {pokemonData.base_experience}</p>
                </div>
                <div>
                  <p>Weight: {pokemonData.weight}</p>
                  <p>Height: {pokemonData.height}</p>
                </div>
                <div className={styles.Pokedex__Text}>
                  {pokemonData.stats.map((stat, i) => (
                    <div key={i}>
                      <p>
                        {stat.stat.name}: {stat.base_stat}
                      </p>
                    </div>
                  ))}
                </div>
                <div className={styles.Pokedex_Id_Section}>
                  <div className={styles.Pokedex_Id_Section_Ball}>
                    <p className={styles.Pokedex_Id}>ID: #{pokemonData.id}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <p className={styles.notfound}>
                {" "}
                {router.query.name +
                  " not found... 💢 or wait for 3, 2, 1 sec! ⌛ "}
              </p>
            </>
          )}
        </>
      )}
    </>
  );
}
