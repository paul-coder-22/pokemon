import React from "react";
import "./PokeDesk.css";
import { PokemonSchema } from "../../Types/PokemonSchema";
import SearchBox from "../SearchBox/SearchBox";
import Pokelist from "../PokeList/Pokelist";
import Pokesearch from "../Pokesearch/Pokesearch";

interface PokedeskhOps {
  onInputChange: (inputValue: string) => void;
  selectedPokemons: PokemonSchema | undefined;
  handleOnClick: (inputValue: string) => void;
  searchedPokemons: PokemonSchema[];
}

const PokeDesk = ({
  onInputChange,
  selectedPokemons,
  handleOnClick,
  searchedPokemons,
}: PokedeskhOps) => {
  return (
    <div className="pokmon-dashboard">
      <div className="searchlist-container">
        <SearchBox onInputChange={onInputChange} />
        <Pokelist
          searchedPokemons={searchedPokemons}
          handleOnClick={handleOnClick}
        />
      </div>
      <div className="selected-pokemon">
        <Pokesearch selectedPokemons={selectedPokemons} />
      </div>
    </div>
  );
};

export default PokeDesk;
