import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../../styles/Pokedex.module.scss";
import Pokemon from "@/components/pokemon";

export default function Pokedex() {
  const router = useRouter();
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const randomOffset = Math.floor(Math.random() * 34) * 6;
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${randomOffset}&limit=30`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemonData(data.results));
  }, []);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    router.push(`/pokedex/${pokemonSearch}`.toLowerCase());
  };

  const onHandleChange = (e) => {
    setPokemonSearch(e.target.value);
  };

  return (
    <>
      <div className={styles.Text_Container_Index}>
        <h4>
          Here you can search for all the Pokémon you want and find out
          everything about them.
        </h4>
        <p>
          With over 800 Pokémon out there, have fun discovering them all and
          become the best trainer you can be!
        </p>
      </div>
      <form onSubmit={onHandleSubmit} className={styles.Form_Index}>
        <input
          className={styles.Input_Index}
          value={pokemonSearch}
          onChange={onHandleChange}
          type="text"
          placeholder="Search Pokèmon"
          required
        />
        <input type="submit" value="⚡" className={styles.Input_Btn_Index} />
      </form>

      <Pokemon pokemonData={pokemonData} />
    </>
  );
}
