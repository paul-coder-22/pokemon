import React from 'react';
import { PokemonSchema } from '../../Types/PokemonSchema';
import Pokecard from "../Pokecard/Pokecard";
import "./Pokelist.css";
interface PokemonlistProps {
    searchedPokemons : PokemonSchema[];
    handleOnClick : (pokemonName : string) => void    
}

const Pokelist = ({searchedPokemons,handleOnClick}:PokemonlistProps) => {
  
    return (
    <div className='cardList'> 
    {
        searchedPokemons.map(({name,sprites},idx) => {
            return (
                name && (
                <Pokecard key={idx}
                handleOnClick={handleOnClick}
                name={name}
                spriteUrl={sprites === undefined ? undefined : sprites.normal}
                    />
                )
            )
        })
    }
       </div>
    );
}

export default Pokelist;