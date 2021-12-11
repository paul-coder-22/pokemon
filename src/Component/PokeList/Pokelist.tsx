import React, { useEffect } from 'react';
import { PokemonSchema } from '../../Types/PokemonSchema';
import Pokecard from "../Pokecard/Pokecard";
import Slider from "react-slick";
interface PokemonlistProps {
    searchedPokemons : PokemonSchema[];
    handleOnClick : (pokemonName : string) => void    
}

const Pokelist = ({searchedPokemons,handleOnClick}:PokemonlistProps) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover : false,
  };
  
    return (
    <div>
        <Slider {...settings}>
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
       </Slider>
       </div>
    );
}

export default Pokelist;