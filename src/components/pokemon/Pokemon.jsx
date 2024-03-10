import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.scss";

const Pokemon = ({ pokemonData }) => {
  const router = useRouter();

  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    const fetchPokemonDetails = () => {
      const promises = pokemonData.map((pokemon) => {
        return fetch(pokemon.url).then((response) => response.json());
      });

      Promise.all(promises).then((pokemonDetailsData) =>
        setPokemonDetails(pokemonDetailsData)
      );
    };

    fetchPokemonDetails();
  }, [pokemonData]);

  const onHandleClick = (pokemon) => {
    if (pokemon && pokemon.name) {
      router.push(`/pokedex/${pokemon.name.toLowerCase()}`);
    }
  };

  return (
    <>
      <h1></h1>
      <div className={styles.Pokemon_box}>
        {pokemonDetails.map((pokemon) => (
          <div className={styles.Card}>
            <div className={styles.Card_Title}>
              <h3>{pokemon.name.toUpperCase()}</h3>
              <p>#{pokemon.id}</p>
            </div>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
              onClick={() => onHandleClick(pokemon)}
            />
            <div className={styles.Types}>
              {pokemon.types.map((tipo) => (
                <div key={tipo.type.name} className={styles.Type}>
                  {tipo.type.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pokemon;
