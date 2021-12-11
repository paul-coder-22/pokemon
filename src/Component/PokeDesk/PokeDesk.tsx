import React from 'react';
import { PokemonSchema } from '../../Types/PokemonSchema';
import SearchBox from '../SearchBox/SearchBox';
import Pokelist from '../PokeList/Pokelist';


interface PokedeskhOps {
    onInputChange : (inputValue : string) => void,
    selectedPokemons : PokemonSchema | undefined;
    handleOnClick : (inputValue:string) => void;
    searchedPokemons : PokemonSchema[];
}

const PokeDesk = ({onInputChange ,selectedPokemons ,handleOnClick ,searchedPokemons}:PokedeskhOps) => {
    return (
        <div>
        <SearchBox onInputChange={onInputChange}  />
        <Pokelist searchedPokemons={searchedPokemons}  handleOnClick={handleOnClick} />
        </div>
    );
};

export default PokeDesk;