import React from 'react';

interface PokeCard {
    handleOnClick : (pokemonName:string) => void;
    name:string;
    spriteUrl?:string 
}

function Pokecard({handleOnClick,name,spriteUrl}:PokeCard) {
    return (
        <div onClick={() => handleOnClick(name)} style={{display:"flex"}}>
            <img src={spriteUrl} alt="pokemon" />
            <p>{name}</p>
        </div>
    );
}

export default Pokecard;